import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { SuccessModal } from "../components/modals/SuccessModal";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "luisceli25@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsModalOpen(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Error al enviar el mensaje. Por favor, intenta nuevamente.");
      });
  };

  return (
    <div className="container px-6 py-12 mx-auto">
      <h1 className="text-4xl font-bold text-[#2196F3] mb-8 text-center">
        Contáctanos
      </h1>
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Información de contacto */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Estamos aquí para responder a tus preguntas y escuchar tus
            comentarios. No dudes en ponerte en contacto con nosotros.
          </p>
          <div className="flex items-center gap-4">
            <MapPin className="text-[#2196F3]" />
            <p>Calle Loja y Fray Cristóbal Zambrano</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-[#2196F3]" />
            <div>
              <p>(072) 200 560</p>
              <p>(072) 200 185</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-[#2196F3]" />
            <p>uefraycristobalzambrano@gmail.com</p>
          </div>
        </div>
        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-6 bg-white rounded-lg shadow-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 block w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3] focus:ring-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3] focus:ring-2"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 block w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3] focus:ring-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#2196F3] text-white py-3 rounded-md hover:bg-[#1976D2] transition-all duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
