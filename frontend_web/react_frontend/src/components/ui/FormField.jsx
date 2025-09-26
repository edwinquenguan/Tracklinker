export default function FormField({labelText, id, type = "text", placeholder}) {
    return(
        <div className="flex flex-col items-center">
            <label htmlFor={id} className="self-start">{labelText}</label>
            <input type={type} placeholder={placeholder} id={id} className="px-6 py-3 border text-sm rounded-md outline-none"/>
        </div>
    )
}