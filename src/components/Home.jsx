import React, { useState } from "react";
import CanvasContainer from "./CanvasContainer";

const Home = () => {
  const [color, setColor] = useState("grey");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  return (
    <main className="flex">
      <CanvasContainer color={color} />
      <div className='relative rounded-[3vw] flex flex-col items-center justify-center bg-zinc-600 w-full'>
        <div className="space-x-4 p-4">
        <button
          onClick={() => handleColorChange("#94A3B8")}
          className=" bg-slate-400 border h rounded p-2"
        >
          White
        </button>
        <button
          onClick={() => handleColorChange("#7F1D1D")}
          className="bg-red-900 border rounded p-2"
        >
          Red
        </button>
        <button
          onClick={() => handleColorChange("#1E3A8A")}
          className="bg-blue-900 border rounded p-2"
        >
          Blue
        </button>
        <button
          onClick={() => handleColorChange("grey")}
          className="bg-slate-500 border rounded p-2"
        >
          Green
        </button>

        </div>
        <div className=" absolute bottom-0 -left-32 text-white font-bold text-3xl bg-zinc-600 px-4 py-3 rounded-tl-2xl">
        <button className=" border-white border-[1px] px-4 py-1 rounded-2xl" type="button">ORDER NOW</button>
        </div>
      </div>
    </main> 
  );
};

export default Home;
