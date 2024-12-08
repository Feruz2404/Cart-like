import React from "react";
import { useStateValue } from "../../context";
import Products from "../../components/products/Products";
import { useNavigate } from "react-router-dom";
import emptyFoto from "../../assets/empty.png";

const Wishes = () => {
  const { wishlist } = useStateValue();
  const navigate = useNavigate();

  return (
    <div>
      {wishlist.length ? (
        <Products data={wishlist} />
      ) : (
        <div className="text-center">
          <img className="w-72 mx-auto mt-20" src={emptyFoto} alt="hearts" />
          <p className="text-gray-500 text-lg mb-8">Likes list is empty</p>
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Wishes;
