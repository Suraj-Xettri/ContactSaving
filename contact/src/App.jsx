import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { database } from './config/firebase'
import Contacts from './components/Contacts'
import Modal from './components/Modal'
import Input from './components/Input'
import useDisclouse from './Hooks/useDisclouse'

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [contact, setContact] = useState([])
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactCollection = collection(database, "contact")

        onSnapshot(contactCollection, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            } 
        })
          setContact(contactList)
          return contactList
        })
      } catch (error) {
        console.log("Error fetching contacts: ", error)
      }
    }
    getContacts()
  }, []);

  const filterContacts = (e)  => {
    const value = e.target.value.toLowerCase()

    const contactCollection = collection(database, "contact")

        onSnapshot(contactCollection, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            } 
        })

         const filterContacts = contactList.filter((contact) => contact.Name.toLowerCase().includes(value))
          setContact(filterContacts)
          return filterContacts
        })
  }
  
  return (
    <>

      <div className='max-w-[400px] mx-auto p-4 relative'>
        <Navbar />
        <Search onOpen = {onOpen} filterContact={filterContacts}/>
        <div className='mt-4 flex flex-col gap-2'>
          {contact.map(contact => (
            <Contacts key = {contact.id} contact = {contact}/>
          ))}
        </div>
        
      </div>

      <Modal isOpen={isOpen} onClose={onClose}> 
        <Input onClose={onClose} />
      </Modal>

      <ToastContainer 
      position='bottom-center' 
      autoClose={1000} 
      transition={Bounce}
      />
    </>
    
  )
}

export default App
