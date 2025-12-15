import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Modal from "../../../../globals/components/modals/Modal";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import Pdf from "../ui/pdf/Pdf";

export default function PdfModal({ data, onClose }) {
  return (
    <Modal z_index="150" isOpen={true} onClose={onClose} title={"Reporte"}>
      <section className="flex flex-col items-center">
        <section className="w-full h-[70vh]">
          <PDFViewer width={"100%"} height={"100%"}>
            <Pdf data={data} />
          </PDFViewer>
        </section>
        <ConfirmCancelButtons
          confirmText={
            <PDFDownloadLink
              document={<Pdf data={data} />}
              fileName="report.pdf"
            >
              Descargar
            </PDFDownloadLink>
          }
          cancelButtonOnClick={onClose}
        />
      </section>
    </Modal>
  );
}
