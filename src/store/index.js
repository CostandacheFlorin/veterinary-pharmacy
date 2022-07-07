import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import favoritesSlice from "./favorites-slice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favorites: favoritesSlice.reducer
  },
});



export default store
