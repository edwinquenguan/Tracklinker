import DateInput from "../../../../globals/components/ui/DateInput";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function ReportCategoriesModal({
  confirmButtonOnClick,
  cancelButtonOnClick,
}) {
  return (
    <section className="flex flex-col items-center gap-2">
      <SelectMenu
        id={"report-type-menu"}
        name={"report-type-menu"}
        spanText={"Quiero Un Informe De:"}
      >
        <option value="date-range"> Categorias Creadas en las fechas </option>
        <option value="delete-range">
          {" "}
          Categorias Eliminadas en las fechas{" "}
        </option>
        <option value="existence"> Categorias Existentes </option>
        <option value="disabled"> Categorias Deshabilitadas </option>
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
        confirmButtonOnClick={confirmButtonOnClick}
        cancelButtonOnClick={cancelButtonOnClick}
      />
    </section>
  );
}
