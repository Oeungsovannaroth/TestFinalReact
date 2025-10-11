import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden mt-3">
        <div className="absolute inset-0">
          <img
            src="https://cdn.pixabay.com/photo/2020/10/06/11/50/dog-5632005_1280.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full text-left ml-15">
          <h1 className="text-5xl font-bold leading-tight mb-4 ">
            Welcome to Puppy Land 🐶✨
          </h1>
          <h1 className="text-3xl font-bold leading-tight mb-4 ml-20 ">
            Where every tail wags with joy
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            is a warm and friendly greeting that creates an inviting atmosphere
            for visitors. It suggests a fun, safe, and joyful place dedicated to
            puppies — whether for adoption, care, training, or simply
            celebrating the love for dogs.
          </p>
          <a
            href="/product"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-full w-full object-cover"
            src="https://m.media-amazon.com/images/I/81ntaOEdWKL._UF894,1000_QL80_.jpg"
            alt="Winding mountain road"
          />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg m:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto  md:text-xl lg:mx-0 md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 ">
          <div className="flex flex-col p-12 md:px-16 m:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl m:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Bully Max Dry Dog Food
            </h2>
            <p className=" flex mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ">
              Bully Max is a brand of high-performance dog food, especially
              known for its dry kibble (“30/20” formula) which has 30% protein
              and 20% fat. It’s marketed as suitable for all breeds and all life
              stages (puppies, adults, pregnant/lactating) under its “All Life
              Stages” formula.
            </p>

            <div className="mt-8">
              <Link
                to="/payment"
                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
