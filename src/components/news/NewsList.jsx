import React from "react";

import { FacebookPosts } from "./FacebookPosts";

export const NewsList = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2196F3] mb-12">
          Últimas Noticias
        </h2>

        <FacebookPosts numberOfPosts={3} />
      </div>
    </section>
  );
};
