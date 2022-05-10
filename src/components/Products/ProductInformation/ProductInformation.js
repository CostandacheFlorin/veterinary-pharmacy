import React from "react";

import {
  StyledProductInformation,
  StyledProductInformationImage,
  StyledProductInformationDescription,
  StyledProductInformationContent,
  StyledProductInformationName,
  StyledProductInformationPrice,
  StyledProductInformationCallToAction,
  StyledProductionInformationQuantity,
  StyledProductionInformationButtons,
} from "./ProductInformation.styled";
import {  StyledIconButton } from "../../UIElements/Buttons/Button.styled";

import QuantityControl from "../../UIElements/QuantityControl/QuantityControl";
import Picture from "../../UIElements/Image/Picture";
import PozaProdus from "../../../img/medicament4.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from '@mui/icons-material/Favorite';
const ProductInformation = (props) => {
  return (
    <StyledProductInformation>
      <StyledProductInformationImage>
        <Picture image={PozaProdus} />
      </StyledProductInformationImage>
      <StyledProductInformationContent>
        <StyledProductInformationName type="title" align="center">
          {" "}
          Denumire produs
        </StyledProductInformationName>

        <StyledProductInformationDescription type="text" margin="2rem">
          Aceasta este descrierea produsului pe care am intrat si nu stiu o sa
          ma ibag ceva text lung sa fie acolo sa arate cat de cat zic nu
        </StyledProductInformationDescription>
        <StyledProductInformationPrice type="subtitle" align="right">
          33.3 lei
        </StyledProductInformationPrice>
        <StyledProductInformationCallToAction>
          <StyledProductionInformationQuantity>
            <QuantityControl id="item-id" name="item-id" />
          </StyledProductionInformationQuantity>
          <StyledProductionInformationButtons>
            

            <StyledIconButton fontsize="40px" weight="bold" padding="20px 30px">
              
              <AddShoppingCartIcon /> Adauga in cos
            </StyledIconButton>

            <StyledIconButton color="#FF0000" fontsize="35px" weight="bold" padding="20px 30px">
              
              <FavoriteIcon /> Adauga la favorite
            </StyledIconButton>
          </StyledProductionInformationButtons>
        </StyledProductInformationCallToAction>
      </StyledProductInformationContent>
    </StyledProductInformation>
  );
};

export default ProductInformation;
