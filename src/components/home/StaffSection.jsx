import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { staffMembers } from "../../data/StaffData";

export const StaffSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerPage = {
    desktop: 4,
    tablet: 2,
    mobile: 1,
  };

  const [itemsToShow, setItemsToShow] = useState(itemsPerPage.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(itemsPerPage.desktop);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(itemsPerPage.tablet);
      } else {
        setItemsToShow(itemsPerPage.mobile);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) =>
      current + itemsToShow >= staffMembers.length ? 0 : current + itemsToShow
    );
  }, [itemsToShow]);

  const prevSlide = () => {
    setCurrentIndex((current) =>
      current - itemsToShow < 0
        ? staffMembers.length - itemsToShow
        : current - itemsToShow
    );
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const visibleStaff = staffMembers.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  return (
    <section className="relative py-6 sm:py-10">
      <div className="container px-2 mx-auto sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#654321] mb-8 sm:mb-12">
          Nuestras Autoridades y Personal Docente
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {visibleStaff.map((member, index) => (
              <div
                key={currentIndex + index}
                className="flex flex-col w-full h-full max-w-sm mx-auto overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:-translate-y-1"
              >
                <div className="flex-shrink-0 overflow-hidden h-36 sm:h-48">
                  <img
                    src={member.headerImage}
                    alt={`Instalaciones - ${member.role}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative flex flex-col flex-grow px-3 pt-20 pb-4 sm:px-4 sm:pt-24">
                  <div className="absolute -translate-x-1/2 left-1/2 -top-12">
                    <div className="flex-shrink-0 w-32 h-32 overflow-hidden border-4 border-white rounded-full shadow-lg sm:w-44 sm:h-44">
                      <img
                        src={member.profileImage}
                        alt={member.name}
                        className={`object-cover object-top ${
                          member.profileImage === "/images/Inspectora.webp"
                            ? "w-48 h-48 -mt-4 relative"
                            : "w-full h-full mt-2"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-between flex-grow">
                    <div className="w-full">
                      <h3 className="text-base sm:text-lg font-bold text-[#654321] mt-6 sm:mt-10 line-clamp-2 text-center h-12 sm:h-14">
                        {member.name}
                      </h3>
                      <p className="text-sm sm:text-base text-[#D2B48C] font-medium mb-3 sm:mb-4 line-clamp-2 text-center h-10 sm:h-12">
                        {member.role}
                      </p>
                    </div>
                    <Link
                      to={`/staff/${member.id}`}
                      className="text-sm sm:text-base text-[#654321] hover:text-[#D2B48C] transition-colors mt-auto"
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 bg-white p-1.5 sm:p-2 rounded-full shadow-lg text-[#654321] hover:text-[#D2B48C] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 bg-white p-1.5 sm:p-2 rounded-full shadow-lg text-[#654321] hover:text-[#D2B48C] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="mt-6 text-center sm:mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm sm:text-base text-[#654321] hover:text-[#D2B48C] transition-colors"
          >
            {isAutoPlaying ? "Pausar" : "Reproducir"} presentación
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({
            length: Math.ceil(staffMembers.length / itemsToShow),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsToShow)}
              className={`h-2 rounded-full transition-all ${
                index === Math.floor(currentIndex / itemsToShow)
                  ? "w-4 bg-[#654321]"
                  : "w-2 bg-[#D2B48C]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
