import React from "react";

const Settings = React.lazy(() => import("../Views/Settings"));
const Home = React.lazy(() => import("../Views/Home"));
const Directory = React.lazy(() => import("../Views/Directory"));

export const routes = [
  {
    path: "/admin/home",
    name: "home",
    exact: true,
    component: Home,
  },
  {
    path: "/admin/settings",
    name: "settings",
    exact: true,
    component: Settings,
  },
  {
    path: "/admin/directory",
    name: "directory",
    exact: true,
    component: Directory,
  },
];
