import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({onClose, isOpen, children}) => {
  return (
    <>
        {isOpen? 
        
        <div className=' max-h-[300px] max-w-[350px] bg-yellow-50 rounded-xl absolute inset-0 m-auto'>

        <div className='flex justify-end p-1'>
            <IoIosCloseCircle onClick={onClose} className='text-4xl text-red-600 self-end'/>
        </div>
            
        
            <div>
                {children}
            </div>
        </div>: 
        
        "" }
        
    </>
    
  )
}

export default Modal