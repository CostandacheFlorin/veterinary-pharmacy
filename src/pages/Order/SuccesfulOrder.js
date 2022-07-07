import React from "react";
import Text from "../../components/UIElements/Typography/Text";
import { StyledSuccesfulOrderWrapper } from "./SuccesfulOrder.styled";

const SuccesfulOrder = () => {
  return (
    <StyledSuccesfulOrderWrapper>
      <Text type="title" color="lightblue">
        Ai trimis cu succes comanda
      </Text>
    </StyledSuccesfulOrderWrapper>
  );
};

export default SuccesfulOrder;
