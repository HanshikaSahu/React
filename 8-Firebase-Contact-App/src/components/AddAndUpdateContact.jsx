import { collection, doc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

import Modal from "./Modal";

import { Field, Formik, Form, ErrorMessage } from "formik";

import { toast } from "react-toastify";
import * as Yup from "yup";

const AddAndUpdateContact = ({isOpen, onClose, isUpdate, contact}) => {

  const addContact = async (contact) => {
    try{
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact added successfully");
    }
    catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try{
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact updated successfully");
    }
    catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return(
    <div>
      <Modal isOpen={isOpen} onClose={onClose} >
        <Formik

            initialValues={
              isUpdate ? {
                name: contact.name,
                email: contact.email,
              } : {
                name: "",
                email: "",
              }
            }
          
          onSubmit={(values) => {
             isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}

          validationSchema={validationSchema}
        >
          <Form className="flex flex-col gap-4 ">
            <div>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                id="name"
                className="border rounded-lg p-2 flex w-full" />
                <div className="text-red-500 text-xs ">
                  <ErrorMessage name="name" />
                </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                name="email"
                id="email"
                className="border rounded-lg p-2 flex w-full" />
                <div className="text-red-500 text-xs ">
                  <ErrorMessage name="email" />
                </div>
            </div>
            <button type="submit" className="bg-[#FCCA3F] h-[30px] self-end p-4 flex items-center border rounded-md">{isUpdate ? "Update" : "Add"} Contact</button>
          </Form>
        </Formik>
      </Modal>
    </div>
  )
}

export default AddAndUpdateContact;