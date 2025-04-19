import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#654321] text-white py-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">Contacto</h3>
            <p className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#D2B48C]" />
              <span>Dirección: Calle Loja y Fray Cristóbal Zambrano</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-[#D2B48C]" />
              <span>Teléfono: (072) 200 560 (072) 200 185</span>
            </p>
            <p className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-[#D2B48C]" />
              <span>Email: uefraycristobalzambrano@gmail.com</span>
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#D2B48C]">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D2B48C]">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#D2B48C]">
                  Noticias
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D2B48C]">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/FRAYCRISTOBALZAMBRANO"
                target="_blank"
                className="flex items-center space-x-2 hover:text-[#D2B48C]"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#FFA000] text-center">
          <p>
            &copy; {new Date().getFullYear()} Unidad Educativa Franciscana Fray
            Cristóbal Zambrano. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
