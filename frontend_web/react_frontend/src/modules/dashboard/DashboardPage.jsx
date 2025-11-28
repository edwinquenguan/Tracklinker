// States
import { useState } from "react";
// Iconos
import { dashboardIcons } from "../../assets/icons/mainIcons";
import { actionsIcons } from "../../assets/icons/mainIcons";
// Componentes
import Modal from "../../globals/components/modals/Modal";
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
// Gráficos
import ChartCard from "./components/ui/ChartCard";
import SimpleBarChart from "./components/ui/SimpleBarChart";
import SimpleAreaChart from "./components/ui/SimpleAreaChart";
import SimplePieChart from "./components/ui/SimplePieChart";
// Modales
import DownloadModal from "./components/modals/DownloadModal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import TinyPieChart from "./components/ui/TinyPieChart";

export default function DashBoardPage() {
  const [modalType, setModalType] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <Layout
      avatarOnClick={() => {
        openModal("user");
        setIsOpen(true);
      }}
    >
      <TopSection
        sectionName={"Panel De Control"}
        addButtonIcon={actionsIcons.uploadIcon}
        addButtonText={"Descargar"}
        createOnClick={() => {
          openModal("download");
          setIsOpen(true);
        }}
        filterOnClick={() => {
          openModal("filter");
          setIsOpen(true);
        }}
      />
      {/* Container de los gráficos */}
      <section
        className="grid max-h-[95%] p-2 transition duration-300 ease-in-out
            xl:grid-cols-12 xl:grid-rows-5
            sm:grid-cols-1 sm:grid-rows-4 gap-5"
      >
        {/* Primera Fila de Gráficos */}
        <TinyPieChart />
        <ChartCard
          rowSpan={1}
          colSpan={3}
          bgColor={""}
          textColor={"black"}
          name={"Chart"}
          metricValue={"2.000"}
          percentValue={"2.1%"}
          chart={dashboardIcons.firstChart}
        />
        <ChartCard
          rowSpan={1}
          colSpan={3}
          bgColor={""}
          textColor={"black"}
          name={"Chart"}
          metricValue={"2.000"}
          percentValue={"2.1%"}
          chart={dashboardIcons.firstChart}
        />
        <ChartCard
          rowSpan={1}
          colSpan={3}
          bgColor={""}
          textColor={"black"}
          name={"Chart"}
          metricValue={"2.000"}
          percentValue={"2.1%"}
          chart={dashboardIcons.firstChart}
        />
        {/* Segunda Fila de Gráficos */}
        <SimpleAreaChart />
        <ChartCard
          rowSpan={2}
          colSpan={3}
          bgColor={""}
          name={"Chart"}
          metricValue={"2.000"}
          percentValue={"2.1%"}
          chart={dashboardIcons.barChart2}
        />
        <SimplePieChart />

        {/* Tercera fila de Gráficos */}
        <ChartCard
          rowSpan={2}
          colSpan={5}
          name={"Chart"}
          metricValue={"2.000"}
          percentValue={"2.1%"}
          chart={dashboardIcons.waveChart}
          imageSize={"w-full h-[80%]"}
        />
        <SimpleBarChart />
      </section>

      {/* Modales */}
      {modalType && (
        <Modal
          title={
            modalType === "filter"
              ? "Filtrar"
              : modalType === "user"
                ? "Configuración"
                : ""
          }
          type={modalType}
          isOpen={isOpen}
          onClose={() => {
            closeModal();
            setIsOpen(false);
          }}
        >
          {modalType === "user" && (
            <ProfileModal
              onClose={() => {
                closeModal();
                setIsOpen(false);
              }}
            />
          )}
          {modalType === "filter" && (
            <FilterModal
              onClose={() => {
                closeModal();
                setIsOpen(false);
              }}
            />
          )}
          {modalType === "download" && <DownloadModal />}
        </Modal>
      )}
    </Layout>
  );
}
