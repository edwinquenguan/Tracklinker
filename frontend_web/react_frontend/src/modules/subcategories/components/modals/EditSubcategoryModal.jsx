import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function EditSubcategoryModal({
  subcategory_name,
  subcategory_description,
  onClose,
}) {
    return ( <section className="flex flex-col items-center">
                  <form action="" className="flex flex-col gap-2">
                    <FormField
                      labelText={"Nombre"}
                      placeholder={selectedSubcategory.subcategory_name}
                      id={"name"}
                    />
                  </form>
    
                  {/* Botones */}
                  <ConfirmCancelButtons
                    confirmText={"Confirmar"}
                    cancelText={"Cancelar"}
                    confirmButtonOnClick={() => {
                      closeModal();
                      setIsOpen(false);
                    }}
                    cancelButtonOnClick={() => {
                      closeModal();
                      setIsOpen(false);
                    }}
                  />
                </section>
    );
}