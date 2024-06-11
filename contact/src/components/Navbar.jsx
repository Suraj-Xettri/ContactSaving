import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[60px] bg-gray-600 my-4 gap-2 text-xl text-white rounded-lg flex justify-center items-center'>
        <img className='h-[40px]' src="/React.svg.png" alt="React image" />
        <h1>React Contact App</h1>    
    </div>
  )
}

export default Navbar