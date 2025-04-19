import React from "react";
import { FacebookPosts } from "../components/news/FacebookPosts";

export const News = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#2196F3] mb-6">
        Noticias y Eventos
      </h1>
      <FacebookPosts />
    </div>
  );
};
