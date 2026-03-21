import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../modules/login/Login";
import HomePage from "../modules/home/HomePage";
import DashboardPage from "../modules/dashboard/DashboardPage";
import UsersPage from "../modules/users/UsersPage";
import ProductsPage from "../modules/products/ProductsPage";
import CategoriesPage from "../modules/categories/CategoriesPage";
import SubcategoriesPage from "../modules/subcategories/SubcategoriesPage";
import ReportsPage from "../modules/reports/ReportsPage";
import WarrantiesPage from "../modules/warranties/WarrantiesPage";
import SuppliersPage from "../modules/suppliers/SuppliersPage";
import TransformationsPage from "../modules/transformations/TransformationsPage";
import ProtectedRoutes from "./ProtectedRoutes";

export default function AppRouter() {
  return (
    <Routes>
      {/* Ruta no existente lo que hace es enviarlo al login */}
      <Route path="*" element={<Navigate to="/login" />} />

      {/* Página Login o de Inicio de Sesión */}
      <Route path="/login" element={<Login />} />


      {/* Rutas protegidas medidante el componente "ProtectedRoutes"*/}
      <Route element={<ProtectedRoutes role="Admin"/>}>
        {/* Página Principal */}
        <Route path="/home" element={<HomePage />} />

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
      </Route>
    </Routes>
  );
}
