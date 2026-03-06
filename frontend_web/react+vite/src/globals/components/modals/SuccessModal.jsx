import { modalIcons } from "../../../assets/icons/modalIcons";
import Modal from "./Modal";
import ConfirmCancelButtons from "./ConfirmCancelButtons";

export default function SuccessModal({ isOpen, onClose, confirmTitle, confirmText, confirmButtonText }) {
  return (
    <Modal z_index="150" isOpen={isOpen} onClose={onClose}>
      <section className="flex flex-col items-center gap-1 animate-blurUp">
        <img src={modalIcons.confirmIcon} alt="" className="w-20" />
        <section className="flex flex-col items-center text-center gap-2 dark:text-white">
          <span className="text-xl font-medium">{confirmTitle}</span>
          <span className="text-sm">{confirmText}</span>
        </section>
        <ConfirmCancelButtons
          confirmText={confirmButtonText}
          confirmButtonOnClick={onClose}
          cancelButtonOnClick={onClose}
        />
      </section>
    </Modal>
  );
}
