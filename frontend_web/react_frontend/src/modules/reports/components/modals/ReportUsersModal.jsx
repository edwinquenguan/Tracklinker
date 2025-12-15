// Hooks
import { useState } from "react";
import { useCreatePdf } from "../../hooks/useCreatePdf";
// Componentes
import Loader from "../../../../globals/components/ui/Loader";
import DateInput from "../../../../globals/components/ui/DateInput";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
// Modales
import PdfModal from "./PdfModal";
import ErrorModal from "../../../../globals/components/modals/ErrorModal";

export default function ReportUsersModal({ onClose }) {
  const [innerModal, setInnerModal] = useState(null);
  const {
    reportData,
    loading,
    handleChange,
    handleChangeDate,
    handleCreatePdf,
  } = useCreatePdf();
  return (
    <section className="flex flex-col items-center gap-2">
      <SelectMenu
        onChange={handleChange}
        id={"report-type-menu"}
        name={"report-type"}
        spanText={"Quiero Un Informe De:"}
      >
        <option value=""> Seleccionar </option>
        <option value="date-range"> Usuarios Creados en las fechas </option>
        <option value="delete-range">Usuarios Eliminados en las fechas</option>
        <option value="existence"> Usuarios Existentes </option>
        <option value="disabled"> Usuarios Deshabilitados </option>
      </SelectMenu>

      {/* Fechas */}
      <section className="flex gap-2">
        <DateInput
          onChange={handleChangeDate}
          name={"start-date"}
          id={"start-date-input"}
          spanText={"Fecha de Inicio"}
        />
        <DateInput
          onChange={handleChangeDate}
          name={"finish-date"}
          id={"finish-date-input"}
          spanText={"Fecha de Finalización"}
        />
      </section>
      <ConfirmCancelButtons
        confirmText={loading ? <Loader /> : "Crear"}
        confirmButtonOnClick={(e) => handleCreatePdf(e, setInnerModal)}
        cancelButtonOnClick={onClose}
      />
      {innerModal === "pdf" && (
        <PdfModal
          data={reportData}
          onClose={() => {
            setInnerModal(null);
            onClose();
          }}
        />
      )}
      {innerModal === "error" && (
        <ErrorModal
          errorTitle={"¡No se pudo crear el reporte!"}
          errorText={
            "No se pudo crear el reporte, revisa que eligiste una opción e intentalo nuevamente"
          }
          confirmButtonText={"Volver a intentarlo"}
          onClose={() => {
            setInnerModal(null);
            onClose();
          }}
        />
      )}
    </section>
  );
}
