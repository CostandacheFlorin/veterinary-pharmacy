import React from "react";

import {
  StyledSubmitOrder,
  StyledOrderCartItems,
  StyledTotalPrice,
  StyledOrderSummaryHeader, }
  from './OrderSummary.styled';

import Text from "../../UIElements/Typography/Text";
import OrderItem from "../OrderItem/OrderItem";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


const OrderSummary = () => {
  return (
    <StyledSubmitOrder>
        <StyledOrderSummaryHeader>
            <ShoppingCartCheckoutIcon/>
        <Text type="subtitle" bold="true" align="center" margin="1rem 0">
        Produsele din cart
      </Text>
        </StyledOrderSummaryHeader>
      
      <StyledOrderCartItems>
        <Text type="text" bold="true" align="center">
          Produs
        </Text>
        <Text type="text" bold="true" align="center">
          Pret
        </Text>
        <OrderItem name="algocalmin" quantity="3" price={5} />
        <OrderItem name="paracetamol" quantity="6" price={66.5} />
      </StyledOrderCartItems>
      <StyledTotalPrice>
        <Text type="text" align="center" bold="true">
          Total plata
        </Text>
        <Text type="text" align="center" color="#00FF00" bold="true">
          7733 lei
        </Text>
      </StyledTotalPrice>
    </StyledSubmitOrder>
  );
};

export default OrderSummary;
