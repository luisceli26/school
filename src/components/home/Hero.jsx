import React from "react";

import { ImageCarousel } from "./ImageCarousel";

export const Hero = () => {
  return (
    <section className="relative bg-[#2196F3] text-white overflow-hidden">
      <div className="container px-4 py-20 mx-auto">
        <div className="grid items-center gap-4 md:grid-cols-3">
          <div className="z-10 flex flex-col items-center md:flex-row md:items-start md:col-span-2">
            <img
              src="/images/logo.webp"
              alt="Logo"
              className="w-40 h-40 rounded-full md:w-56 md:h-56 md:mr-6 md:mt-10 "
            />
            <div className="text-center md:text-left">
              <p className="text-3xl">Bienvenidos a nuestra</p>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Unidad Educativa Franciscana <br /> "FRAY CRISTÓBAL ZAMBRANO"{" "}
                <br /> Saraguro - Ecuador
              </h1>
              <p className="mb-8 text-xl">
                Formando líderes con valores humanos, cristianos y franciscanos
                para un mundo mejor
              </p>
              <div className="inline-block bg-white text-[#2196F3] px-6 py-3 rounded-lg font-bold">
                Paz y Bien
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <ImageCarousel />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 skew-y-6 transform origin-top-left bg-[#FFA000] z-0"></div>

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/patrones.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "500px 500px",
          opacity: 0.1,
          transform: "rotate(-1deg)",
          transformOrigin: "center",
        }}
      ></div>
    </section>
  );
};
