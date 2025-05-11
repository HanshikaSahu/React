const ContactNotFound = () => {
  return(
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="flex items-center gap-4">
        <div>
          <img src="./HandsContact.png" alt="Contact Not Found" />
        </div>
        <h2 className="text-white font-semibold text-xl">No Contact Found</h2>
      </div>
    </div>
  )
}

export default ContactNotFound;