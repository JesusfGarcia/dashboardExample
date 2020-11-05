import logo from "./logo.svg";
import "./App.css";

import Dashboard from "./Container";
import Login from "./Pages/Login";

import { Route, Switch, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route
          path="/admin"
          name="Dashboard"
          render={(props) => <Dashboard {...props} />}
        />
        <Route
          path="/"
          name="Login"
          exact
          render={(props) => <Login {...props} />}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
