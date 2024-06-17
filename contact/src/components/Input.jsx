import React from 'react'
import {Field, Form, Formik} from "formik"
import { database } from '../config/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { toast } from 'react-toastify'

const Input = ({ onClose }) => {
    const addContact = async (contact) => {
        try {
            const contactRef = collection(database, "contact")
            await addDoc(contactRef, contact)
            toast.success("Contact added successfully");
            onClose()
        } catch (error) {
           console.log(error)
           toast.error("Contact not added");

        }
    }
  return (
    <div className="bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Contact</h2>
        <Formik
            initialValues={{
                Name:"",
                Email:""
            }}

            onSubmit={(values, { resetForm }) => {
                addContact(values)
                resetForm()
                onClose()
            }}
        >
                <Form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <Field 
                    type="text" 
                    id="name" 
                    name="Name" 
                    placeholder="Your Name" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <Field 
                    type="email" 
                    id="email" 
                    name="Email" 
                    placeholder="Your Email" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white m-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add to contact</button>
                </div>
                </Form>
            </Formik>
        </div>
  </div>
  )
}

export default Input