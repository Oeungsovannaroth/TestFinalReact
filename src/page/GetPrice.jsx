import React from "react";

const GetPrice = () => {
  return (
  
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto p-10">
          {/* <!-- başlık yapısı --> */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800">Choose Your Plan</h2>
            <p className="text-gray-500 mt-2">
              Select the plan that best fits your needs
            </p>
          </div>

          {/* <!-- grid yapısı --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- card1 --> */}
            <div className="w-full p-6 border border-gray-200 rounded-lg border-t-blue-500 border-t-4 shadow hover:shadow-xl transition">
              <h4 className="mb-4 text-3xl">Standart Plan</h4>
              <div>
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-semibold">29</span>
                <span className="text-xl text-gray-500">Month</span>
              </div>
              <ul className="space-y-5 my-5">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Access to Free & Paid snippets
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Unlimited Snippets download
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Online Editor
                  </span>
                </li>
                <li className="flex items-center line-through decoration-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Unlimted Fork Snippets
                  </span>
                </li>
                <li className="flex items-center line-through decoration-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Ads Free
                  </span>
                </li>
                <li className="flex items-center line-through decoration-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    All Tools
                  </span>
                </li>
              </ul>
              <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none rounded-lg px-4 py-2 font-medium w-full">
                Buy Now
              </button>
            </div>

            {/* <!-- card2 --> */}
            <div className="w-full p-6 border border-gray-200 rounded-lg border-t-green-500 border-t-4 shadow-lg scale-105 bg-white">
              <h4 className="mb-4 text-3xl">Pro Plan</h4>
              <div>
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-semibold">49</span>
                <span className="text-xl text-gray-500">Month</span>
              </div>
              <ul className="space-y-5 my-5">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Access to Free & Paid snippets
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Unlimited Snippets download
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Online Editor
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    fill="currentColor"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Unlimted Fork Snippets
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    fill="currentColor"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Ads Free
                  </span>
                </li>
                <li className="flex items-center line-through decoration-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    All Tools
                  </span>
                </li>
              </ul>
              <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none rounded-lg px-4 py-2 font-medium w-full">
                Buy Now
              </button>
            </div>

            {/* <!-- card3 --> */}
            <div className="w-full p-6 border border-gray-200 rounded-lg border-t-red-500 border-t-4 shadow hover:shadow-xl transition">
              <h4 className="mb-4 text-3xl">Business Plan</h4>
              <div>
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-semibold">69</span>
                <span className="text-xl text-gray-500">Month</span>
              </div>
              <ul className="space-y-5 my-5">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Access to Free & Paid snippets
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Unlimited Snippets download
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Online Editor
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    fill="currentColor"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Unlimted Fork Snippets
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    fill="currentColor"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Ads Free
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-blue-700 me-2"
                    fill="currentColor"
                    viewBox="0 -960 960 960"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    All Tools
                  </span>
                </li>
              </ul>
              <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none rounded-lg px-4 py-2 font-medium w-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default GetPrice;
