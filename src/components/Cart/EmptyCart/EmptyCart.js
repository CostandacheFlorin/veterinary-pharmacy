import React from "react";


import { StyledEmptyCartWrapper } from "./EmptyCart.styled";
import Text from "../../UIElements/Typography/Text";
import { StyledIconButton } from "../../UIElements/Buttons/Button.styled";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <StyledEmptyCartWrapper>
      <Text align="center" bold="true" type="subtitle">
        Cosul tau de cumparaturi este gol!{" "}
      </Text>
      <Text align="center" bold="true" type="text" margin="1rem">
        Poti adauga produse in cos folosind pagina de produse sau pe pagina
        respectiva a unui produs.{" "}
      </Text>
      <Link to="/produse">
      <StyledIconButton style={{borderRadius:"30px"}} fontsize="40px" weight="bold" padding="25px 90px">
        <ArrowCircleLeftOutlinedIcon /> Spre lista de produse
      </StyledIconButton>
      </Link>
    </StyledEmptyCartWrapper>
  );
};

export default EmptyCart;
