import React, { useContext } from "react";
import { AuthContext } from "../../../context/auth-context";
import Logo from "../logo/Logo";
import UserInfo from "../user-info/UserInfo";
import CartInfo from "../cart-info/CartInfo";
import SearchBar from "../../UIElements/SearchBar/SearchBar";
import {
  StyledNav,
  StyledSearchbar,
  StyledLogoArea,
  StyledActionsArea,
  StyledSearchbarArea
} from "./MainNavigation.styled";
import FavoritesInfo from "../Favorites/FavoritesInfo";
import LogoutButton from "../LogoutButton/LogoutButton";

const MainNavigation = (props) => {
  const auth = useContext(AuthContext);
  return (
    <StyledNav>
      <StyledLogoArea>
        <Logo />
      </StyledLogoArea>


<StyledSearchbarArea>
{auth.isLoggedIn && (
          <StyledSearchbar>
            <SearchBar placeholder="Cautare.." />
          </StyledSearchbar>
        )}
</StyledSearchbarArea>
      <StyledActionsArea>
      
        <UserInfo />
        <FavoritesInfo />
        <CartInfo />
        {auth.isLoggedIn && <LogoutButton />}
      </StyledActionsArea>
    </StyledNav>
  );
};

export default MainNavigation;
