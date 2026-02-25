import { useState } from "react";

export function useCreatePdf(reportTypeValue) {
  const [reportType, setReportType] = useState(reportTypeValue);
  const [reportData, setReportData] = useState([]);
  const [dates, setDates] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setReportType(e.target.value);
  }

  // Esta función valida si los campos de fecha cambiaron su valor
  function handleChangeDate(e) {
    setDates((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleCreatePdf(e, setInnerModal) {
    e.preventDefault();
    setLoading(true);

    try {
      setReportData({
        "title": "Reporte #125121",
        "bodyTitle": "Estadisticas"
      })
      setInnerModal("pdf");
    } catch (error) {
      setInnerModal("error");
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return {
    reportData,
    loading,
    handleChange,
    handleChangeDate,
    handleCreatePdf,
  };
}
