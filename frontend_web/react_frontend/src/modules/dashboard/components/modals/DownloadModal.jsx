import { modalIcons } from "../../../../assets/icons/modalIcons"

export default function DownloadModal() {
    return(
        <section className="flex items-center gap-5 dark:text-white">
            <img src={modalIcons.confirmIcon} alt="" className="w-10 h-10"/>
            <p className="font-medium">¡Descarga exitosa!</p>
        </section>
    )
}