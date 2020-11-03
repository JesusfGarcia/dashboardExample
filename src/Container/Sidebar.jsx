import * as React from "react";

import { DashboardContext } from "./index";
export default function () {
  const { openSidebar, Routes, history } = React.useContext(DashboardContext);
  return (
    <div className={openSidebar ? "sidebar" : "sidebarHide"}>
      {Routes.map((item, idx) => {
        return (
          <div
            onClick={() => history.push(item.route)}
            key={idx}
            className="sidebar-item"
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}
