import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );
      state.totalQuantity++;
      state.totalPrice = state.totalPrice + newItem.price;
      if (!existingItem) {
        state.items.push({
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const name = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.name !== name);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    removeAllItemsFromCart(state, action) {
      const name = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.totalPrice =
        state.totalPrice - existingItem.quantity * existingItem.price;
      state.items = state.items.filter((item) => item.name !== name);
    },
  },
});

export const sendCartData = (cartData) => {

    let userId;
    if (localStorage.getItem("userData") !== null){
     userId = JSON.parse(localStorage.getItem("userData")).userId;
    } 

  const cartInfo = {
    userID: userId,
    items: cartData.items,
    totalQuantity: cartData.totalQuantity,
    totalPrice: cartData.totalPrice,
  };

  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "http://localhost:5000/api/management/add-cart",
        {
          method: "POST",
          body: JSON.stringify(cartInfo),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

    };

    if(userId) {
        try {
            await sendRequest();
          } catch (err) {
            console.log(err);
          }
    } else {
        localStorage.setItem("cartInfo", JSON.stringify( {
            items: cartInfo.items,
            totalQuantity: cartInfo.totalQuantity,
            totalPrice: cartInfo.totalPrice
        }))
    }
   
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
