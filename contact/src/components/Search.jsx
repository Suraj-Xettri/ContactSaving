import React from 'react'
import { BsSearch } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
const Search = () => {
  return (
    <div className='flex relative gap-2 items-center'>
        <div className='flex flex-grow'>
            <BsSearch className='text-2xl absolute m-2'/>
            <input className='h-11 flex-grow pl-11 border bg-transparent rounded-md border-black' type="text" placeholder='Search Contact'/>
        </div>
        <div>
            <IoIosAddCircleOutline className='text-5xl text-white bg-gray-700  rounded-full'/>
        </div>
        </div>
  )
}

export default Search