import React from 'react'

const Navbar = () => { 
  return (
    <nav className='text-[#f5f5f5] fixed top-6 rounded-full z-50 left-[38%] px-6 py-2 bg-[#00000040] flex items-center justify-center space-x-4'>
      <a className='hover:bg-white hover:text-black px-4 py-1 rounded-2xl inter-typeface' href="#">MEN</a>
      <a className='hover:bg-white hover:text-black px-4 py-1 rounded-2xl inter-typeface' href="#">WOMEN</a>
      <a className='hover:bg-white hover:text-black px-4 py-1 rounded-2xl inter-typeface' href="#">CHILD</a>
      <a className='hover:bg-white hover:text-black px-4 py-1 rounded-2xl inter-typeface' href="#">CART</a>
    </nav>
  )
}

export default Navbar