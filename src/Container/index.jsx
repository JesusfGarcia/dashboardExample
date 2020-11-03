import * as React from "react";

import Header from "./Header";
import SideBar from "./Sidebar";

import "./styles.css";

import { Routes } from "../utils/routes";
import { Redirect, Route, Switch } from "react-router-dom";

export const DashboardContext = React.createContext();

export default function ({ history }) {
  const [openSidebar, setOpenSidebar] = React.useState(true);
  return (
    <div className="container">
      <DashboardContext.Provider
        value={{ openSidebar, setOpenSidebar, Routes, history }}
      >
        <Header />
        <div className="container-body">
          <SideBar />
          <div className="displayer">
            <React.Suspense fallback={"cargando..."}>
              <Switch>
                {Routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.route}
                      exact={route.exact}
                      name={route.label}
                      render={(props) => <route.component {...props} />}
                    />
                  ) : null;
                })}
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </DashboardContext.Provider>
    </div>
  );
}
