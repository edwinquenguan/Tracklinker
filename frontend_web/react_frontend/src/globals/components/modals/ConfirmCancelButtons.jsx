export default function ConfirmCancelButtons({confirmText = "Confirmar", cancelText = "Cancelar", confirmButtonOnClick, cancelButtonOnClick}) {
    return(
        <section className="flex items-center pt-6 gap-3">
            <button
            onClick={confirmButtonOnClick}
            className="bg-black text-white px-4 py-3 rounded-xl
            hover:text-gray-300
            dark:bg-white dark:text-black dark:hover:text-gray-800">
                {confirmText}
            </button>
            <button
            onClick={cancelButtonOnClick}
            className="px-4 py-3 rounded-xl transition duration-300
            hover:bg-gray-200
            dark:text-white dark:hover:bg-[#101012]">
                {cancelText}
            </button>
        </section>
    );
}