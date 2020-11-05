import * as React from "react";

import DashboardContext from "./index";

export default function () {
  const { routes, history } = React.useContext(DashboardContext);
  return (
    <div className="sidebar">
      {routes.map((item, idx) => {
        return (
          <div key={idx} className="sidebar-item">
            {item.name}
          </div>
        );
      })}
      <div className="sidebar-item">Home</div>
      <div className="sidebar-item">Settings</div>
      <div className="sidebar-item">Directory</div>
      <div className="sidebar-item">asdf</div>
    </div>
  );
}
