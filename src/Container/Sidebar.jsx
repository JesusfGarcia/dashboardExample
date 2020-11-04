import * as React from "react";

import { DashboardContext } from "./index";
export default function () {
  const { openSidebar, Routes, history } = React.useContext(DashboardContext);
  let lsi = sessionStorage.getItem("lsi")
    ? parseInt(sessionStorage.getItem("lsi"))
    : 0;
  const [sidebarItem, setSidebarItem] = React.useState(lsi);

  const selectSidebarItem = (idx, route) => {
    setSidebarItem(idx);
    history.push(route);
    sessionStorage.setItem("lsi", idx);
  };

  return (
    <div className={openSidebar ? "sidebar" : "sidebarHide"}>
      {Routes.map((item, idx) => {
        return (
          <div
            onClick={() => selectSidebarItem(idx, item.route)}
            key={idx}
            className={
              sidebarItem === idx ? "sidebar-item-selected" : "sidebar-item"
            }
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}
