import React, { useEffect } from "react";
import { StyledCartWrapper } from "./FilledCart.styled";
import CartItem from "../CartItem/CartItem";
import CartSubmit from "../CartSubmit/CartSubmit";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "../EmptyCart/EmptyCart";
import { sendCartData } from "../../../store/cart-slice";
const FilledCart = () => {
  const cart = useSelector((state) => state.cart);
  const cartTotal = cart.totalPrice;
  const cartItems = cart.items;
  const dispatch = useDispatch();
  console.log(cartItems);



  useEffect( () => {

    
      dispatch(sendCartData(cart));
    
    
  }, [cart, dispatch])



  if(cartItems.length === 0){
    return <EmptyCart/>;
  }


  return (
    <StyledCartWrapper>
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.name}
            name={item.name}
            id={item.name}
            price={item.price}
            productName={item.name}
            quantity={item.quantity}
          ></CartItem>
        );
      })}

      <CartSubmit total={cartTotal || 0} />
    </StyledCartWrapper>
  );
};

export default FilledCart;
