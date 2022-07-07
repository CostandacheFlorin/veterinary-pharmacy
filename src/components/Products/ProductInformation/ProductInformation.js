import React, { useState, useEffect } from "react";

import {
  StyledProductInformation,
  StyledProductInformationImage,
  StyledProductInformationDescription,
  StyledProductInformationContent,
  StyledProductInformationName,
  StyledProductInformationPrice,
  StyledProductInformationCallToAction,
  StyledProductionInformationQuantity,
  StyledProductionInformationButtons,
} from "./ProductInformation.styled";
import { StyledIconButton } from "../../UIElements/Buttons/Button.styled";

import QuantityControl from "../../UIElements/QuantityControl/QuantityControl";
import Picture from "../../UIElements/Image/Picture";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { sendCartData } from "../../../store/cart-slice";
import { favoritesActions, sendFavoritesData } from "../../../store/favorites-slice";
import { openNotification } from "../../UIElements/Notifications/Notification";
const ProductInformation = ({ image, name, description, price }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites.items);


useEffect(() => {
    const existentItem = favorites.items.find(item => item.name === name);
    if(existentItem) {
      setIsFavorite(true);
    }
}, [favorites])


  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        name: name,
        price: price,
      })
    );
    openNotification("Ai adaugat un produs in cos", "", "success", "cart");
    dispatch(sendCartData(cart));
  };

  const addToFavoritesHandler = () => {
    dispatch(
      favoritesActions.addItemToFavorites({
        name: name,
        price: price,
      })
    );

    openNotification("Ai adaugat un produs in lista de favorite", "", "success", "favorite");


    setIsFavorite(true);
  };

  const removeFromFavoritesHandler = () => {
    dispatch(
      favoritesActions.removeItemFromFavorites(name)
    );
    openNotification("Ai eliminat un produs din lista de favorite", "", "success", "favorite");
    setIsFavorite(false);
  };

  let favoriteButton;
  if (isFavorite) {
    favoriteButton = (
      <StyledIconButton
        onClick={removeFromFavoritesHandler}
        color="#FF0000"
        fontsize="35px"
        weight="bold"
        padding="20px 30px"
      >
        {" "}
        <FavoriteIcon /> Elimina de la favorite
      </StyledIconButton>
    );
  } else {
    favoriteButton = (
      <StyledIconButton
        onClick={addToFavoritesHandler}
        color="white"
        fontsize="35px"
        weight="bold"
        padding="20px 30px"
      >
        {" "}
        <FavoriteIcon /> Adauga la favorite
      </StyledIconButton>
    );
  }

  return (
    <StyledProductInformation>
      <StyledProductInformationImage>
        <Picture image={`http://localhost:5000/${image}`} />
      </StyledProductInformationImage>
      <StyledProductInformationContent>
        <StyledProductInformationName type="title" align="center">
          {name}
        </StyledProductInformationName>

        <StyledProductInformationDescription type="text" margin="2rem">
          {description}
        </StyledProductInformationDescription>
        <StyledProductInformationPrice type="subtitle" align="right">
          {`${price} lei`}
        </StyledProductInformationPrice>
        <StyledProductInformationCallToAction>
          <StyledProductionInformationQuantity>
            <QuantityControl quantity={1} id="item-id" name="item-id" />
          </StyledProductionInformationQuantity>
          <StyledProductionInformationButtons>
            <StyledIconButton
              onClick={addToCartHandler}
              fontsize="40px"
              weight="bold"
              padding="20px 30px"
            >
              <AddShoppingCartIcon /> Adauga in cos
            </StyledIconButton>

            {favoriteButton}
          </StyledProductionInformationButtons>
        </StyledProductInformationCallToAction>
      </StyledProductInformationContent>
    </StyledProductInformation>
  );
};

export default ProductInformation;
