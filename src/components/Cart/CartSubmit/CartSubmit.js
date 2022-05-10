import React from 'react';
import { RoundedCornersButton } from '../../UIElements/Buttons/Button.styled';
import Text from '../../UIElements/Typography/Text';
import { StyledCartSubmit, StyledSubmitForm } from './CartSubmit.styled';



const CartSubmit = (props )=> {

const submitHandler = (e) => {
    e.preventDefault();
    console.log(props.total);
}


    return ( <StyledCartSubmit>
        <StyledSubmitForm onSubmit={submitHandler}>
            <Text  type="subtitle" bold="true">{`Total cos: ${props.total}`}</Text>
            <RoundedCornersButton margin="0 1rem" >Trimite comanda</RoundedCornersButton>
        </StyledSubmitForm>
    </StyledCartSubmit>

    )
}




export default CartSubmit;
