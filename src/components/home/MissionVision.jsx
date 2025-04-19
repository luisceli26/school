import React from "react";

export const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#654321] mb-12">
          Misión y Visión
          <span className="block w-24 h-1 bg-[#654321] mx-auto mt-2"></span>
        </h2>
        <div className="grid gap-8">
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md border-t-4 border-t-[#654321] hover:shadow-lg transition-shadow duration-300">
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-3xl font-bold text-[#654321] mb-4">Misión</h3>
              <p className="text-2xl text-gray-600">
                La Unidad Educativa Fiscomisional Franciscana "Fray Cristóbal
                Zambrano" será reconocida en el ámbito local, regional y
                nacional como una Institución competente y modelo al servicio de
                la sociedad, que brinde una educación de calidad basada en
                principios y valores humanos, cristianos y franciscanos;
                formando personas con liderazgo, capaces de convivir en armonía
                con la naturaleza y en enfrentar los retos del avance de la
                ciencia y tecnología en la formación integral de estudiantes
                competentes y comprometidos con la transformación de la
                sociedad.
              </p>
            </div>
            <div className="p-4 md:w-1/2 md:pl-8">
              <div className="overflow-hidden transition-shadow duration-300 shadow-lg rounded-2xl hover:shadow-xl">
                <img
                  src="/images/vision.webp"
                  alt="Imagen representativa de nuestra visión institucional"
                  className="object-cover w-full transition-transform duration-500 transform h-96 rounded-2xl hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center bg-white p-6 rounded-lg shadow-md border-t-4 border-t-[#D2B48C] hover:shadow-lg transition-shadow duration-300">
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-3xl font-bold text-[#D2B48C] mb-4">Visión</h3>
              <p className="text-2xl text-gray-600">
                Ofrecer una educación integral de calidad e innovadora,
                promoviendo la superación personal con conciencia ambiental, la
                práctica de valores democráticos y el mejoramiento en la
                convivencia social, desde la Palabra de Dios a la luz de la
                Espiritualidad Franciscana, con programas de perfeccionamiento
                en las competencias de directivos y docentes de tal forma que en
                cinco años se haya logrado una institución educativa con cultura
                de mejoramiento continuo con metas claras al formar seres
                humanos emprendedores, íntegros, críticos, estables capaces de
                convivir armónicamente con los demás y la naturaleza.
              </p>
            </div>
            <div className="p-4 md:w-1/2 md:pr-8">
              <div className="overflow-hidden transition-shadow duration-300 shadow-lg rounded-2xl hover:shadow-xl">
                <img
                  src="/images/mision.webp"
                  alt="Imagen representativa de nuestra misión institucional"
                  className="object-cover w-full transition-transform duration-500 transform h-96 rounded-2xl hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
