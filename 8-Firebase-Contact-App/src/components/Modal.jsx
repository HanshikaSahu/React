import { RxCross2 } from "react-icons/rx";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute z-40 top-0 w-screen h-screen backdrop-blur grid place-items-center">
          <div className="bg-white min-h-[200px] max-w-full p-5 m-auto position: relative z-50">
            <div className="flex justify-end">
              <RxCross2 onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;