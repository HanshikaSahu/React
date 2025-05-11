import { IoPersonCircleOutline } from "react-icons/io5";
import { RiEditCircleLine } from "react-icons/ri";
import { FaTrash } from "react-icons/fa6";

import useDisclosure from "../hooks/useDisclosure";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

import { toast } from "react-toastify";

const ContactCard = ({contact, onEdit}) => {

  const [isOpen, handleClose, handleOpen] = useDisclosure();

  const handleDelete = async (id) => {
    try{
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted successfully");
    }
    catch (error) {
      console.log(error);
    }
  }

  return(
    <>
      <div key={contact.id} className="bg-[#FFEAAE] flex justify-between items-center content-center w-[360px] m-auto rounded-lg p-3">

        <div className="flex items-center gap-2">

          <IoPersonCircleOutline className="text-[#F6820C] text-5xl" />
          <div>
            <h2 className="font-semibold">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex gap-4 text-3xl">
          <RiEditCircleLine onClick={() => onEdit(contact)} className="cursor-pointer"  />
          <FaTrash onClick={() => handleDelete(contact.id)} className="text-[#5F00D9] cursor-pointer" />
        </div>
      </div> 
       
    </>
  )
}

export default ContactCard;