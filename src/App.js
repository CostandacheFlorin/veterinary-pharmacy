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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCartData,sendCartData } from "./store/cart-slice";
import { sendFavoritesData, fetchFavoritesData } from "./store/favorites-slice";
import SuccesfulOrder from "./pages/Order/SuccesfulOrder";
import OrderHistory from "./pages/Order/OrderHistory";


function App() {
  const { token, login, logout, userId } = useAuth();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFavoritesData());
  }, [dispatch]);


  useEffect( () => {

    if(cart.changed) {
      dispatch(sendCartData(cart));

    }
      
    
    
  }, [cart, dispatch])

  useEffect( () => {

    if(favorites.changed) {
      dispatch(sendFavoritesData(favorites));

    }
      
    
    
  }, [favorites, dispatch])
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
        <Route path="/success" exact>
          <SuccesfulOrder />
        </Route>
        <Route path="/istoric-comenzi" exact>
          <OrderHistory />
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
        <Route path="/success" exact>
          <SuccesfulOrder />
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
