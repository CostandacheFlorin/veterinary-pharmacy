import { createSlice, current } from "@reduxjs/toolkit";
import FavoritesInfo from "../components/Navigation/Favorites/FavoritesInfo";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    replaceFavorites(state, action) {
      state.items = action.payload.items;
    },
    addItemToFavorites(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );
      state.changed = true;
      if (existingItem) {
        console.log("e deja la favorite");
      } else {
        state.items.push({
          name: newItem.name,
          price: newItem.price,
        });
      }
    },
    removeItemFromFavorites(state, action) {
      const name = action.payload;

      const existingItem = state.items.find((item) => item.name === name);
      state.changed = true;
      if (existingItem) {
        state.items = state.items.filter((item) => item.name !== name);
      }
      
    },
  },
});

export const sendFavoritesData = (favoriteData) => {
  let userId;
  if (localStorage.getItem("userData") !== null) {
    userId = JSON.parse(localStorage.getItem("userData")).userId;
  }
  const favoritesInfo = {
    userId: userId,
    items: favoriteData.items,
  };
  console.log(favoritesInfo);

  return async (dispatch) => {
    const sendRequest = async () => {
      await fetch("http://localhost:5000/api/management/add-favorites", {
        method: "POST",
        body: JSON.stringify(favoritesInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
    };

    if (userId) {
      try {
        await sendRequest();
      } catch (err) {
        console.log(err);
      }
    } else {
      localStorage.setItem(
        "favoritesInfo",
        JSON.stringify({
          items: favoritesInfo.items,
        })
      );
    }
  };
};

export const fetchFavoritesData = () => {
  let userId;
  if (localStorage.getItem("userData") !== null) {
    userId = JSON.parse(localStorage.getItem("userData")).userId;
  }

  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `http://localhost:5000/api/management/get-favorites/${userId}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch favorite list data!");
      }

      const data = await response.json();
      return data.favorites;
    };

    if (userId) {
      try {
        const cartData = await sendRequest();
        dispatch(favoritesSlice.actions.replaceFavorites({
          items: cartData.products || [],
          
        }));
      } catch (err) {
        console.log(err);
      }
    } else {
      const favoritesData = localStorage.getItem("favoritesInfo");
      const favoritesJSON = JSON.parse(favoritesData);
      dispatch(favoritesSlice.actions.replaceFavorites({
        items: favoritesJSON.items || [],
        
      }))
    }
  };
};



export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice;
