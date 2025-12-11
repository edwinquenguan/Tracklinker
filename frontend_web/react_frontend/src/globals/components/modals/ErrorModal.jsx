import { modalIcons } from "../../../assets/icons/modalIcons";
import Modal from "./Modal";
import ConfirmCancelButtons from "./ConfirmCancelButtons";

export default function ErrorModal({ isOpen, onClose, errorTitle, errorText, confirmButtonText }) {
  return (
    <Modal z_index="100" isOpen={isOpen} onClose={onClose}>
      <section className="flex flex-col items-center gap-1">
        <img src={modalIcons.errorWithFillIcon} alt="" className="w-20" />
        <section className="flex flex-col items-center text-center gap-2 dark:text-white">
          <span className="text-lg font-medium">{errorTitle}</span>
          <span className="text-sm">{errorText}</span>
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
