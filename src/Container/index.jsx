import * as React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

import "./styles.css";

import { routes } from "../utils/routes";
import { Route, Switch } from "react-router-dom";

export const DashboardContext = React.createContext();

export default function ({ history }) {
  return (
    <div className="container">
      <DashboardContext.Provider value={{ hola: 4 }}>
        <Header />
        <div className="container-body">
          <Sidebar />
          <div className="main">
            <React.Suspense fallback={"cargando..."}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
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
