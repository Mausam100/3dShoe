import React, { useState } from "react";
import CanvasContainer from "./CanvasContainer";

const Home = () => {
  const [color, setColor] = useState("grey");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  return (
    <main className="flex bg-[#0e0e0e]">
      <CanvasContainer color={color} />
      <div className="relative rounded-[3vw] flex flex-col items-center justify-center bg-inherit w-full">
        <div className="p-4 flex flex-col gap-4 items-center justify-center align-middle text-xl ovo-regular">
          <button
            onMouseMove={() => handleColorChange("#94A3B8")}
            className="hover:text-slate-500 flex items-center justify-center gap-2 text-white hover:text-gray-400 rounded p-2"
          >
            <span className="w-10 h-[1px] inline-block bg-white"></span>
            White
          </button>
          <button
            onMouseMove={() => handleColorChange("#7F1D1D")}
            className="hover:text-red-900 text-white rounded p-2"
          >
            Red
          </button>
          <button
            onMouseMove={() => handleColorChange("#1E3A8A")}
            className="hover:bg-blue-700 text-white rounded p-2"
          >
            Blue
          </button>
          <button
            onMouseMove={() => handleColorChange("grey")}
            className=" hover:text-gray-500 text-white text-black rounded p-2"
          >
            Green
          </button>
        </div>
        <div className=" absolute bottom-0 -left-32 invery-0 font-bold text-3xl bg-inherit px-4 py-3 rounded-tl-2xl">
          <button
            className="text-white underline-offset-8 underline px-4 py-1 rounded-2xl ovo-regular"
            type="button"
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
