import FormField from "../ui/FormField";

export default function FilterModal({onClose, children}) {
    return(
        <section className="flex flex-col gap-3">
            <section className="flex flex-col px-2 gap-1">
                <span className="text-sm font-medium dark:text-white">Ordenar por Nombre: </span>
                <select name="name-option" id="filter-name-option" className="p-2 rounded-lg border outline-none 
                dark:bg-[#2020226c] dark:border-[#101012] dark:text-white">
                    <option value="asc" className="">A - Z</option>
                    <option value="desc">Z - A </option>
                </select>
            </section>

            {children}

            <section className="flex flex-col px-2 gap-1">
                <span className="text-sm font-medium dark:text-white">Ordenar por Fecha de Creación: </span>
                <div className="flex gap-2 justify-center">
                    <input type="date" className="p-3 rounded-lg border text-sm outline-none
                    dark:bg-[#2020226c] dark:border-[#101012] dark:text-white"/>
                    <input type="date" className="p-3 rounded-lg border text-sm outline-none
                    dark:bg-[#2020226c] dark:border-[#101012] dark:text-white"/>
                </div>
            </section>

        {/* Botones de aplicar y cancelar */}
            <section className="p-2 flex items-center justify-end gap-4">
                <button 
                className="px-4 py-3 rounded-lg text-sm bg-gray-200 font-medium transition
                dark:text-white dark:bg-transparent dark:hover:bg-[#101012]"
                onClick={onClose}> 
                    Cancelar 
                </button>
                
                <button 
                className="px-5 py-3 rounded-lg text-sm font-medium bg-black text-white
                dark:bg-white dark:text-black"
                onClick={onClose}> 
                    Aplicar 
                </button>
            </section>
        </section>
    );
}