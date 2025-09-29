export default function FormField({labelText, id, type = "text", placeholder, autoComplete = ""}) {
    return(
        <div className="flex flex-col items-center">
            <label htmlFor={id} className="self-start dark:text-white">{labelText}</label>
            <input type={type} 
            placeholder={placeholder} 
            id={id} 
            className="px-6 py-3 border text-sm rounded-md outline-none
            dark:bg-[#2020226c] dark:border-[#101012] dark:text-white"
            autoComplete={autoComplete}/>
        </div>
    )
}