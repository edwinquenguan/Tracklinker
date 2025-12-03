import { useState } from "react";

export function useModal() {
  const [modalType, setModalType] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null)

  const openModal = (data, type) => {
    setModalData(data)
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setModalData(null)
    setIsOpen(false);
    setModalType(null);
  };

  return { modalType, isOpen, modalData, openModal, closeModal };
}
