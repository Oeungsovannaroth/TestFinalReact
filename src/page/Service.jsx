import React from "react";
import { Link, Links } from "react-router-dom";
const Service = () => {
  return (
    <div>
      <aside className="w-full font-bold p-4 mt-10 mb-3 max-w-sm mx-auto">
        <h2 className="font-os text-lg font-bold">Categories</h2>
        <ul className="flex items-start flex-wrap mt-4">
          <li className="flex mx-1 ">
            <a
              className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
              href="#"
            >
              Dog Walking
            </a>
            <Link to="/DogWalking"></Link>
          </li>
          <li className="flex mx-1">
            <a
              className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
              href="#"
            >
              Puppy Breaks
              <Link to="/Puppy-Breaks"></Link>
            </a>
          </li>
          <li className="flex mx-1">
            <a
              className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
              href="#"
            >
              Vacation Dog Sitting
            </a>
          </li>
          <li className="flex mx-1">
            <a
              className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
              href="#"
            >
              Vacation Cat Sitting
            </a>
          </li>
          <li className="flex mx-1">
            <a
              className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
              href="#"
            >
              Critter Sitting
            </a>
          </li>
          <li className="flex mx-1">
            <a
              className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
              href="#"
            >
              Specialized Care
            </a>
          </li>
          <li className="flex mx-1">
            <a
              className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
              href="#"
            >
              Vacation Cat Sitting
            </a>
          </li>
        </ul>
      </aside>
      <div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full  w-full"
              src="https://cdn.pixabay.com/photo/2018/05/07/10/49/husky-3380550_1280.jpg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://cdn.pixabay.com/photo/2019/08/26/21/02/dog-4432830_1280.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://cdn.pixabay.com/photo/2020/01/02/15/12/husky-siberian-4736052_1280.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://cdn.pixabay.com/photo/2017/06/20/17/31/forest-2423921_1280.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://cdn.pixabay.com/photo/2022/09/12/07/14/siberian-husky-7448727_1280.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://cdn.pixabay.com/photo/2016/10/26/14/46/siberian-husky-1771665_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 text-2xl mt-0 text-center">
        <p>
          No matter if it's full vacation care or just a sporadic dog walk while
          you are out for a night on the town, Floofins & Co. has you covered.
          We always look forward to exceeding your service expectations, and are
          happy to care for all of your pets for one simple price.
        </p>
        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Dog</span>
                <span className="block text-indigo-600 xl:inline">
                  {" "}
                  Walking
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Does your dog need to get up and go while you are away? Let a
                Floofins & Co. Pet Care Specialist give your dog the attention
                they need when you can't.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
               
                  
                  <Link
                    to="/GetPrice"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    Contact US For Get Pricing
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-md"
                src="https://s3.amazonaws.com/static.organiclead.com/Site-f4423588-79f5-4f1d-87cd-93211b700ecd/shutterstock_1846008106_1_.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-amber-100 p-10 text-2xl mt-0 text-center">
        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row-reverse">
            <div className="sm:text-center lg:text-left ml-10">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Puppy </span>
                <span className="block text-indigo-600 xl:inline"> Breaks</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Are you potty training a new puppy? Let a Floofins & Co. Pet
                Care Specialist assist with the more frequent visits required
                during the potty training process. All puppy Breaks are private
                visits/one family at at time, are non-exercise focused, and are
                designed for young puppies needing multiple short potty breaks
                per day. Puppy Break service includes two 15-minute Quick Visits
                per day, water refresh, a paw wipe, a meal and/or treats served
                (if requested), and daily e-journals of the visits'highlights.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/GetPrice"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    Contact US For Get Pricing
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-md"
                src="https://cdn.pixabay.com/photo/2016/04/15/18/54/dog-1331680_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white p-10 text-2xl mt-0 text-center">
        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Vacation</span>
                <span className="block text-indigo-600 xl:inline">
                  {" "}
                  Dog Sitting
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Vacation dog sitting services can be mixed and matched to tailor
                pet care solutions for ALL of your pets.Visits include meals and
                treats served, fresh water, exercise, cleanups, medication (if
                needed) and the TLC your pet deserves while you are away along
                with daily e-journals for our pet parents.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/GetPrice"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    Contact US For Get Pricing
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-md"
                src="https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>{" "}
      <div className="bg-amber-100 p-10 text-2xl mt-0 text-center">
        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row-reverse">
            <div className="sm:text-center lg:text-left ml-10">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Vacation </span>
                <span className="block text-indigo-600 xl:inline">
                  {" "}
                  Cat Sitting
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Vacation cat sitting services can be mixed and matched to tailor
                pet care solutions for ALL of your pets.Visits include meals and
                treats served, fresh water, exercise, cleanups, medication (if
                needed) and the TLC your pet deserves while you are away along
                with daily e-journals for our pet parents.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/GetPrice"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    Contact US For Get Pricing
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-md"
                src="https://cdn.pixabay.com/photo/2018/04/19/20/20/animal-3334181_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white p-10 text-2xl mt-0 text-center">
        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-2xl tracking-tight font-extrabold text-gray-800 sm:text-2xl md:text-4xl">
                <span className="block xl:inline">
                  Specialized Care For All Of Your
                </span>
                <span className="block text-indigo-600 xl:inline">
                  {" "}
                  Floofins
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Is your home a full zoo? Floofins & Co. Pet Care Specialists are
                equipped to care for everything from dogs to frogs. Start with
                your most complex pet’s schedule and we will help you work out
                the rest. Because every situation is different, we recommend
                that you contact us and let us know about your needs so that we
                can give you an accurate price.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/GetPrice"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    Contact US For Get Pricing
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-md"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-sZ5IkfJ7CeN-bjvl92ILurynBQRanZaYw&s"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-amber-100 text-2xl mt-0 text-center py-5">
        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row-reverse">
            <div className="sm:text-center lg:text-left ml-10">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Pet Concierge </span>
                <span className="block text-indigo-600 xl:inline">
                  {" "}
                  By The Hour
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Our hourly rates are available to secure one of our Pet Care
                Specialists in your home on a continuous hourly basis (like a
                traditional “fur-baby” sitter). Continuous Care is available
                anytime during pet sitting hours (6:00 am – 10:00 pm). Vacation
                services also include our vacation essentials package: house
                plant watering, mail pickup, light + blind/curtain rotation, and
                trash removal/curbing.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/GetPrice"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    Contact US For Get Pricing
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-md"
                src="https://cdn.pixabay.com/photo/2021/09/07/18/10/cat-6604565_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white p-10 text-2xl mt-0 text-center ">
        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-2xl tracking-tight font-extrabold text-gray-800 sm:text-2xl md:text-4xl">
                <span className="block xl:inline">
                  Bird, Rabbit, and Critter
                </span>
                <span className="block text-indigo-600 xl:inline">
                  {" "}
                  Sitting
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Vacation bird, rabbit and critter sitting services can be mixed
                and matched to tailor pet care solutions for ALL of your
                pets.Visits include meals and treats served, fresh water,
                exercise, cleanups, medication (if needed) and the TLC your pet
                deserves while you are away along with daily e-journals for our
                pet parents.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/GetPrice"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    Get Pricing
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-md"
                src="https://cdn.pixabay.com/photo/2014/06/03/01/31/cat-360807_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;
