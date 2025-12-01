import { useState } from "react";

export function useModal() {
  const [modalType, setModalType] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (type) => {
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
  };

  return { modalType, isOpen, openModal, closeModal };
}
