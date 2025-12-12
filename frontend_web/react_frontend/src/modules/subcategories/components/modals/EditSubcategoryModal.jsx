import FormField from '../../../../globals/components/ui/FormField';
import ConfirmCancelButtons from '../../../../globals/components/modals/ConfirmCancelButtons';
import SelectMenu from '../../../../globals/components/ui/SelectMenu';


export default function EditSubcategoryInfoModal({
  subcategory_name,
  subcategory_description,
  onClose,
}) {
    return ( 
      <section className="flex flex-col items-center">
        <SelectMenu>

        </SelectMenu>
            <form action="" className="flex flex-col gap-2">
              <FormField labelText={"Nombre"} placeholder={subcategory_name} id={"name"} />
              <FormField
                labelText={"Descripción"}
                placeholder={subcategory_description}
                id={"description"}  
              />
            </form>
    
            {/* Botones */}
            <ConfirmCancelButtons
              confirmText={"Confirmar"}
              cancelText={"Cancelar"}
              confirmButtonOnClick={onClose}
              cancelButtonOnClick={onClose}
              
              
            />
          </section>
    );
}