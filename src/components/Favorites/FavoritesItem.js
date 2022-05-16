import React from "react";

import { StyledFavoritesItem,StyledFavoritesActions, StyledFavoritesItemPrice,  StyledFavoritesItemName,StyledFavoritesDescription,StyledFavoritesImage } from "./FavoriteItem.styled";
import Picture from "../UIElements/Image/Picture";
import Text from "../UIElements/Typography/Text";
import { StyledIconButton } from "../UIElements/Buttons/Button.styled";
import { Link } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';

const FavoritesItem = (props) => {
  return (
    <StyledFavoritesItem>
      <StyledFavoritesImage>
        <Picture image={props.image} alt={props.name} />
      </StyledFavoritesImage>
      <StyledFavoritesDescription>
        <StyledFavoritesItemName>
          <Link to={props.productName}>

          <Text type="subtitle" bold="true">
            {props.productName}
          </Text>
          </Link>

        </StyledFavoritesItemName>

        <StyledFavoritesActions>
        <StyledIconButton color="#FF0000" fontsize="30px" weight="bold" padding="20px 40px" style={{width: "8.5rem"}}>
              
         <CancelIcon /> 
            </StyledIconButton>
        </StyledFavoritesActions>

        <StyledFavoritesItemPrice>
          <Text bold="true" type="subtitle" color="#000">
            {`${props.price} lei`}
          </Text>
        </StyledFavoritesItemPrice>
      </StyledFavoritesDescription>
    </StyledFavoritesItem>
  );
};

export default FavoritesItem;
