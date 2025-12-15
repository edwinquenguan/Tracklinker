import { pdfStyles } from "../../../data/pdfStyles";
import Icono from "../../../../../assets/icons/tracklinker-logo-pdf.png";
import { Document, Text, Page, Image, View } from "@react-pdf/renderer";

export default function Pdf({ data }) {
  return (
    <Document>
      <Page style={pdfStyles.page}>
        {/* Cabecera */}
        <View style={pdfStyles.header}>
          <Text style={pdfStyles.title}>{data.title}</Text>
          <Image style={pdfStyles.logo} src={Icono} />
        </View>
        {/* Cuerpo o contenido principal */}
        <View style={pdfStyles.body}>
          <Text>{data.bodyTitle}</Text>
          {/* Tabla */}
        </View>
        {/* Pie de página */}
        <View style={pdfStyles.footer}>
          {/* Pagina en la que se encuentra y las paginas totales */}
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber}/${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
}
