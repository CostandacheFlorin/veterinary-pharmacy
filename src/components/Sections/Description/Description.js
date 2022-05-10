import React from "react";

import {
  DescriptionSection,
} from "./Description.styled";

import CallToAction from "../../Description/CallToAction";
import LargeGallery from "../../Galleries/LargeGallery/LargeGallery";
import SmallGallery from "../../Galleries/SmallGallery/SmallGallery";

const Description = () => {
  return (
    <DescriptionSection>
        <CallToAction/>
        <LargeGallery/>
        <SmallGallery/>
     
    </DescriptionSection>
  );
};

export default Description;
