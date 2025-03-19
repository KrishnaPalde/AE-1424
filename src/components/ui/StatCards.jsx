import React from "react";

const StatsCard = ({ title, count }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-3xl font-bold text-[#e67e23] mt-2">{count}</p>
    </div>
  );
};

export default StatsCard;
