import ActionButtons from "../../../../globals/components/ui/ActionButtons";

export default function ProductsTable({products, openModal, refetch}) {

  return (
    <section
        className="max-h-[95%] max-w-full border border-gray-200 rounded-xl shadow-md overflow-y-auto overflow-x-auto overflow-hidden
            dark:border-[#303033]"
      >

      <table
        className="min-w-full min-h-full appearance-none border-collapse
              dark:bg-black"
      >
        {/* Cabecera de la tabla */}
        <thead
          className="sticky top-0
                  dark:bg-black dark:text-gray-300"
        >
          <tr
            className="h-[50px] border-b border-gray-200 text-base
                      dark:border-[#303033]"
          >
            <th className="font-medium text-start pl-4"> Fecha de Ingreso </th>
            <th className="font-medium text-start pl-4"> Orden De Entrada </th>
            <th className="font-medium text-start pl-4"> Subcategoria </th>
            <th className="font-medium text-start pl-4"> Serial </th>
            <th className="font-medium text-start pl-4"> Modelo </th>
            <th className="font-medium text-start pl-2"> Descripción </th>
            <th className="font-medium text-start pl-4"> Marca </th>
            <th className="font-medium text-start pl-2"> Stock </th>
            <th className="font-medium text-start pl-4"> Tiempo de Garantia </th>
            <th className="font-medium text-start pr-4"> Acciones </th>
          </tr>
        </thead>

        {/* Contenido de la tabla */}
        {products.map((product) => (
          <tbody className="font-normal dark:text-gray-300">
            {/* Productos */}
              <tr
                key={product.product_serial}
                className="h-12 text-base overflow-x-auto overflow-y-auto transition duration-500 text-[#45474d] 
                          hover:bg-[#e3e2e4] hover:shadow-md
                          dark:hover:bg-[#101012]"
              >
                {/* Fecha de ingreso */}
                <th className="font-normal text-start pl-4 text-sm">
                  {product.input_date}
                </th>

                {/* Orden de Entrada */}
                <th
                  className="font-normal text-start pl-4 text-sm"
                >
                  {product.input_order}
                </th>

                {/* Subcategoria */}
                <th
                  className="font-normal text-start pl-4 text-sm"
                >
                  {product.subcategory}
                </th>

                {/* Serial */}
                <th
                  className="font-normal text-start pl-4 text-sm"
                >
                  {product.product_serial}
                </th>

                {/* Modelo */}
                <th
                  className="font-normal text-start pl-4 text-sm"
                >
                  {product.model}
                </th>

                {/* Descripción */}
                <th
                  className="font-normal text-start pl-2 text-sm"
                >
                  {product.description}
                </th>

                {/* Marca */}
                <th
                  className="font-normal text-start pl-4 text-sm"
                >
                  {product.brand}
                </th>

                {/* Stock */}
                <th
                  className="font-normal text-start pl-2 text-sm"
                >
                  {product.stock}
                </th>

                {/* Tiempo de garantía */}
                <th
                  className="font-normal text-start pl-4 text-sm"
                >
                  {product.warranty_time}
                </th>

                {/* Botones */}
                <th className="flex h-14">
                  <ActionButtons
                    editButtonOnClick={() => openModal(product, "edit", refetch)}
                    deleteButtonOnClick={() => openModal(product, "delete", refetch)}
                  />
                </th>
              </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
}
