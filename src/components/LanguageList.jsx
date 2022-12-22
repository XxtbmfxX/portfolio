import React from "react";

const LanguageList = () => (
  <div className="px-4 py-8 bg-gray-100">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Front-End Programming Languages
    </h2>
    <ul className="list-none">
      <li className="py-4">
        <h3 className="text-xl font-bold text-gray-800">HTML</h3>
        <p className="text-gray-700">
          I have been using HTML for several years and am proficient in creating
          semantic layouts, forms, and other elements.
        </p>
      </li>
      <li className="py-4">
        <h3 className="text-xl font-bold text-gray-800">CSS</h3>
        <p className="text-gray-700">
          I have a strong understanding of CSS, including selectors, cascading,
          and responsive design. I have experience with preprocessors such as
          SASS and LESS.
        </p>
      </li>
      <li className="py-4">
        <h3 className="text-xl font-bold text-gray-800">JavaScript</h3>
        <p className="text-gray-700">
          I have extensive experience with JavaScript, including advanced
          concepts such as object-oriented programming, asynchronous
          programming, and functional programming.
        </p>
      </li>
    </ul>
  </div>
);

export default LanguageList;
