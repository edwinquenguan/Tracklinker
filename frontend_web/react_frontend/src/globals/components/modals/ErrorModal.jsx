import { modalIcons } from "../../../assets/icons/modalIcons";
import Modal from "./Modal";

export default function ErrorModal({errorText}) {
    return(
        <Modal z_index="100">
            <img src={modalIcons.errorIcon} />
            <section className="flex">
                <span>{errorText}</span>
            </section>
        </Modal>
    );
}