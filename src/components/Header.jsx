import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import FrontMentor from "../../assets/front.svg";
const Header = () => (
  <nav className="bg-gray-900 p-4 flex justify-between items-center">
    <div className="flex items-center">
      <span className="text-xl font-bold text-white">My portfolio</span>
    </div>
    <div>
      <a href="#" className="mr-4 text-gray-500 hover:text-white">
        <BsInstagram className="inline-block" />
      </a>
      <a href="#" className="mr-4 text-gray-500 hover:text-white">
        <BsLinkedin className="inline-block" />
      </a>
      <a href="#" className="mr-4 text-gray-500 hover:text-white">
        <img
          src={FrontMentor}
          alt="frontmentor"
          className="inline-block"
          style={{ width: "16px" }}
        />
      </a>
    </div>
  </nav>
);

export default Header;
