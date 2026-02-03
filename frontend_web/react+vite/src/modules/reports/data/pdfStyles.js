import { StyleSheet } from "@react-pdf/renderer";

// Estilos para usar en el pdf
export const pdfStyles = StyleSheet.create({
  page: {
    padding: "20px",
  },
  header: {
    height: "8%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
  },
  title: {
    fontSize: "30px",
    fontWeight: "100",
  },
  logo: {
    width: "200px",
    height: "60px",
  },
  body: {
    height: "82%",
    paddingTop: "10px",
  },
  table: {
    flexDirection: "row",
    justifyContent: "space-between",
    border: "1px solid #000",
  },
  tableColumn: {
    flexDirection: "column",
    borderBottom: "1px solid #000",
  },
  footer: {
    height: "5%",
    display: "flex",
    alignItems: "center",
  },
});
