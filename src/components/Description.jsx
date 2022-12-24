import React from "react";

import HeroImage from "../../assets/images/Toro_logo-nobackground.png";

export default function Description() {
  return (
    <div className="Description m-4 p-2 rounded-xl text-gray-200  ">
      <div className=" bg-gray-800 p-6 sm:p-12 md:p-24 lg:p-32 xl:p-48 flex flex-row flex-wrap items-center justify-center text-center">
        <img
          src={HeroImage}
          alt="toro"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-128 xl:h-128 rounded-full mb-4"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
          Welcome to my portfolio :D
        </h1>
      </div>
    </div>
  );
}
