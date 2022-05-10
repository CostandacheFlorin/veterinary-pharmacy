import React from 'react';

import FavoritesItem from '../../components/Favorites/FavoritesItem';
import { StyledFavoritesWrapper } from './Favorites.styled';
import Item1 from '../../img/medicament4.jpg';
import Text from '../../components/UIElements/Typography/Text';
const Favorites = () => {
return (
    <StyledFavoritesWrapper>
        <Text type="title" align="center" margin="3rem">Produsele favorite</Text>
    <FavoritesItem  productName="Pastile pentru un caine bolnav 100g" price={80}></FavoritesItem>
    <FavoritesItem  productName="Pastile pentru un caine bolnav 100g" price={80}></FavoritesItem>
    <FavoritesItem  productName="Pastile pentru un caine bolnav 100g" price={80}></FavoritesItem>
    <FavoritesItem  productName="Pastile pentru un caine bolnav 100g" price={80}></FavoritesItem>
    <FavoritesItem  productName="Pastile pentru un caine bolnav 100g" price={80}></FavoritesItem>


    </StyledFavoritesWrapper>


) 

}


export default Favorites;