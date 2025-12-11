// Componentes
import Loader from "../../../../globals/components/ui/Loader";
import FormField from "../../../../globals/components/ui/FormField";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

// Hooks
import { useState } from "react";
import { useSubcategories } from "../../hooks/ useSubcategories ";
import {  useCreateSubcategories  } from "../../hooks/ useCreateSubcategories ";
// Modales
import ErrorModal from "../../../../globals/components/modals/ErrorModal";
import SuccessModal from "../../../../globals/components/modals/SuccessModal";

export default function AddSubcategoriesModal({ onClose, fetch }) {
  // Estado para las modales se abren encima de esta
  const [innerModal, setInnerModal] = useState(null);
  const { Subcategories } = useSubcategories();
  const { form, loading, handleSubmit, handleChange } = useCreateSubcategories({
    subcategory_id: "",
    subcategory_name: "",
    
   
  });

  return (
    <section className="flex flex-col items-center">
      {/* Formulario para la informacion de la nueva subcategoria */}
      <form action="" className="flex flex-col gap-1">
        {/* Menú de subcategoria */}
        <SelectMenu
          value={form.subcategory_id}
          id={"subcategory_id_menu"}
          name={"subcategory_id"}
          spanText={"categoria"}
          onChange={handleChange}
        >
          <option> Seleccionar </option>
          {roles.map((subcategory) => (
            <option value={subcategory.id} key={subcategory.id}>
              {subcategory.name}
            </option>
          ))}
          <option value="add-subcategory"> Agregar subcategoria</option>
        </SelectMenu>

        
        <FormField
                labelText={"Nombre de la Subcategoria"}
                placeholder={"portatiles,all in one,etc"}
                id={"subcategory_name"}
                autoComplete="off"
                onChange={handleChange}
            />

            <FormField
                labelText={"description"}
                placeholder={"descripcion de la subcategoria"}
                id={"subcategory_description"}
                autoComplete="off"
                onChange={handleChange}
            />
      </form>




        

        



  

       

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={loading ? <Loader /> : "Crear"}
        cancelText={"Cancelar"}
        confirmButtonOnClick={(e) => handleSubmit(e, setInnerModal)}
        cancelButtonOnClick={onClose}
      />

      {/* Modales Internas */}
      {innerModal === "success" && (
        <SuccessModal
          isOpen={true}
          confirmTitle={"Usuario creado con éxito!"}
          confirmText={
            "Se ha creado correctamente el usuario, toca el botón de volver a la pagina para verlo, ¡Bienvenido!"
          }
          confirmButtonText={"Volver a la pagina"}
          onClose={() => {
            setInnerModal(null);
            onClose();
            fetch();
          }}
        />
      )}
      {innerModal === "error" && (
        <ErrorModal
          isOpen={true}
          errorTitle="No se puedo completar el registro!"
          errorText="Verfica que todos los campos esten completos y que el correo electronico no este registrado"
          confirmButtonText="Volver a intentarlo"
          onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
