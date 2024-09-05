import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-16 py-02">
      <Link to="/">
        <img src="./images/Logo.png" alt="" className="w-32 h-10" />
      </Link>

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <Link to="">Home</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="">Products</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="">Categories</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="">Custom</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="">Blog</Link>
          </li>
        </ul>
      </nav>

      <div className="w-3/12 flex gap-3 justify-end">
        <button className="relative flex">
          <img
            src="./images/shopping-bag.png"
            alt=""
            className="flex-1 w-8 h-8"
          />
          <span className="absolute right-0 top-0 rounded-full bg-gray-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
            5
          </span>
        </button>
        <button>
          <img
            src="./images/man.jpg"
            alt=""
            className=" w-10 h-10 rounded-full"
          />
        </button>
        <Link
          to="/login"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
