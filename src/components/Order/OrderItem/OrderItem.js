import React, { useState, useEffect } from 'react';

import Text from '../../UIElements/Typography/Text';


const OrderItem = ({name, quantity, price}) => {
    const  [totalItemPrice, setTotalItemPrice] =  useState();
    
    useEffect( () => {
        setTotalItemPrice(quantity*price);
    }, [quantity,price])
   
    return (<><Text type="text"  align="center" >{`${name} x ${quantity}`}</Text>
    <Text type="text"  align="center" > {`${totalItemPrice} lei`} </Text>
    </>)
} 


export default OrderItem;