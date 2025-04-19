import React, { useEffect, useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const FacebookPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchFirstAlbumPhotos = async () => {
      const pageId = import.meta.env.VITE_FACEBOOK_PAGE_ID;
      const accessToken = import.meta.env.VITE_FACEBOOK_PAGE_TOKEN;

      try {
        const albumsResponse = await axios.get(
          `https://graph.facebook.com/v11.0/${pageId}/albums?access_token=${accessToken}`
        );

        const albums = albumsResponse.data.data;

        if (albums.length > 0) {
          const firstAlbumId = albums[0].id;

          const photosResponse = await axios.get(
            `https://graph.facebook.com/v11.0/${firstAlbumId}/photos?fields=images&limit=15&access_token=${accessToken}`
          );

          setPhotos(photosResponse.data.data);
          setNextPage(photosResponse.data.paging?.next || null);
        } else {
          setError("No se encontraron álbumes.");
        }
      } catch (error) {
        setError("Error al obtener las fotos de Facebook.");
      } finally {
        setLoading(false);
      }
    };

    fetchFirstAlbumPhotos();
  }, []);

  const fetchNextPage = async () => {
    if (!nextPage) return;

    try {
      setLoading(true);

      const response = await axios.get(nextPage);

      setPhotos((prevPhotos) => [...prevPhotos, ...response.data.data]);
      setNextPage(response.data.paging?.next || null);
    } catch (error) {
      setError("Error al cargar más fotos.");
    } finally {
      setLoading(false);
    }
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="overflow-hidden bg-white rounded-lg shadow-md"
        >
          <Skeleton height={256} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen py-8 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="relative mb-8 text-3xl font-bold text-center text-gray-800">
          Galería de Fotos
          <span className="block w-24 h-1 mx-auto mt-2 bg-blue-500"></span>
        </h2>

        {loading && !photos.length ? (
          <LoadingSkeleton />
        ) : error ? (
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
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="relative overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-md cursor-pointer group hover:scale-105"
                onClick={() => setSelectedPhoto(photo.images[0].source)}
              >
                <img
                  src={photo.images[0].source}
                  alt="Facebook Album Photo"
                  className="object-cover w-full h-64"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-50">
                  <p className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100">
                    Ver más
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {nextPage && !loading && (
          <div className="my-6 text-center">
            <button
              onClick={fetchNextPage}
              className="flex items-center justify-center px-6 py-2 mx-auto space-x-2 text-white transition-colors bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? (
                <PulseLoader color="#ffffff" size={8} />
              ) : (
                "Cargar más fotos"
              )}
            </button>
          </div>
        )}

        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
            <div className="relative max-w-4xl mx-4">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute p-2 text-white transition-colors bg-red-500 rounded-full shadow-lg -top-4 -right-4 hover:bg-red-600"
              >
                ✕
              </button>
              <img
                src={selectedPhoto}
                alt="Selected"
                className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
