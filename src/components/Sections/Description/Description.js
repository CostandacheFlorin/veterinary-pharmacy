
import './Description.css';

import { Link } from 'react-router-dom';
import Text from '../../UIElements/Typography/Text';
import Dog1 from '../../../img/Description/dog1.jpg';

import Bird2 from '../../../img/Description/dog2.jpg'
import Cat2 from  '../../../img/Description/cat-2.jpg';
import Rabbit1 from '../../../img/Description/rabbit-1.jpg';
import Hamster1 from '../../../img/Description/hamster-1.jpg';
import Horse from '../../../img/Description/horse.jpg';
import Bird3 from '../../../img/Description/bird-3.jpg';
import Cat1 from '../../../img/Description/cat1.jpg';
import MobileCat from '../../../img/Description/catResponsive1.jpg';
import MobileDog from '../../../img/Description/dogResponsive1.jpg';
import MobileBird from '../../../img/Description/birdResponsive1.jpg';
import { DescriptionCallToAction, DescriptionCTAText, DescriptionCTAHeader1, DescriptionCTAHeader3, DescriptionSection, DescriptionMedia, DescriptionMediaMobile } from './Description.styled';
import {   StyledButtonMaxWidthMobile } from '../../UIElements/Buttons/Button.styled';

const Description = () => {
    return <DescriptionSection>
        
            <DescriptionCallToAction >

            <DescriptionCTAText>
                <DescriptionCTAHeader1>
                <Text variant="h1" type="title" size={"large"}   align='center'  > Locul potrivit pentru animalul tau</Text>
                </DescriptionCTAHeader1>
                
               
                <DescriptionCTAHeader3>
                <Text variant="h3" type="text"   align='center'  > Aici vei gasi o gama variata de medicamente si produse destinate  animalului tau.</Text>
                </DescriptionCTAHeader3>
                </DescriptionCTAText>

                <Link to='/produse/' ><StyledButtonMaxWidthMobile>Spre produse</StyledButtonMaxWidthMobile></Link>
            </DescriptionCallToAction>
            <DescriptionMedia>
                <figure className='description-media-gallery description-media-gallery__1'>
                <img  src={Dog1} alt="Gallery 1" className='gallery-image'/>
                </figure>

                
                <figure className='description-media-gallery description-media-gallery__2'>
                <img  src={Bird2} alt="Gallery 2" className='gallery-image'/>
                </figure>

                <figure className='description-media-gallery description-media-gallery__3'>
                <img  src={Cat2} alt="Gallery 3" className='gallery-image'/>
                </figure>

                <figure className='description-media-gallery description-media-gallery__4'>
                <img  src={Rabbit1} alt="Gallery 4" className='gallery-image'/>
                </figure>
                <figure className='description-media-gallery description-media-gallery__5'>
                <img  src={Hamster1} alt="Gallery 5" className='gallery-image'/>
                </figure>

                <figure className='description-media-gallery description-media-gallery__6'>
                <img  src={Horse} alt="Gallery 6" className='gallery-image'/>
                </figure>

                <figure className='description-media-gallery description-media-gallery__7'>
                <img  src={Cat1} alt="Gallery 7" className='gallery-image'/>
                </figure>

                <figure className='description-media-gallery description-media-gallery__8'>
                <img  src={Bird3} alt="Gallery 8" className='gallery-image'/>
                </figure>

                

            </DescriptionMedia>

            <DescriptionMediaMobile>
            <figure className='gallery-image-mobile__1 gallery-image-mobile'>
            <img  src={MobileCat} alt="Gallery 9" className='gallery-image-mobile'/>
                </figure>

                <figure className='gallery-image-mobile__2 gallery-image-mobile'>
                <img  src={MobileDog} alt="Gallery 10" className='gallery-image-mobile'/>
                </figure>

                <figure className='gallery-image-mobile__3 gallery-image-mobile'>
                <img  src={MobileBird} alt="Gallery 11" className='gallery-image-mobile'/>
                </figure>
          
       
      

            </DescriptionMediaMobile>

         
    </DescriptionSection>
}


export default Description;