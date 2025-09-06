// Aqui se almacenan constantes que su contenido son listas fijas y cosas que casi nunca cambian
import { asideIcons } from "../assets/icons/asideIcons";

export const firstSectionItems = [
    { name:"Inicio", path:"/home", icon: asideIcons.homeIcon, alt:"a" },
    { name:"Panel De Control", path:"/dashboard", icon: asideIcons.dashboardIcon, alt:""},
    { name:"Usuarios", path:"/users", icon: asideIcons.usersIcon, alt:""},
    { name:"Productos", path:"/products", icon: asideIcons.productsIcon, alt:""},
    { name:"Categorias", path:"/categories", icon: asideIcons.categoriesIcon, alt:""},
    { name:"Subcategorias", path:"/subcategories", icon: asideIcons.subcategoriesIcon, alt:""},
    { name:"Informes", path:"/reports", icon: asideIcons.reportsIcon, alt:""},
    { name:"Garantías", path:"/warranties", icon: asideIcons.warrantiesIcon, alt:""},
    { name:"Proveedores", path:"/suppliers", icon: asideIcons.suppliersIcon, alt:""},
    { name:"Transformaciones", path:"/transforms", icon: asideIcons.transformationsIcon, alt:""},
];

export const secondSectionItems = [
    { name:"Ayuda", path:"/help", icon: asideIcons.helpIcon, alt:"Icono dee la seccion de ayuda"},
    { name:"Cerrar Sesión", path:"/", icon: asideIcons.logoutIcon, alt:"Icono para cerrar sesión"},
];