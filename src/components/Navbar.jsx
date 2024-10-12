import React from 'react'

const Navbar = () => { 
  return (
    <nav className='text-white font-semibold fixed top-6 rounded-full z-50 left-[38%] px-6 py-2 bg-[#ffffff38] flex items-center justify-center space-x-4'>
      <a className='hover:bg-white hover:text-black px-4 py-1 rounded-2xl' href="#">MEN</a>
      <a className='hover:bg-white hover:text-black px-4 py-1 rounded-2xl' href="#">WOMEN</a>
      <a className='hover:bg-white hover:text-black px-4 py-1 rounded-2xl' href="#">CHILD</a>
      <a className='hover:bg-white hover:text-black px-4 py-1 rounded-2xl' href="#">CART</a>
    </nav>
  )
}

export default Navbar