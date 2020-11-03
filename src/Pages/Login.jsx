import * as React from "react";

import "./styles.css";

export default function ({ history }) {
  return (
    <div className="loginContainer">
      <div className="card">
        <span>Login</span>
        <input placeholder="Email"></input>
        <input placeholder="password" type="password"></input>
        <button onClick={() => history.push("/admin/home")}>Entrar</button>
      </div>
    </div>
  );
}
