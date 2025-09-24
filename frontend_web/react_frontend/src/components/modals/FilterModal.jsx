import FormField from "../ui/FormField";

export default function FilterModal({onClose, children}) {
    return(
        <section className="flex flex-col gap-3">
            <section className="flex flex-col px-2">
                <span className="text-sm font-medium">Ordenar por Nombre: </span>
                <select name="name-option" id="filter-name-option" className="p-2 border outline-none">
                    <option value="asc" className="">A - Z</option>
                    <option value="desc">Z - A </option>
                </select>
            </section>

            <section className="flex flex-col px-2">
                <span className="text-sm font-medium">Ordenar por Fecha de Creación: </span>
                <div className="flex gap-2 justify-center">
                    <input type="date" className="p-2 border text-sm outline-none"/>
                    <input type="date" className="p-2 border text-sm outline-none"/>
                </div>
            </section>

            {children}

        {/* Botones de aplicar y cancelar */}
            <section className="p-2 flex items-center justify-end gap-4">
                <button 
                className="px-3 py-3 rounded-lg text-sm bg-gray-200 font-medium
                dark:text-white"
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