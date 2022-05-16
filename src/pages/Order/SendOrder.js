import React from "react";

import Text from "../../components/UIElements/Typography/Text";
import OrderBillingDetails from "../../components/Order/OrderBillingDetails/OrderBillingDetails";
import OrderSummary from "../../components/Order/OrderSummary/OrderSummary";
import OrderPaymentMethod from "../../components/Order/OrderPaymentMethod/OrderPaymentMethod";
import {
  StyledOrderHeader,
  StyledOrderLayout,

} from "./SendOrder.styled";

const SendOrder = () => {
  return (
    <>
      <StyledOrderHeader>
        <Text bold="true" type="title" size="small" align="center">
          Sunteti la un pas distanta de a trimite comanda!
        </Text>
      </StyledOrderHeader>
      <StyledOrderLayout>
      <OrderBillingDetails/>
      <OrderSummary/>
       <OrderPaymentMethod/>
      </StyledOrderLayout>
    </>
  );
};

export default SendOrder;
