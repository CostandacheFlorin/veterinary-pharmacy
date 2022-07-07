import React from 'react';

import FavoritesItem from '../../components/Favorites/FavoritesItem';
import { StyledFavoritesWrapper } from './Favorites.styled';
import Item1 from '../../img/medicament4.jpg';
import Text from '../../components/UIElements/Typography/Text';
import { useSelector } from 'react-redux';
const Favorites = () => {

    const favorites = useSelector((state) => state.favorites);

    console.log(favorites);


return (
    <StyledFavoritesWrapper>
        <Text type="title" align="center" margin="3rem">Produsele favorite</Text>
    {favorites.items.map(item => {
        return <FavoritesItem name={item.name} productName={item.name} price={item.price} />
    })}


    </StyledFavoritesWrapper>


) 

}


export default Favorites;