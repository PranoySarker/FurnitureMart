import React from "react";

const Footer = () => {
  return (
    <footer className="p-6 mt-5 bg-black text-white">
      <div className="container grid  grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 mt-12">
        <div className="  space-y-4">
          <img src="./images/Logo2.png" alt="" />
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">About Us</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
              Master Plan
            </a>
            <a rel="noopener noreferrer" href="#">
              Jobs
            </a>
            <a rel="noopener noreferrer" href="#">
              Interest
            </a>
            <a rel="noopener noreferrer" href="#">
              Pressroom
            </a>
            <a rel="noopener noreferrer" href="#">
              Blog
            </a>
            <a rel="noopener noreferrer" href="#">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Explore EEVE</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
              Unlock my Robot Power
            </a>
            <a rel="noopener noreferrer" href="#">
              Starlight
            </a>
            <a rel="noopener noreferrer" href="#">
              Robot Platform
            </a>
            <a rel="noopener noreferrer" href="#">
              EEVE roadmap
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Community & Support</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
              Willow X Community
            </a>
            <a rel="noopener noreferrer" href="#">
              Developer & Maker Access
            </a>
            <a rel="noopener noreferrer" href="#">
              Special Cases
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-500 mt-12"></hr>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <span className="text-gray-600">EEVE © 2024. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
