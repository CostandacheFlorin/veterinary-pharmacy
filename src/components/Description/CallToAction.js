import React from "react";

import { Link } from "react-router-dom";
import Text from "../UIElements/Typography/Text";
import { StyledButtonMaxWidthMobile } from "../UIElements/Buttons/Button.styled";
import {
  DescriptionCallToAction,
  DescriptionCTAText,
  DescriptionCTAHeader1,
  DescriptionCTAHeader3 }
  from './CallToActions.styled';


const CallToAction = () => {
  return (
    <DescriptionCallToAction>
      <DescriptionCTAText>
        <DescriptionCTAHeader1>
          <Text variant="h1" type="title" size={"large"} align="center">
            Locul potrivit pentru animalul tau
          </Text>
        </DescriptionCTAHeader1>

        <DescriptionCTAHeader3>
          <Text variant="h3" type="text" align="center">
            Aici vei gasi o gama variata de medicamente si produse destinate
            animalului tau.
          </Text>
        </DescriptionCTAHeader3>
      </DescriptionCTAText>

      <Link to="/produse/">
        <StyledButtonMaxWidthMobile>Spre produse</StyledButtonMaxWidthMobile>
      </Link>
    </DescriptionCallToAction>
  );
};

export default CallToAction;
