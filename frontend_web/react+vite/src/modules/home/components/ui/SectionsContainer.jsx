import { items } from "../../constants/homeSections"
import ActionCard from "./ActionCard";

export default function SectionsContainer() {
  return (
    <section
      className="min-h-full grid grid-cols-4 grid-rows-2 p-[10px_10px] gap-[20px_12px] place-items-center
                    xl:p-[100px_250px_250px_300px]
                    lg:p-[100px_150px_250px_150px]
                    md:p-[50px_50px_200px_50px]"
    >
      {items.map((item) => (
        <ActionCard
          itemName={item.name}
          itemPath={item.path}
          itemIcon={item.icon}
          itemAlt={item.alt}
        />
      ))}
    </section>
  );
}
