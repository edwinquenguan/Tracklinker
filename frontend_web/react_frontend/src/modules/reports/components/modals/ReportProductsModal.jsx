import DateInput from "../../../../globals/components/ui/DateInput";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function ReportProductsModal({confirmButtonOnClick, cancelButtonOnClick}){
    return(
        <section className="flex flex-col items-center gap-2">
            <SelectMenu
            id={"report-type-menu"}
            name={"report-type-menu"}
            spanText={"Quiero Un Informe De:"}>
                <option value="date-range"> Productos Agregados en las fechas </option>
                <option value="delete-range"> Productos Eliminados en las fechas </option>
                <option value="existence"> Productos Existentes </option>
                <option value="disabled"> Productos Sin Stock </option>
            </SelectMenu>
            <section className="flex gap-2">
                <DateInput
                id={"start-date-input"}
                spanText={"Fecha de Inicio"}
                />
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