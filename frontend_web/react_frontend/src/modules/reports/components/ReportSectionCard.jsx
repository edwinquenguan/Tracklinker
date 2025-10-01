export default function ReportSectionCard({sectionOnClick, sectionKey, sectionName, sectionIcon, sectionIconAlt}){
    return(
        <button
        onClick={sectionOnClick}
        key={sectionKey}
        className="flex flex-col h-32 w-32 place-items-center gap-2 transition duration-300
        hover:scale-[1.1]
        xl:h-48 xl:w-32"
        >
            <section className="h-20 w-20 rounded-xl bg-[#eae8eb] content-center justify-items-center
            dark:bg-[#101012]
            xl:h-28 xl:w-28 
            md:h-28 md:w-28
            sm:h-28 sm:w-28">
                <img src={sectionIcon} alt={sectionIconAlt} className="w-12 dark:brightness-[.2] dark:invert"/>
            </section>
            <p className="text-sm font-medium text-center dark:text-white">{sectionName}</p>
        </button>
    );
}