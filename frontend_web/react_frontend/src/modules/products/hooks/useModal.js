import { useState } from "react";

export function useModal() {
  const [modalType, setModalType] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (product, type) => {
    setSelectedProduct(product);
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalType(null);
    setIsOpen(false);
  };

  return {
    modalType,
    selectedProduct,
    isOpen,
    openModal,
    closeModal,
  };
}