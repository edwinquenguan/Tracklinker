import { useState } from "react";

export function useModal() {
  const [modalType, setModalType] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [refetch, setRefetch] = useState(null);

  const openModal = (data, type, refetchFn) => {
    setModalData(data);
    setModalType(type);
    setIsOpen(true);
    setRefetch(() => refetchFn);
  };
  
  const closeModal = () => {
    setModalData(null);
    setIsOpen(false);
    setModalType(null);
    refetch()
    setRefetch(null)
  };

  return { modalType, isOpen, modalData, refetch, openModal, closeModal };
}
