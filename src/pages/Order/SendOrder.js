import React, {useState} from "react";

import Text from "../../components/UIElements/Typography/Text";
import OrderBillingDetails from "../../components/Order/OrderBillingDetails/OrderBillingDetails";
import OrderSummary from "../../components/Order/OrderSummary/OrderSummary";
import OrderPaymentMethod from "../../components/Order/OrderPaymentMethod/OrderPaymentMethod";
import {
  StyledOrderHeader,
  StyledOrderLayout,

} from "./SendOrder.styled";
import { useSelector } from "react-redux";

const SendOrder = () => {
  const [details, setDetails] = useState("");

  const cart = useSelector((state) => state.cart);
  




  return (
    <>
      <StyledOrderHeader>
        <Text bold="true" type="title" size="small" align="center">
          Sunteti la un pas distanta de a trimite comanda!
        </Text>
      </StyledOrderHeader>
      <StyledOrderLayout>
      <OrderBillingDetails setDetails={setDetails}/>
      <OrderSummary details={details} items={cart.items} total={cart.totalPrice}/>
       {/* <OrderPaymentMethod/> */}
      </StyledOrderLayout>
    </>
  );
};

export default SendOrder;
