import React from 'react';

import Dog1 from "../../../img/Description/dog1.jpg";
import Bird2 from "../../../img/Description/dog2.jpg";
import Cat2 from "../../../img/Description/cat-2.jpg";
import Rabbit1 from "../../../img/Description/rabbit-1.jpg";
import Hamster1 from "../../../img/Description/hamster-1.jpg";
import Horse from "../../../img/Description/horse.jpg";
import Bird3 from "../../../img/Description/bird-3.jpg";
import Cat1 from "../../../img/Description/cat1.jpg";
import Picture from "../../UIElements/Image/Picture";

import { DescriptionMedia,   StyledDescriptionFigure1,
    StyledDescriptionFigure2,
    StyledDescriptionFigure3,
    StyledDescriptionFigure4,
    StyledDescriptionFigure5,
    StyledDescriptionFigure6,
    StyledDescriptionFigure7,
    StyledDescriptionFigure8} from "./LargeGallery.styled";

const LargeGallery = () => {
    return (
        <DescriptionMedia>
        <StyledDescriptionFigure1>
          <Picture image={Dog1} alt="Gallery 1" />
        </StyledDescriptionFigure1>
    
        <StyledDescriptionFigure2>
          <Picture image={Bird2} alt="Gallery 2" />
        </StyledDescriptionFigure2>
    
        <StyledDescriptionFigure3>
          <Picture image={Cat2} alt="Gallery 3" />
        </StyledDescriptionFigure3>
    
        <StyledDescriptionFigure4>
          <Picture image={Rabbit1} alt="Gallery 4" />
        </StyledDescriptionFigure4>
        <StyledDescriptionFigure5>
          <Picture image={Hamster1} alt="Gallery 5" />
        </StyledDescriptionFigure5>
    
        <StyledDescriptionFigure6>
          <Picture image={Horse} alt="Gallery 6" />
        </StyledDescriptionFigure6>
    
        <StyledDescriptionFigure7>
          <Picture image={Cat1} alt="Gallery 7" />
        </StyledDescriptionFigure7>
    
        <StyledDescriptionFigure8>
          <Picture image={Bird3} alt="Gallery 8" />
        </StyledDescriptionFigure8>
      </DescriptionMedia>
     )
    
}


export default LargeGallery;