import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css'; 
import CanvasContainer from "./CanvasContainer";

const Home = () => {
  const [color, setColor] = useState("grey");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  return (
    <main className="flex bg-[#0e0e0e]">
      <CanvasContainer color={color} />
      <div className="relative rounded-[3vw] flex flex-col items-center bg-inherit w-full">
          <div className="card flex flex-col px-8 pt-16">
             <h1 className="text-white text-4xl mb-6 font-bold">Create your <br />own style</h1>
             <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quaerat delectus repudiandae.</p>

             <h3 className=" text-white pl-8 text-xl">COLOR</h3>

             

          </div>
        <div className="p-4 flex gap-4 mb-20 align-middle text-xl ovo-regular">
          
          <button
            onClick={() => handleColorChange("#94A3B8")}
            className=" bg-[#606D88] border-2 w-10 h-10 rounded-full"
          >
            
          </button>
          <button
          onClick={() => handleColorChange("#7F1D1D")}
            className="bg-red-900 border-2 w-10 h-10 rounded-full"
          >
          </button>
          <button
          onClick={() => handleColorChange("#1E3A8A")}
            className="bg-blue-700 border-2 w-10 h-10 rounded-full"
          >
            
          </button>
          <button
          onClick={() => handleColorChange("grey")}
            className=" bg-gray-500 border-2 w-10 h-10 rounded-full"
          >
            
          </button>
        </div>
        <div className=" absolute bottom-0 -left-32 bg-inherit px-2 py-2 rounded-tl-2xl">
          
          <button
            className="text-slate-800 bg-cyan-300 text-xl flex items-center justify-stretch gap-20 border-2 rounded-tl-2xl rounded-lg py-1 px-2"
            type="button"
          >
            <h3 className=" ml-12">

          ADD TO CART
              </h3>
            <i className="ri-arrow-right-up-line text-2xl rounded-full border-2 px-1 bg-cyan-500"></i>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
