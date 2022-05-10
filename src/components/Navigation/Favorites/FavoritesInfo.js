import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import {
  StyledFavoritesIcon,
  StyledFavoritesNotification,
  StyledFavoritesInfo,
} from "./FavoritesInfo.styled";

const FavoritesInfo = () => {
  return (
    <StyledFavoritesInfo to="/favorite">
      <StyledNavText variant="h3" type="text"   align='center'  > Favorite</StyledNavText>
      <StyledFavoritesIcon>
        <FavoriteIcon />
        <StyledFavoritesNotification>6</StyledFavoritesNotification>
      </StyledFavoritesIcon>
    </StyledFavoritesInfo>
  );
};

export default FavoritesInfo;
