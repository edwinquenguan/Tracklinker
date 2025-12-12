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
          confirmTitle={"Subcategoria creada con éxito!"}
          confirmText={
            "Se ha creado correctamente la subcategoria, toca el botón de volver a la pagina de subcategorias"
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
          errorTitle="No se puedo crear la subcategoria"
          errorText="Verfica que todos los campos esten completos o que este creada la categoria"
          confirmButtonText="Volver a intentarlo"
          onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}


// Componentes
import Loader from "../../../../globals/components/ui/Loader";
import FormField from "../../../../globals/components/ui/FormField";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

// Hooks
import { useState } from "react";
// Espacios extra eliminados en la importación del hook
import { useSubcategories } from "../../hooks/useSubcategories";
import { useCreateSubcategories } from "../../hooks/useCreateSubcategories"; 
// Modales
import ErrorModal from "../../../../globals/components/modals/ErrorModal";
import SuccessModal from "../../../../globals/components/modals/SuccessModal";

// La prop 'fetch' probablemente debería ser 'refetch' o 'onSuccess'
export default function AddSubcategoriesModal({ onClose, fetch }) {
  // Estado para las modales se abren encima de esta
  const [innerModal, setInnerModal] = useState(null);
  
  // 1. Desestructuración corregida: 'Subcategories' debe ser 'categories' (o el nombre real que devuelve el hook)
  // 2. Uso de 'data' y 'loading' para cargar las categorías
  const { data: categories, loading: categoriesLoading } = useSubcategories();
  
  // Se añade el campo 'subcategory_description' al estado inicial
  const { form, loading, handleSubmit, handleChange } = useCreateSubcategories({
    subcategory_id: "", // ID de la Categoría padre
    subcategory_name: "",
    subcategory_description: "", // Agregado para coincidir con el FormField
  });

  return (
    <section className="flex flex-col items-center">
      {/* 4. Asignación del onSubmit al formulario */}
      <form onSubmit={(e) => handleSubmit(e, setInnerModal)} className="flex flex-col gap-1"> 
        {/* Menú de categoria (asumo que se selecciona la categoría padre) */}
        <SelectMenu
          value={form.subcategory_id}
          id={"subcategory_id_menu"}
          name={"subcategory_id"}
          spanText={"Categoría Padre"} // Texto ajustado para mayor claridad
          onChange={handleChange}
        >
          <option value=""> Seleccionar Categoría</option> 
          {/* 3. Corrección de la variable: 'roles' cambiado a 'categories' */}
          {categoriesLoading ? (
             <option disabled>Cargando categorías...</option>
          ) : (
            categories?.map((category) => ( // Uso de optional chaining por seguridad
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))
          )}
          {/* La opción 'Agregar subcategoria' aquí es confusa, se deja solo si es una acción especial */}
          {/* <option value="add-subcategory"> Agregar subcategoria</option> */}
        </SelectMenu>

        
        <FormField
          labelText={"Nombre de la Subcategoría"}
          placeholder={"Portátiles, All in One, etc."}
          id={"subcategory_name"}
          name={"subcategory_name"} // 5. Agregado el atributo 'name'
          value={form.subcategory_name} // 6. Agregado el atributo 'value'
          autoComplete="off"
          onChange={handleChange}
        />

        <FormField
          labelText={"Descripción"}
          placeholder={"Descripción de la subcategoría"}
          id={"subcategory_description"}
          name={"subcategory_description"} // 5. Agregado el atributo 'name'
          value={form.subcategory_description} // 6. Agregado el atributo 'value'
          autoComplete="off"
          onChange={handleChange}
        />
        
        {/* Los botones se pueden mantener dentro del formulario o fuera, pero la lógica de manejo se debe centralizar */}
        <ConfirmCancelButtons
          confirmText={loading ? <Loader /> : "Crear"}
          cancelText={"Cancelar"}
          // El handleSubmit ya se activará con el submit del formulario si es un botón de tipo 'submit'
          // Por ahora, se deja el onSubmit en el form y se quita el confirmButtonOnClick
          confirmButtonType="submit" // 7. Establecer el tipo de botón
          confirmButtonOnClick={loading ? (e) => e.preventDefault() : undefined} // Evitar doble click mientras carga
          cancelButtonOnClick={onClose}
        />
        
      </form>


      {/* Modales Internas (sin cambios significativos) */}
      {innerModal === "success" && (
        <SuccessModal
          isOpen={true}
          confirmTitle={"Subcategoría creada con éxito!"}
          confirmText={
            "Se ha creado correctamente la subcategoría, toca el botón de volver a la página de subcategorías"
          }
          confirmButtonText={"Volver a la página"}
          onClose={() => {
            setInnerModal(null);
            onClose();
            fetch(); // Ejecuta la función para refrescar la lista
          }}
        />
      )}
      {innerModal === "error" && (
        <ErrorModal
          isOpen={true}
          errorTitle="No se pudo crear la subcategoría"
          errorText="Verifica que todos los campos estén completos o que la categoría padre esté seleccionada"
          confirmButtonText="Volver a intentarlo"
          onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}