import { modalIcons } from "../../../assets/icons/modalIcons";
import Modal from "./Modal";

export default function ConfirmModal() {
    return(
        <Modal z_index="100">
            <img src={modalIcons.confirmIcon} />
            <section className="flex">
                <span>Usuario eliminado correctamente</span>
            </section>
        </Modal>
    );
}