import "./App.css";

import Dashboard from "./Container";
import Login from "./Pages/Login";

import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/admin"
          name="Dashboard"
          render={(props) => <Dashboard {...props} />}
        />
        <Route
          path="/"
          name="Login"
          exact={true}
          render={(props) => <Login {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
