import * as React from "react";

import "./styles.css";

export default function ({ history }) {
  return (
    <div className="loginContainer">
      <span onClick={() => history.push("/admin/home")}>
        Click aquí para entrar al dashboard
      </span>
    </div>
  );
}
