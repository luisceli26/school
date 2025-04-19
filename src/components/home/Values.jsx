import React from "react";

import { motion } from "framer-motion";
import { Heart, Book, Users, Star } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Valores Franciscanos",
    description:
      "Formamos estudiantes con valores como : la paz, la alegría, la fraternidad y el respeto por la creación",
  },
  {
    icon: Book,
    title: "Excelencia Académica",
    description:
      "Educación integral que combina lo mejor de la tradición con la innovación , de acuerdo a nuestro lema: Letras, sabiduría y fraternidad.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Construimos una comunidad educativa unida, solidaria y comprometida a la sociedad Saragurense.",
  },
  {
    icon: Star,
    title: "Liderazgo",
    description:
      "Desarrollamos líderes constructores que impactan positivamente en la sociedad.",
  },
];

export const Values = () => {
  return (
    <section className="pb-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#1e3a8a] mb-12"
        >
          Nuestros Valores
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              className="p-6 rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out"
            >
              <value.icon className="w-12 h-12 text-[#f59e0b] mb-4" />
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
