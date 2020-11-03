import React from "react";

const Categories = React.lazy(() => import("../Views/Categories"));
const Home = React.lazy(() => import("../Views/Home"));
const Directory = React.lazy(() => import("../Views/Directory"));
const Users = React.lazy(() => import("../Views/Users"));
export const Routes = [
  {
    route: "/admin/home",
    label: "Home",
    component: Home,
    exact: true,
  },
  {
    route: "/admin/categories",
    label: "Categorías",
    component: Categories,
    exact: true,
  },
  {
    route: "/admin/directory",
    label: "Directorio",
    component: Directory,
    exact: true,
  },
  {
    route: "/admin/users",
    label: "Usuarios",
    component: Users,
    exact: true,
  },
];
