import React from "react";

export const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-gray-600 mb-6">
          Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto
          contigo pronto.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-[#2196F3] text-white py-2 px-4 rounded-md hover:bg-[#1976D2] transition-colors duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
