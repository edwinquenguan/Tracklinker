export default function FormButtons({
  getIntoButtonOnclick,
  getIntoButtonText,
  recoverButtonOnclick,
}) {
  return (
    <section className="flex flex-col pt-5 gap-3">
      <button
        onClick={getIntoButtonOnclick}
        className="flex justify-center py-3 text-sm text-white bg-blue-700 rounded-xl shadow-xl transition duration-300
        hover:text-gray-300 hover:shadow-blue-200
        dark:hover:shadow-[0px_0px_20px_-10px_#1d4ed8]"
      >
        {getIntoButtonText}
      </button>
      <button
        type="button"
        onClick={recoverButtonOnclick}
        className="flex justify-center px-8 py-3 text-sm rounded-xl transition-all duration-300
        hover:bg-[#e5e7eb9c]
        dark:text-white dark:hover:bg-[#202022a6]"
      >
        Olvidaste tu contraseña?
      </button>
    </section>
  );
}
