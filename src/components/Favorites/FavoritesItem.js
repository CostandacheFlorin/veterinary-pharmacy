import React, {useState, useEffect} from "react";

import { StyledFavoritesItem,StyledFavoritesActions, StyledFavoritesItemPrice,  StyledFavoritesItemName,StyledFavoritesDescription,StyledFavoritesImage } from "./FavoriteItem.styled";
import Picture from "../UIElements/Image/Picture";
import Text from "../UIElements/Typography/Text";
import { StyledIconButton } from "../UIElements/Buttons/Button.styled";
import { Link } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';
import { useHttpClient } from "../../hooks/http-hook";
import { useDispatch } from "react-redux";
import {favoritesActions} from "../../store/favorites-slice";

const FavoritesItem = ({ name ,...props}) => {
  
  const [productImage, setProductImage] =useState("");
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchProductImage = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/products/get-product-image-by-name/${props.productName}`
        );

        setProductImage(responseData.image);
      } catch (err) {}
    }
    fetchProductImage();

  },[])

  const removeItemFromFavoritesHandler = () => {
    dispatch(favoritesActions.removeItemFromFavorites(name));
    console.log("mere");
  }
  console.log(productImage);

  return (
    <StyledFavoritesItem>
      <StyledFavoritesImage>
        <Picture image={`http://localhost:5000/${productImage}`} alt={props.productName} />
      </StyledFavoritesImage>
      <StyledFavoritesDescription>
        <StyledFavoritesItemName>
          <Link to={"/produse"}>

          <Text type="subtitle" bold="true">
            {props.productName}
          </Text>
          </Link>

        </StyledFavoritesItemName>

        <StyledFavoritesActions>
        <StyledIconButton onClick={removeItemFromFavoritesHandler}  color="#ff003b" fontsize="30px" weight="bold" padding="20px 40px" style={{width: "8.5rem"}}>
              
         <CancelIcon  /> 
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
