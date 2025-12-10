import { modalIcons } from "../../../assets/icons/modalIcons";
import Modal from "./Modal";

export default function ConfirmModal({confirmText}) {
    return(
        <Modal z_index="100">
            <img src={modalIcons.confirmIcon} />
            <section className="flex">
                <span>{confirmText}</span>
            </section>
        </Modal>
    );
}