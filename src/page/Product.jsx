import AddtoCard from "@/components/AddtoCard";
import React from "react";
import { Link, Links } from "react-router-dom";

const Product = () => {
  // const [showCart, setShowCart] = useState(false);

  // const handAddtoCard = () => {
  //   setShowCart(true);
  // };
  return (
    <div>
      {" "}
      {/* <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center space-y-10">
        <Product AddtoCard={handAddtoCard} />
        {showCart && <AddtoCard />}
      </div> */}
      <div className="justify-center text-center mt-10 bg-white py-2.5">
        <h1 className="text-3xl font-semibold ">— Puppy Couture —</h1>
        <h1 className="text-7xl font-bold text-pink-600">Shop Puppy</h1>
      </div>
      <div className="bg-[#e8e8e5] mt-10 grid grid-cols-1 ">
        <section className="grid grid-cols-1 container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0  ">
          <section className=" p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
            <section className=" grid grid-cols-1  scroll-m-1 p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-2xl ">
              <img
                src="https://petsy.online/cdn/shop/products/2_e17adbe2-3e2e-498b-b178-6b45256cd078.png?v=1717585062"
                className="rounded-2xl"
                alt=""
              />
              <div className="space-x-1 flex justify-center mt-10">
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
              </div>
              <h1 className="text-3xl my-5">
                Royal Canin Mini Puppy Dry Dog Food
              </h1>
              <p className="mb-5">
                Puppy/Junior (Adult weight between 1 kg to 10 kg) up to10 months
              </p>
              <h2 className="font-semibold mb-5">$29.99</h2>
              <button
                onClick={AddtoCard}
                className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600"
              >
                Add To Cart
              </button>
            </section>

            <section className=" grid grid-cols-1 p-5 py-10 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-2xl">
              <img
                src="https://omni.pet/cdn/shop/files/Puppy-Dry-Food_Bowl-Dog.png?v=1755794114"
                className="rounded-2xl"
                alt=""
              />
              <div className="space-x-1 flex justify-center mt-10">
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
              </div>
              <h1 className="text-3xl my-5">Puppy Dry Food</h1>
              <p className="mb-5">
                Happy tummies, shiny coats, and mealtime joy - Omni Puppy Dry
                Food gives your pup the best start in life.
              </p>
              <h2 className="font-semibold mb-5">$39.99</h2>
              <button className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">
                Add To Cart
              </button>
            </section>

            <section className=" grid grid-cols-1 p-5 py-10 bg-red-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-2xl">
              <img
                src="https://www.all4pets.com.au/cdn/shop/files/Hypro-Premium-Wholesome-Grains-Chicken-_-Brown-Rice-Puppy-Dry-Dog-Food-2a.jpg?v=1686491832"
                className="rounded-2xl"
                alt=""
              />
              <div className="space-x-1 flex justify-center mt-10">
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
              </div>
              <h1 className="text-3xl my-5">Hypro Premium Wholesome Grains </h1>
              <p className="mb-5">Puppy Dry Dog Food 2.5kg</p>
              <h2 className="font-semibold mb-5">$19.99</h2>
              <button className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">
                Add To Cart
              </button>
            </section>

            <section className="grid grid-cols-1 p-5 py-10 bg-blue-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-2xl">
              <img
                src="https://krisers.com/cdn/shop/files/48907_PT1._AC_SL1200_V1690571443_1200x.jpg?v=1697206480"
                className="rounded-2xl"
                alt=""
              />
              <div className="space-x-1 flex justify-center mt-10">
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
              </div>
              <h1 className="text-3xl my-5">
                Hill's Science Diet Puppy Small & Mini Chicken Recipe Dry Dog
                Food
              </h1>
              <p className="mb-5">
                Subscribe & Save 5% on your first autoship order and on all
                remaining orders
              </p>
              <h2 className="font-semibold mb-5">$34.99</h2>
              <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Add To Cart
              </button>
            </section>
            <section className=" grid grid-cols-1 p-5 py-10 bg-pink-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-2xl">
              <img
                src="https://www.sheba.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf1826/files/migrate-product-files/images/e0m7hvhpfsfckfhkzkfo.png"
                className="rounded-4xl"
                alt=""
              />
              <div className="space-x-1 flex justify-center mt-10">
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
              </div>
              <h1 className="text-3xl my-5">Portions Kitten Wet Cat Food</h1>
              <p className="mb-5">
                kitten wet food offers 100% complete and balanced nutrition for
                kittens and contains a balance of protein and fats for a strong
                body and active playtime.
              </p>
              <h2 className="font-semibold mb-5">$15.99</h2>
              <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-blue-600">
                Add To Cart
              </button>
            </section>
            <section className=" grid grid-cols-1 p-5 py-10 bg-blue-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-2xl">
              <img
                src="https://kookykibble.co.nz/cdn/shop/files/Kooky_Kibble_Grain-free_Dry_Cat_Food_Cat_Food_and_Treats_Bundle.png?v=1754624096idth=1946"
                className="rounded-2xl"
                alt=""
              />
              <div className="space-x-1 flex justify-center mt-10">
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  className="w-4 h-4 mx-px fill-current text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
              </div>
              <h1 className="text-3xl my-5">
                New Zealand Grain-Free Cat Food for All Life Stages
              </h1>
              <p className="mb-5">
                Snag the treat bundle and let your cat taste their way through
                10 different treats—flavours may vary, but snack happiness is
                guaranteed—excellent value
              </p>
              <h2 className="font-semibold mb-5">$26.99</h2>
              <button className="p-2 px-6 bg-pink-500 text-white rounded-md hover:bg-blue-600">
                Add To Cart
              </button>
            </section>
          </section>
        </section>
      </div>
      <div className="bg-gray-300 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-pink-500 mb-8 text-center">
            Puppy Food
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="https://www.purina.com/.netlify/images?w=1000&h=1000&fm=avif&q=75&url=https%3A%2F%2Flive.purina.com%2Fsites%2Fdefault%2Ffiles%2Fproducts%2F2025-05%2Fpurina-pro-plan-adult-puppy-sensitive-skin-stomach-salmon-wet-dog-food.png&cd=5f8268795df4772b0797d691dc0e85ebf"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                    View Product
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                Purina Pro
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Purina Pro Plan Puppy Sensitive Skin & Stomach Salmon & Rice
                Entrée Classic Wet Dog Food.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">$32.76</span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="https://www.purina.com/.netlify/images?w=1000&h=1000&fm=avif&q=75&url=https%3A%2F%2Flive.purina.com%2Fsites%2Fdefault%2Ffiles%2Fproducts%2F2024-12%2Fpro_plan_puppy_toy_breed_chicken_rice_dry_dog_food_34lb.png&cd=5e775ab47d70daae0c3b823f719f17e9"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                    View Product
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                Puppy Toy
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Pro Plan Puppy Toy Breed Chicken & Rice Formula Dry Dog Food
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">$39.99</span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full "
                  src="https://www.purina.com/.netlify/images?w=1000&h=1000&fm=avif&q=75&url=https%3A%2F%2Flive.purina.com%2Fsites%2Fdefault%2Ffiles%2Fproducts%2F2024-05%2Fpro-plan_puppy_30_18_largebreed_vanity_1000x1000.jpg&cd=84c9c89d777526f40d4c770c0b4e0c5d"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                    View Product
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                Pro Plan Sport
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Pro Plan Sport Development 30/18 Large Breed Chicken & Rice
                Formula Dry Puppy Food
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">$29.99</span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full "
                  src="https://www.purina.com/sites/default/files/styles/product_large/public/products/2025-08/ghoulish-ghost-original-with-bacon-package.jpg.webp?itok=lD3YlEwv"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                    View Product
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                Puppy Toy Breed
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Pro Plan Puppy Toy Breed Chicken & Rice Formula Dry Dog Food
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">$21.99</span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full "
                  src="https://www.purina.com/.netlify/images?w=1000&h=1000&fm=avif&q=75&url=https%3A%2F%2Flive.purina.com%2Fsites%2Fdefault%2Ffiles%2Fproducts%2F2025-08%2Fbeggin-pumpkin-bites-package.jpg&cd=bd8a16f924f385f2de9b1fcdc24b55d3"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                    View Product
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                Pupkin Bites
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Purina Beggin’ Pupkin Bites With Bacon and Pumpkin Halloween Dog
                Treats
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">$13</span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full "
                  src="https://www.purina.com/.netlify/images?w=1000&h=1000&fm=avif&q=75&url=https%3A%2F%2Flive.purina.com%2Fsites%2Fdefault%2Ffiles%2Fproducts%2F2025-03%2Fbeggin-strips-stix-combo-peanut-butter-combos-1000x1000.png&cd=892e4aed9e989234ee45ab358754293a"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                    View Product
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                Beggin’ Dog
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Beggin’ Dog Treats Bacon & Peanut Butter Flavor Stix & Strips
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">$16.99</span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
