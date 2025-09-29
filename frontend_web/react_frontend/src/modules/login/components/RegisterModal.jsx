import FormField from "../../../globals/components/ui/FormField";

export default function RegisterModal() {
    return(
        <section className="flex flex-col items-center">
            <form action="" method="post" className="flex flex-col gap-3">
            <FormField
            type={"email"}
            id={"email-input"} 
            labelText={"Email"}
            placeholder={"pepito@pepito.com"}
            />
            <FormField
            type={"password"}
            id={"password-input"}
            labelText={"Contraseña"}
            placeholder={"********"}
            />
            </form>
        </section>
    );
}