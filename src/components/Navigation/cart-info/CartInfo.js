import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  StyledCartIcon,
  StyledCartNotification,
  StyledCartInfo,
} from "./CartInfo.styled";
import {StyledNavText} from '../../UIElements/Typography/NavText.styled';

import { useSelector } from "react-redux";

const CartInfo = () => {

  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  

  return (
    <StyledCartInfo to="/cos">
      
            <StyledNavText variant="h3" type="text"   align='center'  > Cos</StyledNavText>

      <StyledCartIcon>
        <ShoppingCartIcon />
        <StyledCartNotification>{cartQuantity || 0 }</StyledCartNotification>
      </StyledCartIcon>
      
    </StyledCartInfo>
  );
};

export default CartInfo;
