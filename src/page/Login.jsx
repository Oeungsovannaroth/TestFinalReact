import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="relative py-20 lg:py-10 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4 xl:items-center">
            {/* LEFT IMAGE SIDE */}
            <div className="w-full lg:w-1/2 xl:w-3/5 px-4 order-last lg:order-first">
              <div className="relative max-w-xl mx-auto lg:mx-0 lg:max-w-3xl h-full">
                <img
                  className="block w-full h-166 lg:h-full object-cover rounded-3xl"
                  src="https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_1280.jpg"
                  alt="About School"
                />
                <div className="absolute bottom-0 w-full left-0 p-4 sm:p-6">
                  <div className="p-6 sm:p-10 backdrop-blur-md bg-black/35 rounded-4xl text-white">
                    <h5 className="text-3xl font-semibold mb-2">About Puppy</h5>
                    <span className="block text-sm font-semibold mb-6">
                      Founded out of love for dogs
                    </span>
                    <p className="text-2xl font-semibold">
                      We craft innovative digital experiences that elevate your
                      brand and inspire your audience. Our passionate team
                      leverages creativity and cutting-edge technology to bring
                      your vision to life with precision and style.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT LOGIN SIDE */}
            <div className="w-full lg:w-1/2 xl:w-2/5 px-4 mb-16 lg:mb-0">
              <div className="max-w-md lg:py-20 mx-auto lg:mr-0">
                <h3 className="text-4xl text-gray-900 font-semibold mb-4">
                  Sign in to your account
                </h3>
                <p className="text-lg text-gray-500 mb-10">
                  Greetings on your return! Please enter your login details.
                </p>

                {/* Social Login */}
                <div className="flex flex-wrap mb-6 items-center -mx-2">
                  <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                    <a
                      className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
                      href="#"
                    >
                      {/* Replace with local image if needed */}

                      <span className="ml-4 text-sm font-semibold text-pink-500">
                        Login with Facebook
                      </span>
                    </a>
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <a
                      className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
                      href="#"
                    >
                      {/* Replace with local image if needed */}

                      <span className="ml-4 text-sm font-semibold text-pink-500">
                        Login with Apple
                      </span>
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex mb-6 items-center">
                  <div className="w-full h-px bg-pink-300"></div>
                  <span className="mx-4 text-sm font-semibold text-pink-500">
                    Or
                  </span>
                  <div className="w-full h-px bg-pink-300"></div>
                </div>

                {/* Login Form */}
                <form>
                  <div className="mb-6">
                    <label className="block mb-1.5 text-sm text-cyan-200 font-semibold">
                      Username
                    </label>
                    <input
                      type="name"
                      className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                      placeholder="username"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-1.5 text-sm text-cyan-200 font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                      placeholder="pat@example.com"
                    />
                  </div>

                  <div className="mb-7">
                    <div className="flex mb-1.5 items-center justify-between">
                      <label className="text-sm text-cyan-400 font-semibold">
                        Password
                      </label>
                      <a
                        className="text-xs font-semibold text-orange-900 hover:text-gray-900"
                        href="#"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 hover:scale-110 transition duration-100"
                      ></button>
                    </div>
                  </div>

                  <div className="flex mb-6 items-center">
                    <input type="checkbox" id="rememberMe" />
                    <label
                      className="ml-2 text-xs text-pink-200"
                      htmlFor="rememberMe"
                    >
                      Remember for 30 days
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">
                        <Link to ="/">Login</Link>
                      </span>
                  </button>

                  <span className="sm:text-xs font-semibold text-pink-500 lg:text-2xl ">
                    Don't have an account?
                    <Link
                      className="ml-1 text-pink-200 hover:text-orange-700"
                      to="/signup"
                    >
                      Sign up
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
