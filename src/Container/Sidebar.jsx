import * as React from "react";

import { DashboardContext } from "./index";

export default function () {
  const { routes, history } = React.useContext(DashboardContext);
  return (
    <div className="sidebar">
      {routes.map((item, idx) => {
        return (
          <div
            onClick={() => history.push(`${item.path}`)}
            key={idx}
            className="sidebar-item"
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
