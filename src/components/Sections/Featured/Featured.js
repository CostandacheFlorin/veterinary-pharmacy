

import "swiper/css/bundle";
import SliderPerView from "../../UIElements/Sliders/SliderPerView/SlidePerView";
import Text from '../../UIElements/Typography/Text';
import Autoplay from "../../UIElements/Sliders/Autoplay/Autoplay";


import picture1 from '../../../img/medicament1.jpg';
import picture2 from '../../../img/medicament2.jpg';
import picture3 from '../../../img/medicament3.jpg';
import picture4 from '../../../img/medicament4.jpg';
import picture5 from '../../../img/medicament5.jpg';
import picture6 from '../../../img/medicament6.jpg';
import picture7 from '../../../img/medicament7.jpg';
import picture8 from '../../../img/medicament8.jpg';
import picture9 from '../../../img/medicament9.jpg';
import { FeaturedSection } from "./FeaturedSection.styled";




const DUMMY_IMAGES = [
  {
    id: "test1",
    picture: picture1
  },
  {
    id: "test2",
    picture: picture2
  },
  {
    id: "test3",
    picture: picture3
  },
  {
    id: "test4",
    picture: picture4
  },
  {
    id: "test5",
    picture: picture5
  },
  {
    id: "test6",
    picture: picture6
  },
  {
    id: "test7",
    picture: picture7
  },
  {
    id: "test8",
    picture: picture8
  },
  {
    id: "test9",
    picture: picture9
  }
  
]




const Featured = () => {


  return (
    <FeaturedSection>
        <Text variant="h3" type="title" margin='5rem'  align='center'  > Cele mai cumparate produse</Text>
      <SliderPerView images={DUMMY_IMAGES} />

      <Text variant="h3" type="title" margin='5rem'  align='center'  > Produse noi adaugate </Text>
      <Autoplay images={DUMMY_IMAGES} />



    </FeaturedSection>
  );
};

export default Featured;
