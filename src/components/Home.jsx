import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css'; 
import CanvasContainer from "./CanvasContainer";

const Home = () => {
  const [color, setColor] = useState("grey");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <main className="flex flex-col md:flex-row h-full bg-[#0e0e0e]">
      {/* Canvas Section */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full">
        <CanvasContainer color={color} />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center bg-inherit w-full md:w-1/2 p-4 md:p-8">
        {/* Card Section */}
        <div className="card flex flex-col px-4 md:px-8 pt-8 md:pt-16">
          <h1 className="text-white text-2xl md:text-4xl mb-4 md:mb-6 font-bold">Create your <br />own style</h1>
          <p className="text-white mb-4 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quaerat delectus repudiandae.</p>

          <h3 className="text-white pl-2 md:pl-8 text-lg md:text-xl">COLOR</h3>
        </div>

        {/* Color Buttons */}
        <div className="p-2 md:p-4 flex gap-2 md:gap-4 mb-10 md:mb-20 items-center text-sm md:text-xl">
          <button
            onClick={() => handleColorChange("#94A3B8")}
            className="bg-[#606D88] border-2 w-8 h-8 md:w-10 md:h-10 rounded-full"
          ></button>
          <button
            onClick={() => handleColorChange("#7F1D1D")}
            className="bg-red-900 border-2 w-8 h-8 md:w-10 md:h-10 rounded-full"
          ></button>
          <button
            onClick={() => handleColorChange("#1E3A8A")}
            className="bg-blue-700 border-2 w-8 h-8 md:w-10 md:h-10 rounded-full"
          ></button>
          <button
            onClick={() => handleColorChange("grey")}
            className="bg-gray-500 border-2 w-8 h-8 md:w-10 md:h-10 rounded-full"
          ></button>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 md:bottom-0 md:-left-32 bg-inherit px-2 py-2 rounded-tl-2xl">
          <button
            className="text-slate-800 bg-cyan-300 text-sm md:text-xl flex items-center justify-between gap-4 md:gap-20 border-2 rounded-tl-2xl rounded-lg py-1 px-2 md:py-2 md:px-4"
            type="button"
          >
            <h3 className="ml-4 md:ml-12">ADD TO CART</h3>
            <i className="ri-arrow-right-up-line text-lg md:text-2xl rounded-full border-2 px-1 bg-cyan-500"></i>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
