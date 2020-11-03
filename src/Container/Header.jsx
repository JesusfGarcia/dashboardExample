import * as React from "react";

import { DashboardContext } from "./index";

export default function () {
  const { openSidebar, setOpenSidebar } = React.useContext(DashboardContext);

  return (
    <div className="header">
      <i
        onClick={() => setOpenSidebar(!openSidebar)}
        className="fa fa-2x fa-bars switch"
      />
      <div className="profile">
        <span>Panchito</span>
        <div className="profile-photo"></div>
      </div>
    </div>
  );
}
