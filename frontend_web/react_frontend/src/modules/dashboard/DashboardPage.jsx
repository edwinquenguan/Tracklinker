import { useState } from "react";
import { dashboardIcons } from "../../assets/icons/mainIcons";
import { modalIcons } from "../../assets/icons/modalIcons";
import { actionsIcons } from "../../assets/icons/mainIcons";
import Layout from "../../globals/components/Layout/Layout";
import Modal from "../../globals/components/modals/Modal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import ChartCard from "../../globals/components/ui/ChartCard";
import TopSection from "../../globals/components/ui/TopSection";

export default function DashBoardPage(){

    const [modalType, setModalType] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (type) => {
        setModalType(type);
    }

    const closeModal = () => {
        setModalType(null);
    }

    return(
        <Layout
        avatarOnClick={ () => {
            openModal("user")
            setIsOpen(true)
        }}>
            <TopSection 
            sectionName={"Panel De Control"}
            addButtonIcon={actionsIcons.uploadIcon}
            addButtonText={"Descargar"}
            createOnClick={ () =>{
                openModal("download")
                setIsOpen(true)
            }}
            filterOnClick={() => {
                openModal("filter")
                setIsOpen(true)
            }}
            />
            {/* Container de los gráficos */}
            <section className="grid max-h-[95%] p-2 transition duration-300 ease-in-out
            xl:grid-cols-12 xl:grid-rows-5
            sm:grid-cols-1 sm:grid-rows-4 gap-5">
                {/* Primera Fila de Gráficos */}
                <ChartCard
                rowSpan = {1}
                colSpan = {3}
                bgColor={''}
                textColor={'black'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.firstChart}
                />
                <ChartCard
                rowSpan = {1}
                colSpan = {3}
                bgColor={''}
                textColor={'black'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.firstChart}
                />
                <ChartCard
                rowSpan = {1}
                colSpan = {3}
                bgColor={''}
                textColor={'black'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.firstChart}
                />
                <ChartCard
                rowSpan = {1}
                colSpan = {3}
                bgColor={''}
                textColor={'black'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.firstChart}
                />

                {/* Segunda Fila de Gráficos */}
                <ChartCard
                rowSpan = {2}
                colSpan = {6}
                bgColor={''}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.waveChart2}
                />
                <ChartCard
                rowSpan = {2}
                colSpan = {3}
                bgColor={''}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.barChart2}
                />
                <ChartCard
                rowSpan = {4}
                colSpan = {3}
                bgColor={''}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.thirdChart}
                imageSize={"w-full h-[90%] p-5"}
                />

                {/* Tercera fila de Gráficos */}
                <ChartCard
                rowSpan = {2}
                colSpan = {5}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.waveChart}
                imageSize={"w-full h-[80%]"}
                />
                <ChartCard
                rowSpan = {2}
                colSpan = {4}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.barChart}
                imageSize={"w-full h-[80%]"}
                />

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
                    closeModal()
                    setIsOpen(false)
                }}
                >
                {modalType === "user" &&(
                <ProfileModal
                onClose={() => {
                    closeModal()
                    setIsOpen(false)
                }}
                />
                )}
                {modalType === "filter" && (
                    <FilterModal
                        onClose={() => {
                        closeModal()
                        setIsOpen(false)
                        }}
                    >

                    </FilterModal>
                )}
                {modalType === "download" && (
                    <section className="flex items-center gap-5 dark:text-white">
                        <img src={modalIcons.confirmIcon} alt="" className="w-10 h-10"/>
                        <p className="font-medium">¡Descarga exitosa!</p>
                    </section>
                )}
                </Modal>
            )}
        </Layout>
    );
}