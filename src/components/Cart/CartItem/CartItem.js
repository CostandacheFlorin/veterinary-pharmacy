import React from "react";

import {
  StyledCartItem,
  StyledCartItemImage,
  StyledCartItemName,
  StyledCartItemPrice,
  StyledCartItemDescription,
  StyledCartQuantityControl
} from "./CartItem.styled";
import Picture from "../../UIElements/Image/Picture";

import Text from "../../UIElements/Typography/Text";
import QuantityControl from "../../UIElements/QuantityControl/QuantityControl";

const CartItem = (props) => {
  return (
    <StyledCartItem>
      <StyledCartItemImage>
        <Picture image={props.image} alt={props.name} />
      </StyledCartItemImage>
<StyledCartItemDescription>
      <StyledCartItemName>
        <Text type="subtitle" bold="true" >
          {props.productName}
        </Text>
      </StyledCartItemName>

      <StyledCartQuantityControl>
      <QuantityControl id={props.id} name={props.name} />
      
      <Text type="text" hovercolor="#FF0000"  >
      Elimina din cos
        </Text>
        </StyledCartQuantityControl>

    <StyledCartItemPrice>
    <Text bold="true" type="subtitle" >
        {`${props.price} lei`} 
      </Text>
    </StyledCartItemPrice>
    </StyledCartItemDescription>
    </StyledCartItem>
  );
};

export default CartItem;
