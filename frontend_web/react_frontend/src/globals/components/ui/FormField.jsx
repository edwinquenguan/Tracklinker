export default function FormField({labelText, inputIcon, id, type = "text", placeholder, autoComplete = ""}) {
    return(
        <div className="flex flex-col items-center">
            <label htmlFor={id} className="self-start text-sm dark:text-white">{labelText}</label>
            <div className="flex justify-between border pl-2">
                <img src={inputIcon} alt="" className="invert brightness-200" />
                <input type={type}
                placeholder={placeholder}
                id={id} 
                className="px-6 py-3 text-sm rounded-md outline-none
                dark:bg-[#2020226c] dark:border-[#101012] dark:text-white"
                autoComplete={autoComplete}/>
            </div>
        </div>
    )
}