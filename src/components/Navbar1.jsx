import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link, Links } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { useContext, useState } from "react";
import Context from "@/context/Context";
// import { useState } from "react";
const Navbar1 = () => {
  const { theme, toggleTheme } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e0e0d7]">
        <div className="lg:text-5xl md:text-4xl sm:text-3xl">Puppy Land</div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <button
                className="md:hidden text-2xl sm:mr-10"
                onClick={() => setIsOpen(!isOpen)}
              >
                ☰
              </button>
              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } w-full md:flex text-right mt-5 md:mt-0 md:text-2xl`}
              >
                <div className="  hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none text-2xl capacity-60">
                  <NavigationMenuLink>
                    <Link
                      to="/"
                      className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Link
                      to="/product"
                      className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                    >
                      Products
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Link
                      to="/service"
                      className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                    >
                      Service
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Link
                      to="/about"
                      className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                    >
                      About US
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Link
                      to="/contact"
                      className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Link
                      to="/login"
                      className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                    >
                      Login
                    </Link>
                  </NavigationMenuLink>
                </div>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
          <div className="flex justify-end">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
          </div>
        </div> */}
        <div className="flex items-center justify-between p-3 bg-[#e0e0d7]">
          {/* Menu */}
          <div
            className={`w-full text-right mt-5 ${
              isOpen ? "block" : "hidden"
            } md:hidden`}
          >
            <Link
              to="/"
              className="block md:inline-block px-3 py-3 hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="block md:inline-block px-3 py-3 hover:text-blue-500"
            >
              Products
            </Link>
            <Link
              to="/service"
              className="block md:inline-block px-3 py-3 hover:text-blue-500"
            >
              Service
            </Link>
            <Link
              to="/about"
              className="block md:inline-block px-3 py-3 hover:text-blue-500"
            >
              About US
            </Link>
            <Link
              to="/contact"
              className="block md:inline-block px-3 py-3 hover:text-blue-500"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block md:inline-block px-3 py-3 hover:text-blue-500"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="flex items-center lg:gap-4 ms:gap-8">
          <Link
            to="tel:+88581755532"
            stroke="currentColor"
            className="bg-pink-600 sm:px-8 flex sm:mr-40  text-xs sm:text-sm sm:py-2 text-white px-4 py-2 rounded-full hover:bg-pink-700 items-center gap-2 hover:scale-120 transform transition duration-300"
          >
            Call Now
            <FaPhoneAlt />
          </Link>
          <button
            onClick={toggleTheme}
            className="cursor-pointer text-2xl right-0"
          >
            {theme === "dark" ? <IoMdSunny /> : <MdDarkMode />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
