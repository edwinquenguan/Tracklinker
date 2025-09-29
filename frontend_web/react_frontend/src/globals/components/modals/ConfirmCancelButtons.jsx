export default function ConfirmCancelButtons({flexDirection, cancelButtonWidth, confirmText = "Confirmar", cancelText = "Cancelar", confirmButtonOnClick, cancelButtonOnClick}) {
    return(
        <section className={`flex ${flexDirection} items-center pt-6 gap-2`}>
            <button
            onClick={confirmButtonOnClick}
            className="font-medium text-sm bg-black text-white px-4 py-3 rounded-lg transition duration-300
            hover:text-gray-300
            dark:bg-white dark:text-black dark:hover:text-gray-800">
                {confirmText}
            </button>
            <button
            onClick={cancelButtonOnClick}
            className={`${cancelButtonWidth} px-4 py-3 rounded-lg text-sm transition duration-300
            hover:bg-gray-200
            dark:text-white dark:hover:bg-[#101012]`}>
                {cancelText}
            </button>
        </section>
    );
}