import React from "react";

const AddtoCard = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg w-80 relative">
      <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
        39% OFF
      </div>
      <img
        src="https://cdn.discordapp.com/attachments/1151475185881131018/1156198472298895370/aeb89b8b-cdf2-4239-be2d-cd2de9a09105.png"
        alt="Nike Shoe"
        className="rounded-lg mx-auto w-48"
      />
      <h3 className="text-lg font-semibold mt-4">
        Nike Air MX Super 2500 - Red
      </h3>
      <div className="flex items-center justify-center mt-2">
        <span className="text-2xl font-bold text-blue-900">$449</span>
        <span className="line-through text-gray-500 ml-2">$699</span>
      </div>
      <div className="flex items-center justify-center mt-2">
        <span className="text-yellow-400">★★★★★</span>
        <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 rounded text-sm font-medium">
          5.0
        </span>
      </div>
      <button className="mt-4 w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md flex items-center justify-center gap-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
          ></path>
        </svg>
        Add to cart
      </button>
    </div>
  );
};

export default AddtoCard;
