import { useCategoriesChart } from "../../../hooks/useCategoriesChart";
import TopChartsCard from "../TopChartsCard";

export default function CategoriesChart() {
  const { categories, loading, error } = useCategoriesChart();
  return (
    <TopChartsCard background={"categories-background"} title={"Categorias"}>
      {categories.map((item) => (
        <div className="flex items-center gap-1" key={item.categories}>
          {/* Categorias existentes */}
          <span className="font-semibold text-2xl">{item.categories}</span>
        </div>
      ))}
    </TopChartsCard>
  );
}
