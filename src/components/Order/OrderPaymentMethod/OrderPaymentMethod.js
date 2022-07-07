import React from "react";
import Text from "../../UIElements/Typography/Text";
import StyledRadioButton from "../../UIElements/RadioButtons/StyledRadioButton";

import { StyledPaymentMethod, StyledPaymentHeader, StyledPaymentOptions } from "./OrderPaymentMethod.styled";
import { StyledMediumButton } from "../../UIElements/Buttons/Button.styled";
import AddCardIcon from '@mui/icons-material/AddCard';
const OrderPaymentMethod = () => {

  const sendOrderHandler = () => {
    console.log("am trimis");
  }
  return (
    <StyledPaymentMethod>
      <StyledPaymentHeader>
          <AddCardIcon />

        <Text type="subtitle" bold="true" align="center">
          Alegeti modalitatea de plata
        </Text>
      </StyledPaymentHeader>
      <StyledPaymentOptions>
      <StyledRadioButton
        id="creditcard"
        value="creditcard"
        name="payment-method"
        title="Card de credit"
      />
      <StyledRadioButton
        id="ramburs"
        value="ondelivery"
        name="payment-method"
        title="Plata la livrare"
      />
      <StyledMediumButton onClick={sendOrderHandler}>Trimite comanda</StyledMediumButton>
      </StyledPaymentOptions>

      

      
    </StyledPaymentMethod>
  );
};

export default OrderPaymentMethod;
