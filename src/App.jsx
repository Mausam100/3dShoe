import React from 'react';
import Home from './components/Home';
import Navbar from "./components/Navbar";


function App() {
  return (
    <main className='bg-zinc-600 p-4'>
      <Navbar/>
      <Home></Home>
    </main>
  );
}

export default App;
