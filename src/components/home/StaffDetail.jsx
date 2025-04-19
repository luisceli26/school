import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { staffMembers } from "../../data/StaffData";

const StaffDetail = () => {
  const { id } = useParams();
  const staffMember = staffMembers.find((member) => member.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!staffMember) return <div>Docente no encontrado.</div>;

  return (
    <section className="container px-4 py-10 mx-auto">
      <div className="flex flex-col gap-8 p-6 bg-white rounded-lg shadow-xl lg:flex-row">
        <div className="w-full mx-auto sm:w-2/3 md:w-1/2 lg:w-1/3 lg:mx-0">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg ">
            <img
              src={staffMember.profileImage}
              alt={staffMember.name}
              className="absolute inset-0 object-contain w-full h-full "
            />
          </div>
        </div>

        <div className="space-y-6 lg:w-2/3">
          <div>
            <h2 className="text-4xl font-bold text-[#654321]">
              {staffMember.name}
            </h2>
            <p className="text-xl text-[#D2B48C] font-medium mt-2">
              {staffMember.role}
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-50">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p className="text-gray-600">
                <span className="font-semibold">Facultad:</span>{" "}
                {staffMember.faculty}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Departamento:</span>{" "}
                {staffMember.department}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Correo:</span>{" "}
                {staffMember.email}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Ubicación:</span>{" "}
                {staffMember.location}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-gray-50">
            <h3 className="text-xl font-semibold text-[#654321] mb-3">
              Resumen
            </h3>
            <p className="leading-relaxed text-gray-700">{staffMember.bio}</p>
          </div>

          <div className="p-6 rounded-lg bg-gray-50">
            <h3 className="text-xl font-semibold text-[#654321] mb-3">
              Formación Académica
            </h3>
            <ul className="space-y-2">
              {staffMember.education.map((edu, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-[#D2B48C] mr-2">•</span>
                  {edu}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-gray-50">
            <h3 className="text-xl font-semibold text-[#654321] mb-3">
              Experiencia Docente
            </h3>
            <ul className="space-y-2">
              {staffMember.experience.map((exp, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-[#D2B48C] mr-2">•</span>
                  {exp}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-gray-50">
            <h3 className="text-xl font-semibold text-[#654321] mb-3">
              Capacitaciones
            </h3>
            <ul className="space-y-2">
              {staffMember.training.map((train, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-[#D2B48C] mr-2">•</span>
                  {train}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffDetail;
