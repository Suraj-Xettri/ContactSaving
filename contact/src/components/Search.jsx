import React from 'react'
import { BsSearch } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
const Search = ({onOpen, filterContact}) => {
  return (
    <div className='flex relative gap-2 items-center'>
        <div className='flex flex-grow'>
            <BsSearch className='text-2xl absolute m-2'/>
            <input onChange={filterContact} className='h-11 flex-grow pl-11 border bg-transparent rounded-md border-black' type="text" placeholder='Search Contact'/>
        </div>
        <div>
            <IoIosAddCircleOutline onClick={onOpen} className='text-5xl text-white bg-gray-700  rounded-full cursor-pointer'/>
        </div>
        </div>
  )
}

export default Search