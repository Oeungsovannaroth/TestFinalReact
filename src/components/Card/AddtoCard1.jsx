import AddtoCard from "@/components/AddtoCard";
import { Link, Links } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="justify-center text-center mt-10 bg-white py-2.5">
        <h1 className="text-3xl font-semibold ">— Puppy Couture —</h1>
        <h1 className="text-7xl font-bold text-pink-600">🐾Shop Puppy</h1>
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

              <div>
                <button
                  onClick={() => <AddtoCard />}
                  className=" w-full p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600"
                >
                  <div>Add To Cart</div>
                </button>
              </div>
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
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-blue-600 mb-8 text-center">
            Puppy Clothes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="https://m.media-amazon.com/images/I/71oouYm6x7L._AC_UL480_FMwebp_QL65_.jpg"
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
                Jecikelon Winter
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Jecikelon Winter Dog Hoodie Sweatshirts with Pockets Warm Dog
                Clothes for Small Dogs Chihuahua Coat Clothing Puppy Cat Custume
                (Pink, XX-Small)
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
                  src="https://m.media-amazon.com/images/I/81DcZbh8U3L._AC_UL480_FMwebp_QL65_.jpg"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                    View Product
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4"></h3>
              <p className="text-gray-500 text-sm mt-2">
                KYEESE Dog Hoodie Stretchy Dog Clothes for Small Dogs Dogs
                Winter Coat for Cold Weather Cat Coat with Leash Hole Soft Pet
                Sweatshirt with Drawstring Comfort Cat Sweater Warm Pet Clothes
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
                  src="https://m.media-amazon.com/images/I/719OhLhfroL._AC_UL480_FMwebp_QL65_.jpg"
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
                Sweater Dress Plaid Knitwear
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Dog Sweater Dress Plaid Knitwear for Small Medium Dogs Warm
                Puppy Pet Turtleneck Stretch Pullover Cute Fall Winter Vest
                Clothes with Leash Hole for Christmas (Pink, XS)
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
                  src="https://m.media-amazon.com/images/I/61uEjQEWnHL._AC_SY300_SX300_QL70_FMwebp_.jpg"
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
                Cute Fruit Dog Coat Hoodies
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Warm Dog Winter Clothes Cute Fruit Dog Coat Hoodies Fleece Pet
                Dogs Costume Jacket for French Bulldog Chihuahua Ropa para
                Perro(Green,XS)
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
                  src="https://m.media-amazon.com/images/I/71B9ztDSfIL._AC_SX679_.jpg"
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
                Fleece Hoodie
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Fleece Hoodie, Windproof Waterproof Coat, Winter Warm Jacket,
                Cold Weather Pet Apparel Clothes Vest for Small Medium Large
                Dogs (XS, Blue).
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
                  src="https://m.media-amazon.com/images/I/61RD1YaMrWL._AC_UL480_FMwebp_QL65_.jpg"
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
                Polo Shirts
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Cute Dog Clothes Striped Dog Polo Shirts Cute Sweater Puppy
                Clothes Gentle Sweater Pet Clothes for Small Medium Large Dogs
                Cats (Red Stripe, 3XL Size for 40-55lb Pets).
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">$16.99</span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full "
                  src="https://m.media-amazon.com/images/I/717txRFTMtL._AC_UL480_FMwebp_QL65_.jpg"
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
                Puppy.Breathable
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Cute Dog Clothes,Dog T Shirt for Medium Dogs.Dog Clothes for
                Small Dogs Girl Boy,Puppy.Breathable Soft Dog Costume Pet Dogs
                Cats,Pet Pullover Jumper,Cat Clothes
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">$16.99</span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full "
                  src="https://m.media-amazon.com/images/I/81l90CQBW2L._AC_UL480_FMwebp_QL65_.jpg"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                    View Product
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">YUDODO</h3>
              <p className="text-gray-500 text-sm mt-2">
                YUDODO Small Dog Sweater Dress with Bow, Pink Plaid Pet Sweater
                for Small Dogs Girls, Fall Dog Turtleneck Knitwear Clothes with
                Leash Hole for Cold Weather, Gray-Pink, S
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">$16.99</span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full "
                  src="https://m.media-amazon.com/images/I/81TS3ksrJ8L._AC_SY300_SX300_QL70_FMwebp_.jpg"
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
                Sweatshirt Outfit
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                3 Pack Dog Sweaters for Small Dogs Girl Boy Winter Fleece
                Clothes Warm Soft Dog Sweatshirt Outfit for Dogs Cats Pet
                Apparel (Navy Blue+Grey+Light Blue, Small)
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
