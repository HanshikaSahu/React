import Navbar from "./components/Navbar";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import ContactNotFound from "./components/ContactNotFound";

import { FaSearch } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";

import { useEffect, useState } from "react";

import { db } from "./config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

import useDisclosure from "./hooks/useDisclosure";

import { ToastContainer, toast } from "react-toastify";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, handleClose, handleOpen] = useDisclosure();
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
     const contactRef = collection(db, "contacts");
     const unsubscribe = onSnapshot(contactRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return{
          id: doc.id,
          ...doc.data(),
        }
      })
      setContacts(contactLists);
    });
    return () => unsubscribe();
  }, []);


  const filterContacts = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contacts");

    onSnapshot(contactRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return{
          id: doc.id,
          ...doc.data(),
        }
      })
    

      const filteredContacts = contactLists.filter((contact) => 
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  const handleUpdate = (contact) => {
    setSelectedContact(contact);
    handleOpen();
  }

  const handleAdd = () => {
    setSelectedContact(null);
    handleOpen();
  }

  
  return (
    <>
      <div className="min-w-[360px] wx-auto">
        <Navbar />
        <div className="flex justify-center items-center text-white position: relative">

        <div className="flex justify-center items-center gap-4 h-[40px] w-[300px] m-4 rounded-lg border-2 border-gray-300 px-2">

          <FaSearch className="text-white-500" />
          <input
            type="text"
            onChange={filterContacts}
            placeholder="Search Contact"
            className="flex-grow bg-transparent placeholder-white font-light outline-none"
          />
        </div>

        <MdAddCircle onClick={handleAdd} className="text-6xl " />
      </div>

      <div className="mt-3 gap-3 flex flex-col ">
         {contacts.length <= 0
          ? 
          <ContactNotFound />
          :
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} onEdit={handleUpdate} />
         ))}
      </div>
    </div> 
    <ToastContainer position="bottom-center max-w-full text-md sm:max-w-[400px]" />
    <AddAndUpdateContact isOpen={isOpen} onClose={handleClose} contact={selectedContact} isUpdate={!!selectedContact} />
    </>
  );
}

export default App;