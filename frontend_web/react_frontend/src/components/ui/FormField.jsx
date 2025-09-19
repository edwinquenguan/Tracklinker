export default function FormField({labelText, id, type = "text", placeholder}) {
    return(
        <div className="flex flex-col items-center">
            <label htmlFor={id}>{labelText}</label>
            <input type={type} placeholder={placeholder} id={id} className="px-2 py-2 border text-sm rounded-md outline-none"/>
        </div>
    )
}