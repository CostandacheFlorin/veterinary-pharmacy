import React from 'react';
import { RoundedCornersButton } from '../../UIElements/Buttons/Button.styled';
import Text from '../../UIElements/Typography/Text';
import { StyledCartSubmit, StyledSubmitForm } from './CartSubmit.styled';
import { useHistory } from 'react-router-dom';


const CartSubmit = (props )=> {

    const history = useHistory();

const submitHandler = (e) => {
    e.preventDefault();
    
    history.push("/trimite-comanda");
}


    return ( <StyledCartSubmit>
        <StyledSubmitForm onSubmit={submitHandler}>
            <Text  type="text" size="medium" bold="true">{`Total cos: ${props.total} lei`}</Text>
            <RoundedCornersButton margin="0 1rem" >Trimite comanda</RoundedCornersButton>
        </StyledSubmitForm>
    </StyledCartSubmit>

    )
}




export default CartSubmit;
