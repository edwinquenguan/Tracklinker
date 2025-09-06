import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import SubcategoriesPage from "./pages/SubcategoriesPage";
import ReportsPage from "./pages/UsersPage";
import WarrantiesPage from "./pages/WarrantiesPage";
import SuppliersPage from "./pages/SuppliersPage";
import TransformationsPage from "./pages/TransformationsPage";
import HelpPage from "./pages/HelpPage";


function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          {/* Página Principal que sería el login (toca hacerlo) como no lo he echo me manda al dashboard*/}
          <Route path="/" element={<HomePage />} />

          {/* Página Panel de Control */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Página Usuarios */}
          <Route path="/users" element={<UsersPage />} />

            {/* Página Productos */}
          <Route path="/products" element={<ProductsPage />} />

          {/* Página Categorias */}
          <Route path="/categories" element={<CategoriesPage />} />

          {/* Página Subcategorias */}
          <Route path="/subcategories" element={<SubcategoriesPage />} />

          {/* Página Reportes */}
          <Route path="/reports" element={<ReportsPage />} />

          {/* Página Garantias */}
          <Route path="/warranties" element={<WarrantiesPage />} />

          {/* Página Proveedores */}
          <Route path="/suppliers" element={<SuppliersPage />} />

          {/* Página Transformaciones */}
          <Route path="/transformations" element={<TransformationsPage />} />
          
          {/* Página Ayuda */}
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
