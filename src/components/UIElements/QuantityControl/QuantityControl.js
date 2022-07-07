import React from "react";
import {
  StyledQuantityControlWrapper,
  StyledQuantityButton,
  StyledNumberInput,
} from "./QuantityControl.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
const QuantityControl = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const dispatch = useDispatch();

  const addQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    dispatch(
      cartActions.addItemToCart({
        name: props.name,
        price: props.price,
      })
    );
  };

  const removeQuantity = () => {
    if (quantity === 0) {
      return;
    }
    dispatch(cartActions.removeItemFromCart(props.name));
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const changeQuantity = (event) => {
    setQuantity((prevQuantity) => event.target.value);
  };

  return (
    <StyledQuantityControlWrapper>
      <StyledQuantityButton
        onClick={removeQuantity}
        borderradius="11px 0px 0px 11px"
      >
        -
      </StyledQuantityButton>
      <StyledNumberInput
        type="number"
        id={props.id}
        name={props.name}
        min="0"
        max="100"
        value={quantity}
        onChange={changeQuantity}
      />
      <StyledQuantityButton
        onClick={addQuantity}
        borderradius="0px 11px  11px 0px"
      >
        +
      </StyledQuantityButton>
    </StyledQuantityControlWrapper>
  );
};

export default QuantityControl;
