import DateInput from "../../../../globals/components/ui/DateInput";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function ReportSubcategoriesModal({ onClose }) {
  return (
    <section className="flex flex-col items-center gap-2">
      <SelectMenu
        id={"report-type-menu"}
        name={"report-type-menu"}
        spanText={"Quiero Un Informe De:"}
      >
        <option value="select"> Seleccionar </option>
        <option value="date-range">Subcategorias Creadas en las fechas</option>
        <option value="delete-range">
          Subcategorias Eliminadas en las fechas
        </option>
        <option value="existence"> Subcategorias Existentes </option>
        <option value="disabled"> Subcategorias Deshabilitadas </option>
      </SelectMenu>
      <section className="flex gap-2">
        <DateInput id={"start-date-input"} spanText={"Fecha de Inicio"} />
        <DateInput
          id={"finish-date-input"}
          spanText={"Fecha de Finalización"}
        />
      </section>
      <ConfirmCancelButtons
        confirmText="Crear"
        confirmButtonOnClick={onClose}
        cancelButtonOnClick={onClose}
      />
    </section>
  );
}
