import FormField from "../../../globals/components/ui/FormField";
import { loginIcons } from "../../../assets/icons/loginIcons";

export default function RecordPasswordModal() {
    return(
        <section className="flex flex-col items-center">
            <FormField
            labelText={"Email"}
            inputIcon={loginIcons.emailIcon}
            type="email"
            placeholder={"Escribe tu correo aquí"}
            />
        </section>
    );
}