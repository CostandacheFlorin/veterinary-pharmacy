import React, { useEffect, useState } from "react";

import {
  StyledCartItem,
  StyledCartItemImage,
  StyledCartItemName,
  StyledCartItemPrice,
  StyledCartItemDescription,
  StyledCartQuantityControl,
} from "./CartItem.styled";
import Picture from "../../UIElements/Image/Picture";

import Text from "../../UIElements/Typography/Text";
import QuantityControl from "../../UIElements/QuantityControl/QuantityControl";
import { useHttpClient } from "../../../hooks/http-hook";
import { cartActions } from "../../../store/cart-slice";

import { useDispatch } from "react-redux";
const CartItem = (props) => {

  const [productImage, setProductImage] = useState("");

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
const dispatch = useDispatch();
  useEffect(() => {

    const fetchProductImage = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/products/get-product-image-by-name/${props.name}`
        );

        setProductImage(responseData.image);
      } catch (err) {}
    }
    fetchProductImage();

  },[])

  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeAllItemsFromCart(props.name));
    console.log("mere");
  }







  return (
    <StyledCartItem>
      <StyledCartItemImage>
        <Picture image={`http://localhost:5000/${productImage}`} alt={props.name} />
      </StyledCartItemImage>
      <StyledCartItemDescription>
        <StyledCartItemName>
          <Text type="subtitle" bold="true">
            {props.productName}
          </Text>
        </StyledCartItemName>

        <StyledCartQuantityControl>
          <QuantityControl id={props.id} name={props.name} price={props.price} quantity={props.quantity} />

          <Text type="text" hovercolor="#FF0000">
           <span  onClick={removeItemFromCartHandler}> Elimina din cos  </span> 
          </Text>
        </StyledCartQuantityControl>

        <StyledCartItemPrice>
          <Text bold="true" type="subtitle">
            {`${props.price} lei`}
          </Text>
        </StyledCartItemPrice>
      </StyledCartItemDescription>
    </StyledCartItem>
  );
};

export default CartItem;
