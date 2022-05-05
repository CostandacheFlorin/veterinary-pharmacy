
import Logo from "../logo/Logo";
import UserInfo from "../user-info/UserInfo";
import CartInfo from "../cart-info/CartInfo";
import SearchBar from "../../UIElements/SearchBar/SearchBar";
import { StyledNav, StyledSearchbar } from "./MainNavigation.styled";

const MainNavigation = (props) => {
  return (
    <StyledNav>
      <Logo />

      <StyledSearchbar>
        <SearchBar placeholder="Cautare.." />
      </StyledSearchbar>

      <UserInfo />
      <CartInfo />
    </StyledNav>
  );
};

export default MainNavigation;