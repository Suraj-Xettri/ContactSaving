import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { MdEditLocationAlt } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc } from 'firebase/firestore';
import { database } from '../config/firebase';
import useDisclouse from '../Hooks/useDisclouse';

const Contacts = ({contact}) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

    const deletContact =
     async (id) => {
        try {
            await deleteDoc(doc(database, "contact",id))
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div key={contact.id} className='bg-orange-200 flex p-2 items-center justify-between rounded-md'>
    <div className='flex gap-3 items-center justify-around px-2'>
      <FaCircleUser className='text-black text-3xl' />

      <div className='flex flex-col items-start'>
        <h2 className='font-medium'>{contact.Name}</h2>
        <p className='text-sm'>{contact.Email}</p>
      </div>
    </div>
    
    <div className='flex text-3xl'>
      <MdDelete onClick={() => deletContact(contact.id)} className=' text-red-600 cursor-pointer'/>
    </div>
  </div>
  )
}

export default Contacts