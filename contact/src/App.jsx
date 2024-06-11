import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import { collection, getDocs  } from "firebase/firestore"
import { database } from './config/firebase'
import Contacts from './components/Contacts'
import Modal from './components/Modal'
import Input from './components/Input'
function App() {
  const [contact, setContact] = useState([])

  const[isOpen, setIsOPen] = useState(false)

  const onOpen = () => {
    setIsOPen(true)
  }

  const onClose = () => {
    setIsOPen(false)
  }


  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactCollection = collection(database, "contact")
        const contactSnapshot = await getDocs(contactCollection)
        const contactList = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          } 
        })
        setContact(contactList)
      } catch (error) {
        console.log("Error fetching contacts: ", error)
      }
    }
    getContacts()
  }, []);
  
  return (
    <>
      <div className='max-w-[400px] mx-auto p-4 relative'>
        <Navbar />
        <Search onOpen = {onOpen}/>
        <div className='mt-4 flex flex-col gap-2'>
          {contact.map(contact => (
            <Contacts key = {contact.id} contact = {contact}/>
          ))}
        </div>
        
      </div>

      <Modal isOpen={isOpen} onClose = {onClose}> 
        
        <Input/>
        
      </Modal>
    </>
    
  )
}

export default App
