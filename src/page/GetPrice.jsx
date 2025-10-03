import React from "react";

const GetPrice = () => {
  return (
    <div>
      <div className="bg-gray-50 h-auto mb-20">
        <div className="max-w-7xl mx-auto p-10">
          {/* <!-- başlık yapısı --> */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800">
              Choose Your Plan
            </h2>
            <p className="text-gray-500 mt-4 text-2xl">Pet Care By the Visit</p>
          </div>

          {/* <!-- grid yapısı --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- card1 --> */}
            <div className="w-full p-6 border border-gray-200 rounded-lg border-t-blue-500 border-t-4 shadow hover:shadow-xl transition">
              <h4 className="mb-4 text-5xl">Quick Visit</h4>
              <div>
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-semibold">29</span>
                <span className="text-xl text-gray-500">Month</span>
              </div>
              <ul className="space-y-5 my-5">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 me-2"
                    // viewBox="0 -960 960 960"
                    // fill="currentColor"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-3xl font-normal leading-tight text-gray-500 ">
                    Perfect for a fenced in backyard break or a final potty
                    break of the day.
                  </span>
                </li>
              </ul>
              <button className="text-white bg-violet-700 hover:bg-blue-700 focus:ring-4 focus:outline-none rounded-lg px-4 py-2 font-medium w-full">
                Get Now
              </button>
            </div>

            {/* <!-- card2 --> */}
            <div className="w-full p-6 border border-gray-200 rounded-lg border-t-green-500 border-t-4 shadow-lg scale-105 bg-white">
              <h4 className="mb-4 text-3xl">Essential Visit</h4>
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
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-3xl font-normal leading-tight text-gray-500">
                    Our most popular visit, ideal for most pet and home care
                    duties as well as daily dog walks.
                  </span>
                </li>
              </ul>
              <button className="text-white bg-violet-700 hover:bg-blue-700 focus:ring-4 focus:outline-none rounded-lg px-4 py-2 font-medium w-full">
                Get Now
              </button>
            </div>

            {/* <!-- card3 --> */}
            <div className="w-full p-6 border border-gray-200 rounded-lg border-t-red-500 border-t-4 shadow hover:shadow-xl transition">
              <h4 className="mb-4 text-3xl">Extended Visit</h4>
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
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <span className="text-2xl font-normal leading-tight text-gray-500">
                    Excellent for energetic dogs and animals that need a little
                    extra attention and households with more than 2 pets.
                  </span>
                </li>
              </ul>
              <button className="text-white bg-violet-700 hover:bg-blue-700 focus:ring-4 focus:outline-none rounded-lg px-4 py-2 font-medium w-full">
                Get Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-5 px-8 py-12 bg-fuchsia-800">
        <div className="text-white text-center mb-10 ">
          <h1 className="text-6xl font-bold mb-10">
            Vacation Dog & Cat Sitting
          </h1>
          <p className="text-2xl">
            Vacation visits services can be mixed and matched to tailor pet care
            solutions for ALL of your pets. Visits include meals and treats
            served, fresh water, exercise, cleanups, medication (if needed) and
            the TLC your pet deserves while you are away along with daily
            e-journals for our pet parents. Here are some of the or dog and cat
            clients favorite combinations.
          </p>
        </div>
        <div class="container flex space-x-2 text-white">
          <div class="no-scrollbar overflow-hidden">
            <div class="flex no-scrollbar justify-start space-x-6 items-center overflow-x-auto">
              <button class="font-semibold whitespace-nowrap text-base text-white hover:text-gray-600 transition-colors duration-300">
                Monthly
              </button>
              <button class="font-semibold whitespace-nowrap text-base hover:text-gray-600 transition-colors duration-300 text-white">
                Annually
              </button>
            </div>
          </div>
          <button class="text-purple-100 font-semibold text-base">
            (2 months free)
          </button>
        </div>
        <div class="demo-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative">
            <div class="h-full">
              <div class="h-full z-10 relative">
                <div class="flex flex-col flex-1 justify-between h-full space-y-5">
                  <div class="flex justify-between flex-col">
                    <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                      <span>Starter</span>
                    </div>
                    <div class="pt-5 text-gray-500 font-medium text-base space-y-1">
                      <div class="flex items-center align-bottom">
                        <span class="pt-1.5">$</span>
                        <div class="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900">
                          <span>10</span>
                        </div>
                        <span class="pt-1.5">per month</span>
                      </div>
                      <div class="text-base">Essential Pooch</div>
                    </div>
                    <div class="">
                      <ul class="space-y-2 pt-8">
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>Everything in Free</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>5,000 events / month</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>3 Essential Visits for breakfast</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span> a midday walk and dinner.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="pt-2">
                    <a
                      href="#"
                      type="button"
                      target="_blank"
                      class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"
                    >
                      <span class="w-full font-semibold text-base">
                        Essential Pooch+
                      </span>
                      <svg
                        class="inline-block h-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="hidden">
                  <ul class="space-y-2 pt-8">
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>5,000 events / month</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative">
            <div class="h-full">
              <div class="h-full z-10 relative">
                <div class="flex flex-col flex-1 justify-between h-full space-y-5">
                  <div class="flex justify-between flex-col">
                    <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                      <span>Startup</span>
                      <svg
                        class="h-6 w-6 animate-ping-slow text-gray-500"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.5 25C30.5 28.0376 28.0376 30.5 25 30.5C21.9624 30.5 19.5 28.0376 19.5 25C19.5 21.9624 21.9624 19.5 25 19.5C28.0376 19.5 30.5 21.9624 30.5 25Z"
                          stroke="currentColor"
                          stroke-opacity="0.7"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M38.75 25C38.75 32.5939 32.5939 38.75 25 38.75C17.4061 38.75 11.25 32.5939 11.25 25C11.25 17.4061 17.4061 11.25 25 11.25C32.5939 11.25 38.75 17.4061 38.75 25Z"
                          stroke="currentColor"
                          stroke-opacity="0.4"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M47.5 25C47.5 37.4264 37.4264 47.5 25 47.5C12.5736 47.5 2.5 37.4264 2.5 25C2.5 12.5736 12.5736 2.5 25 2.5C37.4264 2.5 47.5 12.5736 47.5 25Z"
                          stroke="currentColor"
                          stroke-opacity="0.1"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="pt-5 text-gray-500 font-medium text-base space-y-1">
                      <div class="flex items-center align-bottom">
                        <span class="pt-1.5">$</span>
                        <div class="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900">
                          <span>16</span>
                        </div>
                        <span class="pt-1.5">per month</span>
                      </div>
                      <div class="text-base">Essential Pooch+</div>
                    </div>
                    <div class="">
                      <ul class="space-y-2 pt-8">
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>Everything in Starter</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>20,000 events / month</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>20 Minute Late Night Potty Break</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>3 Essential Visits </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="pt-2">
                    <a
                      href="#"
                      type="button"
                      target="_blank"
                      class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"
                    >
                      <span class="w-full font-semibold text-base">
                        Choose Startup
                      </span>
                      <svg
                        class="inline-block h-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="hidden">
                  <ul class="space-y-2 pt-8">
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Starter</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>20,000 events / month</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative">
            <div class="h-full">
              <div class="h-full z-10 relative">
                <div class="flex flex-col flex-1 justify-between h-full space-y-5">
                  <div class="flex justify-between flex-col">
                    <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                      <span>Professional (Most Popular)</span>
                    </div>
                    <div class="pt-5 text-gray-500 font-medium text-base space-y-1">
                      <div class="flex items-center align-bottom">
                        <span class="pt-1.5">$</span>
                        <div class="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900">
                          <span>49</span>
                        </div>
                        <span class="pt-1.5">per month</span>
                      </div>
                      <div class="text-base">Almost Overnight Pooch</div>
                    </div>
                    <div class="">
                      <ul class="space-y-2 pt-8">
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>Everything in Startup</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>80,000 events / mo</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>30 minute midday walk </span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>An hour breakfast visit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="pt-2">
                    <a
                      href="#"
                      type="button"
                      target="_blank"
                      class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"
                    >
                      <span class="w-full font-semibold text-base">
                        Choose Pro
                      </span>
                      <svg
                        class="inline-block h-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="hidden">
                  <ul class="space-y-2 pt-8">
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Startup</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>80,000 events / mo</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative lg:col-span-2">
            <div class="h-full">
              <div class="h-full z-10 relative lg:flex lg:justify-between lg:w-full lg:pr-8 lg:items-center">
                <div class="flex flex-col flex-1 justify-between h-full space-y-5">
                  <div class="flex justify-between flex-col">
                    <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                      <span>Free</span>
                    </div>
                    <div class="pt-5 text-gray-500 font-medium text-base space-y-1">
                      <div class="flex items-center align-bottom">
                        <span class="pt-1.5">$</span>
                        <div class="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900">
                          <span>0</span>
                        </div>
                        <span class="pt-1.5">per month</span>
                      </div>
                      <div class="text-base">Basic Kitty</div>
                    </div>
                    <div class="lg:hidden">
                      <ul class="space-y-2 pt-8 lg:pt-0">
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>No credit card required</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>Free forever</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-gray-600">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>1 Quick Visit for shy cats</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-gray-600">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span>200 events / month</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="hidden lg:block">
                  <ul class="space-y-2 pt-8 lg:pt-0">
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>No credit card required</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Free forever</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-gray-600">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>3 seats</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-gray-600">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>200 events / month</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative sm:col-span-2 lg:col-span-1">
            <div class="h-full">
              <div class="flex flex-col justify-between h-full space-y-5">
                <div class="flex justify-between flex-col">
                  <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                    <span>Essential Kitty</span>
                  </div>
                  <div class="pt-5">
                    1 Essential Visit to feed, refresh water, scoop and play.
                  </div>
                </div>
                <div class="pt-2">
                  <a
                    href="#"
                    type="button"
                    class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"
                  >
                    <span class="w-full font-semibold text-base">
                      Contact Sales
                    </span>
                    <svg
                      class="inline-block h-6"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPrice;
