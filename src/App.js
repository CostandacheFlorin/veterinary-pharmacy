import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import ProductListing from "./pages/ProductListing/ProductListing";
import { AuthContext } from "./context/auth-context";

import Home from "./pages/Home/Home";
import MainHeader from "./components/Navigation/MainHeader/MainHeader";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Sections/Footer/Footer";
import Favorites from "./pages/Favorites/Favorites";
import SendOrder from "./pages/Order/SendOrder";
import Profile from "./pages/Profile/Profile";
import Reviews from "./pages/Reviews/MyReviews/Reviews";
import { useAuth } from "./hooks/auth-hook";

function App() {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/profil" exact>
          <Profile />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/produse" exact>
          <ProductListing />
        </Route>

        
        <Route path="/produse/:productname">
          <ProductInfo />
        </Route>

        <Route path="/recenzii" exact>
          <Reviews />
        </Route>

        <Route path="/cos" exact>
          <Cart />
        </Route>
        <Route path="/favorite" exact>
          <Favorites />
        </Route>
        <Route path="/trimite-comanda" exact>
          <SendOrder />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/produse" exact>
          <ProductListing />
        </Route>
        <Route path="/autentificare" exact>
          <Login />
        </Route>

        <Route path="/inregistrare" exact>
          <Register />
        </Route>

  
        <Route path="/produse/:productname">
          <ProductInfo />
        </Route>
        <Route path="/cos" exact>
          <Cart />
        </Route>
        <Route path="/favorite" exact>
          <Favorites />
        </Route>
        <Route path="/trimite-comanda" exact>
          <SendOrder />
        </Route>
      </Switch>
    );
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId,
          login: login,
          logout: logout,
        }}
      >
        <MainHeader />

        {routes}

        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
