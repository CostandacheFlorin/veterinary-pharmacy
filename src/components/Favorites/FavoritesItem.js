import React from "react";

import { StyledFavoritesItem,StyledFavoritesActions, StyledFavoritesItemPrice,  StyledFavoritesItemName,StyledFavoritesDescription,StyledFavoritesImage } from "./FavoriteItem.styled";
import Picture from "../UIElements/Image/Picture";
import Text from "../UIElements/Typography/Text";

const FavoritesItem = (props) => {
  return (
    <StyledFavoritesItem>
      <StyledFavoritesImage>
        <Picture image={props.image} alt={props.name} />
      </StyledFavoritesImage>
      <StyledFavoritesDescription>
        <StyledFavoritesItemName>
          <Text type="subtitle" bold="true">
            {props.productName}
          </Text>
        </StyledFavoritesItemName>

        <StyledFavoritesActions>
          <Text  bold="true" type="text" >Sterge de la favorite</Text>
        </StyledFavoritesActions>

        <StyledFavoritesItemPrice>
          <Text bold="true" type="subtitle" color="#00FF00">
            {`${props.price} lei`}
          </Text>
        </StyledFavoritesItemPrice>
      </StyledFavoritesDescription>
    </StyledFavoritesItem>
  );
};

export default FavoritesItem;
