import { modalIcons } from "../../../assets/icons/modalIcons";
import Modal from "./Modal";

export default function ErrorModal() {
    return(
        <Modal z_index="100">
            <img src={modalIcons.errorIcon} />
            <section className="flex">
                <span>No se pudo elminar este usuario</span>
            </section>
        </Modal>
    );
}