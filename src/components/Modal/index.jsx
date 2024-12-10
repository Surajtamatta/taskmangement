import { ShowModal } from "@/utils/ModalContext";
import React, { useContext } from "react";
import { GiCrossMark } from "react-icons/gi";

const Modal = ({ title, children }) => {
  const { isModalOpen, setModalOpen } = useContext(ShowModal);

  if (!isModalOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex p-8 justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-3">
          <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
          <button
            onClick={()=>setModalOpen(false)}
            className="text-gray-600 hover:text-black text-xl"
          >
            <GiCrossMark/>
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
