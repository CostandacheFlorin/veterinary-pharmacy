import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  StyledCartIcon,
  StyledCartNotification,
  StyledCartInfo,
} from "./CartInfo.styled";

const CartInfo = () => {
  return (
    <StyledCartInfo>
      Cos
      <StyledCartIcon>
        <ShoppingCartIcon />
        <StyledCartNotification>6</StyledCartNotification>
      </StyledCartIcon>
    </StyledCartInfo>
  );
};

export default CartInfo;
