import "./App.css";

import Dashboard from "./Container";

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
