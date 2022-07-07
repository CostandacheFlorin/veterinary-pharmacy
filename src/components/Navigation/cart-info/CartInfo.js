import React, {useState, useEffect} from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  StyledCartIcon,
  StyledCartNotification,
  StyledCartInfo,
} from "./CartInfo.styled";
import {StyledNavText} from '../../UIElements/Typography/NavText.styled';

import { useSelector } from "react-redux";

const CartInfo = () => {

  const [cartQuantity, setCartQuantity] = useState(0);
  
  const quantity = useSelector(state => state.cart.totalQuantity);

  useEffect(() => {
    setCartQuantity(quantity);

  },[quantity]);
 

  return (
    <StyledCartInfo to="/cos">
      
            <StyledNavText variant="h3" type="text"   align='center'  > Cos</StyledNavText>

      <StyledCartIcon>
        <ShoppingCartIcon />
        <StyledCartNotification>{cartQuantity || 0 }</StyledCartNotification>
      </StyledCartIcon>
      
    </StyledCartInfo>
  );
};

export default CartInfo;
