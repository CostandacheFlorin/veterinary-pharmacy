import "./Product.css";
import Image from "../../UIElements/Image/Image";
import {
  StyledProductImage,
  StyledProductCard,
  StyledProductInfo,
  StyledProductActions,
  StyledProductPrice,
  StyledProductDetails,
  StyledProductTitle,
  StyledProductContent
} from "./Product.styled";
import { Link } from "react-router-dom";
const Product = (props) => {
  return (
    <StyledProductCard>
      <Image classname={"product-image"} image={props.image} />

      <StyledProductInfo>
        <StyledProductTitle>{props.title}</StyledProductTitle>

        <StyledProductContent>
          <StyledProductDetails>
            <Link to="/produse/"> Click pentru mai multe detalii </Link>
          </StyledProductDetails>

          <StyledProductPrice>{props.price} lei</StyledProductPrice>

          <StyledProductActions>
            <button>Adauga in cos</button>
          </StyledProductActions>
        </StyledProductContent>
      </StyledProductInfo>
    </StyledProductCard>
  );
};

export default Product;
