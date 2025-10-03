import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link, Links } from "react-router-dom";
const Navbar1 = () => {
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
        <div className="text-xl">Puppy Land</div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="flex md:hidden">
                <button id="hamburger">
                  <img
                    className="toggle block"
                    src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                    width="40"
                    height="40"
                  />
                  <img
                    className="toggle hidden"
                    src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                    width="40"
                    height="40"
                  />
                </button>
              </div>
              <div className=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
                <NavigationMenuLink>
                  <a
                    href="/"
                    className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                  >
                    Home
                  </a>
                  <Link
                    to="/"
                    className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                  ></Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <a
                    href="/service"
                    className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                  >
                    Service
                  </a>
                  <Link
                    to="/service"
                    className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                  ></Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <a
                    href="/service"
                    className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                  >
                    About US
                  </a>
                  <Link
                    to="/about"
                    className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                  >
                    {" "}
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <a
                    href="/service"
                    className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                  >
                    Contact
                  </a>
                  <Link
                    to="/contact"
                    className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                  >
                    {" "} 
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
          <a href="tel:+88581755532">
            <div className="flex justify-end">
              <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Call now
              </div>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
