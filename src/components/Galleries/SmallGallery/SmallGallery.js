import React from "react";

import MobileCat from "../../../img/Description/catResponsive1.jpg";
import MobileDog from "../../../img/Description/dogResponsive1.jpg";
import MobileBird from "../../../img/Description/birdResponsive1.jpg";
import Picture from "../../UIElements/Image/Picture";
import {  DescriptionMediaMobile,

    StyledDescriptionMobileFigure1,
    StyledDescriptionMobileFigure2,
    StyledDescriptionMobileFigure3} from "./SmallGallery.styled";



const SmallGallery = () => {
 return (
    <DescriptionMediaMobile>
    <StyledDescriptionMobileFigure1>
      <Picture image={MobileCat} alt="Gallery 9" />
    </StyledDescriptionMobileFigure1>

    <StyledDescriptionMobileFigure2>
      <Picture image={MobileDog} alt="Gallery 10" />
    </StyledDescriptionMobileFigure2>

    <StyledDescriptionMobileFigure3>
      <Picture image={MobileBird} alt="Gallery 11" />
    </StyledDescriptionMobileFigure3>
  </DescriptionMediaMobile>
 )
}


export default SmallGallery;