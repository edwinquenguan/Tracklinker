export default function ReportSectionCard({sectionOnClick, sectionKey, sectionName, sectionIcon, sectionIconAlt}){
    return(
        <button
        onClick={sectionOnClick}
        key={sectionKey}
        className="flex flex-col h-48 w-32 place-items-center gap-2 transition duration-300
        hover:scale-[1.1]"
        >
            <section className="h-32 w-32 rounded-xl bg-[#eae8eb] content-center justify-items-center
            dark:bg-[#101012]">
                <img src={sectionIcon} alt={sectionIconAlt} className="w-12 dark:brightness-[.2] dark:invert"/>
            </section>
            <p className="text-base font-medium text-center dark:text-white">{sectionName}</p>
        </button>
    );
}