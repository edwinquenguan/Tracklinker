import SelectMenu from "../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "./ConfirmCancelButtons";

export default function FilterModal({
  onClose,
  children,
  fieldName = "Creación",
}) {
  return (
    <section className="flex flex-col gap-3">
      <SelectMenu
        id={"order-by-name-menu"}
        name={"order-by-name-menu"}
        spanText={"Ordenar Por Nombre"}
      >
        <option value="">Seleccionar</option>
        <option value="asc">a - Z</option>
        <option value="desc">Z - a</option>
      </SelectMenu>
      <section className="w-full">
        {children}
      </section>

      <section className="flex flex-col gap-1">
        <span className="text-sm dark:text-white">
          Ordenar por Fecha de {fieldName}
        </span>
        {/* Inputs para seleccionar las fechas */}
        <section className="flex justify-between gap-1">
          <div>
            <span className="text-sm dark:text-white">Desde:</span>
            <input
              id="start-date-input"
              type="date"
              className="p-3 rounded-lg border text-sm outline-none
                        dark:bg-[#2020226c] dark:border-[#101012] dark:text-white"
            />
          </div>
          <div>
            <span className="text-sm dark:text-white">Hasta:</span>
            <input
              id="finish-date-input"
              type="date"
              className="p-3 rounded-lg border text-sm outline-none
                    dark:bg-[#2020226c] dark:border-[#101012] dark:text-white"
            />
          </div>
        </section>
      </section>

      {/* Botones de aplicar y cancelar */}
      <ConfirmCancelButtons
        confirmButtonOnClick={onClose}
        confirmText="Aplicar"
        cancelButtonOnClick={onClose}
      />
    </section>
  );
}
