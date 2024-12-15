import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-[#0e0e0e] p-4 w-screen overflow-hidden">
      <Navbar />
      <Home></Home>
    </main>
  );
}

export default App;
