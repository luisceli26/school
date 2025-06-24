import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Calendar, ExternalLink } from "lucide-react";

export const FacebookPosts = ({ numberOfPosts }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pageId = import.meta.env.VITE_FACEBOOK_PAGE_ID;
    const accessToken = import.meta.env.VITE_FACEBOOK_PAGE_TOKEN;
    const url = `https://graph.facebook.com/${pageId}/posts?access_token=${accessToken}&fields=message,created_time,attachments`;

    axios
      .get(url)
      .then((response) => {
        setPosts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error al obtener las publicaciones de Facebook");
        setLoading(false);
      });
  }, []);

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const isMobile = () => {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const LoadingSkeleton = () => (
    <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
      {[...Array(numberOfPosts || 6)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col p-4 bg-white rounded-lg shadow-md animate-fade-in"
        >
          <Skeleton height={80} className="mb-4" />
          <Skeleton width={150} height={20} className="mb-4" />
          <Skeleton height={240} className="rounded-lg" />
          <div className="flex justify-center mt-4">
            <Skeleton width={160} height={40} className="rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <div className="inline-block p-4 bg-red-100 rounded-lg">
          <p className="font-medium text-red-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 mt-4 text-white transition-colors bg-red-500 rounded hover:bg-red-600"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  const displayedPosts = numberOfPosts ? posts.slice(0, numberOfPosts) : posts;

  return (
    <div className="py-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
          {displayedPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col p-4 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="flex-grow">
                <h2 className="min-h-[5rem] mt-2 text-xl font-semibold text-gray-900 line-clamp-3">
                  {truncateText(post.message, 100)}
                </h2>

                <div className="flex items-center mt-3 text-sm text-gray-500">
                  <Calendar size={16} className="mr-2" />
                  <p className="capitalize">
  {new Date(post.created_time).toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
</p>

                </div>

                {post.attachments?.data?.[0]?.media && (
                  <div className="mt-4 overflow-hidden rounded-lg">
                    <img
                      src={post.attachments.data[0].media.image.src}
                      alt="Imagen de la publicación"
                      className="object-cover w-full transition-transform duration-300 h-60 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              <a
                href={
                  isMobile()
                    ? `fb://page${post.id}`
                    : `https://www.facebook.com/${post.id}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-white py-2 px-6 rounded-full hover:bg-[#fda713] transition-colors duration-300 mx-auto"
              >
                Ver más
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
