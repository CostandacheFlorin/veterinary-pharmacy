import React, {useState, useEffect} from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import {
  StyledFavoritesIcon,
  StyledFavoritesNotification,
  StyledFavoritesInfo,
} from "./FavoritesInfo.styled";
import { useSelector } from "react-redux";

const FavoritesInfo = () => {
  const [favoritesQuantity, setFavoritesQuantity] = useState(0);
  
  const quantity = useSelector(state => state.favorites.items.length);

  useEffect(() => {
    setFavoritesQuantity(quantity);

  },[quantity]);
  return (
    <StyledFavoritesInfo to="/favorite">
      <StyledNavText variant="h3" type="text"   align='center'  > Favorite</StyledNavText>
      <StyledFavoritesIcon>
        <FavoriteIcon />
        <StyledFavoritesNotification>{favoritesQuantity || 0}</StyledFavoritesNotification>
      </StyledFavoritesIcon>
    </StyledFavoritesInfo>
  );
};

export default FavoritesInfo;
