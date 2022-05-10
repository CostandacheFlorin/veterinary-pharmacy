import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  StyledCartIcon,
  StyledCartNotification,
  StyledCartInfo,
} from "./CartInfo.styled";
import {StyledNavText} from '../../UIElements/Typography/NavText.styled';


const CartInfo = () => {
  return (
    <StyledCartInfo to="/cos">
      
            <StyledNavText variant="h3" type="text"   align='center'  > Cos</StyledNavText>

      <StyledCartIcon>
        <ShoppingCartIcon />
        <StyledCartNotification>6</StyledCartNotification>
      </StyledCartIcon>
      
    </StyledCartInfo>
  );
};

export default CartInfo;
