import React from "react";
import { useNavigate } from "react-router-dom";

const Empty = ({ title, url }) => {
  const navigate = useNavigate();
  return (
    <div className="text-center flex flex-col items-center gap-6 p-6">
      <img className="w-40 mx-auto" src={url} alt="Illustration" />
      <p className="text-lg font-semibold text-gray-800">{title}</p>
      <button
        onClick={() => navigate("/")}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
      >
        Go Home
      </button>
    </div>
  );
};

export default Empty;
