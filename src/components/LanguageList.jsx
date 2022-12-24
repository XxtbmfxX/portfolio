import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";

const LanguageList = () => (
  <div className=" my-5 px-4 py-8 bg-gray-700 text-yellow-50 ">
    <h2 className="text-2xl font-bold text-gray-100 mb-4">
      Front-End Programming Languages
    </h2>
    <ul className=" my-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 list-none ">
      <li className=" flex flex-col items-center justify-center  py-4">
        <SiHtml5 className="inline-block text-8xl" />
        <h3
          style={{ textAlign: "center" }}
          className=" text-yellow-50 text-xl font-bold  mt-10 ">
          HTML
        </h3>
      </li>
      <li className=" flex flex-col items-center justify-center py-4">
        <SiCss3 className="inline-block text-8xl" />
        <h3
          style={{ textAlign: "center" }}
          className=" text-yellow-50 text-xl font-bold  mt-10 ">
          CSS
        </h3>
      </li>
      <li className=" flex flex-col items-center justify-center py-4">
        <SiJavascript className="inline-block text-8xl" />
        <h3
          style={{ textAlign: "center" }}
          className=" text-yellow-50 text-xl font-bold  mt-10 ">
          JavaScript
        </h3>
      </li>
      <li className=" flex flex-col items-center justify-center py-4">
        <SiReact className="inline-block text-8xl" />
        <h3
          style={{ textAlign: "center" }}
          className=" text-yellow-50 text-xl font-bold  mt-10 ">
          JavaScript
        </h3>
      </li>
    </ul>
  </div>
);

export default LanguageList;
