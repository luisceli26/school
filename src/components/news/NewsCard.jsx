import React from "react";
import PropTypes from "prop-types";

export const NewsCard = ({ title, date, summary }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#2196F3] mb-2 h-32">
          {title}
        </h3>
        <p className="mb-4 text-sm text-gray-500">{formatDate(date)}</p>
        <p className="text-gray-600">{summary}</p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};
