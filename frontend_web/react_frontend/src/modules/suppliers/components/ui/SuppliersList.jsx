import SupplierItem from "./SupplierItem";

export default function SuppliersList({
  suppliers,
  loading,
  error,
  refetch,
  openModal,
}) {
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <section className="max-h-[95%] max-w-full pt-3 flex flex-col gap-1 overflow-x-auto overflow-y-auto">
      <ul className="pt-3 flex flex-col gap-1">
      {suppliers.map((supplier) => (
        <li>
          <SupplierItem
            supplier={supplier}
            moreInfoOnClick={() => openModal(supplier, "info", refetch)}
            editButtonOnClick={() => openModal(supplier, "edit", refetch)}
            deleteButtonOnClick={() => openModal(supplier, "delete", refetch)}
          />
        </li>
      ))}
      </ul>
    </section>
  );
}
