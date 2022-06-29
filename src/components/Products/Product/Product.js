

import Picture from "../../UIElements/Image/Picture";
import { RoundedCornersButton } from "../../UIElements/Buttons/Button.styled";
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
import { useDispatch } from "react-redux";
import { cartActions, sendCartData } from "../../../store/cart-slice";
import { useSelector } from "react-redux";
const Product = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);


  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      name: props.name,
      price: props.price,
    }));
    
    dispatch(sendCartData(cart));
  }

  return (
    <StyledProductCard>
      <StyledProductImage>
      <Picture  image={`http://localhost:5000/${props.image}`} />
      </StyledProductImage>
     

      <StyledProductInfo>
        <StyledProductTitle>{props.title}</StyledProductTitle>

        <StyledProductContent>
          <StyledProductDetails>
            <Link to={`/produse/${props.name}`}> Click pentru mai multe detalii </Link>
          </StyledProductDetails>

          <StyledProductPrice>{props.price} lei</StyledProductPrice>

          <StyledProductActions>
            <RoundedCornersButton onClick={addToCartHandler}>Adauga in cos</RoundedCornersButton>
          </StyledProductActions>
        </StyledProductContent>
      </StyledProductInfo>
    </StyledProductCard>
  );
};

export default Product;
