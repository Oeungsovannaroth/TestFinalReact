import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import React from "react";
import { Link, Links } from "react-router-dom";

//import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between bg-gray-200 px-2 py-2 items-center text-3xl">
      <img
        src="/public/logo.png"
        alt="logo"
        className="rounded-full w-30 h-30 overflow-hidden object-fit-cover text-gray-400
        "
      />
      <h1>YUYU Pet care</h1>
      <div className="flex space-x-4 text-2xl  ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex  space-x-5  px-7 gap-8 py-9 text-2xl text-blue-600 ">
              <NavigationMenuLink
                asChild
                className="hover:text-purple-500 hover:font-bold"
              >
                <Link to="/">Home</Link>
              </NavigationMenuLink>

              <NavigationMenuLink
                asChild
                className="hover:text-purple-500 hover:font-bold "
              >
                <Link to="/about">About</Link>
              </NavigationMenuLink>

              <NavigationMenuLink
                asChild
                className="hover:text-purple-500 hover:font-bold "
              >
                <Link to="/contact">Contact</Link>
              </NavigationMenuLink>
              <NavigationMenuLink
                asChild
                className="hover:text-purple-500 hover:font-bold"
              >
                <Link to="/service">  
                  {/* <form className="max-w-sm mx-auto">
                    <select
                      id="countries"
                      className="t text-blue-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </form> */}Service
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className=" px-7 gap-8 py-9 space-x-4 font-semibold text-blue-400 ">
          <button type="button" className="hover:text-purple-500">
            {""}
            <a href="/src/components/ui/card.jsx">Login</a>
          </button>
          <button type="button" className="hover:text-purple-500">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
