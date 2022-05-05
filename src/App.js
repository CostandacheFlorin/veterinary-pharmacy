import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import ProductListing from "./pages/ProductListing/ProductListing";

import Home from "./pages/Home/Home";
import MainHeader from "./components/Navigation/MainHeader/MainHeader";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";



function App() {
  return (
    <>
      <MainHeader />

      <Route path="/" exact>
        <Home />
      </Route>

      <Switch>
        <Route path="/produse" exact>
          <ProductListing />
        </Route>
        <Route path="/autentificare" exact>
          <Login />
        </Route>

        <Route path="/inregistrare" exact>
          <Register />
        </Route>

        <Redirect to="/" />




      </Switch>
    </>
  );
}

export default App;
