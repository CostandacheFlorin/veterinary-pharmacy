import React from 'react';
import { StyledOrderBillingDetails, StyledBillingHeader } from './OrderBillingDetails.styled';
import Input from '../../UIElements/Input/Input';
import Text from '../../UIElements/Typography/Text';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
const OrderBillingDetails = () => {
 return (

      
        <StyledOrderBillingDetails>
          <StyledBillingHeader>
              <FormatAlignLeftIcon/>
            <Text bold="true" type="subtitle" align="center">
              Detaliile pentru comanda
            </Text>
          </StyledBillingHeader>
          <Input label="Nume:" id="lastname" name="lastname" type="text" />
          <Input label="Prenume:" id="firstname" name="firstname" type="text" />
          <Input label="Telefon:" id="phone" name="phone" type="text" />
          <Input label="Email:" id="email" name="email" type="email" />
          <Input label="Adresa:" id="address" name="address" type="address" />
          <Input label="Judet:" id="county" name="county" type="text" />
          <Input label="Oras:" id="city" name="city" type="text" />
          <Input
            label="Cod postal:"
            id="postalcode"
            name="postalcode"
            type="text"
          />
        </StyledOrderBillingDetails>
        
 )

}


export default OrderBillingDetails;