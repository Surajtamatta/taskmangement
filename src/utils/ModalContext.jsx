import React, { createContext, useState } from "react";

export const ShowModal = createContext({
  isModalOpen: false,
  setModalOpen: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <ShowModal.Provider value={{ isModalOpen, setModalOpen }}>
      {children}
    </ShowModal.Provider>
  );
};

