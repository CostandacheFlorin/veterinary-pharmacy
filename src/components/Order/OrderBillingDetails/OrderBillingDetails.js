import React, { useEffect, useState } from "react";
import {
  StyledOrderBillingDetails,
  StyledBillingHeader,
} from "./OrderBillingDetails.styled";
import Input from "../../UIElements/Input/Input";
import Text from "../../UIElements/Typography/Text";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
const OrderBillingDetails = ({ setDetails }) => {
  const [billingDetails, setBillingDetails] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    county: "",
    city: "",
    zipcode: "",
  });



  const handleInputChange = (e) => {
   
    const { name, value } = e.target;

    setBillingDetails({
      ...billingDetails,
      [name]: value,
    });
  };
  useEffect(() => {

    setDetails(billingDetails);

  },[billingDetails]);



  return (
    <StyledOrderBillingDetails>
      <StyledBillingHeader>
        <FormatAlignLeftIcon />
        <Text bold="true" type="subtitle" align="center">
          Detaliile pentru comanda
        </Text>
      </StyledBillingHeader>
      <Input
        value={billingDetails.name}
        onChangeHandler={handleInputChange}
        label="Nume:"
        id="lastname"
        name="lastname"
        type="text"
      />
      <Input
        onChangeHandler={handleInputChange}
        label="Prenume:"
        id="firstname"
        name="firstname"
        type="text"
      />
      <Input
        onChangeHandler={handleInputChange}
        label="Telefon:"
        id="phone"
        name="phone"
        type="text"
      />
      <Input
        onChangeHandler={handleInputChange}
        label="Email:"
        id="email"
        name="email"
        type="email"
      />
      <Input
        onChangeHandler={handleInputChange}
        label="Adresa:"
        id="address"
        name="address"
        type="address"
      />
      <Input
        onChangeHandler={handleInputChange}
        label="Judet:"
        id="county"
        name="county"
        type="text"
      />
      <Input
        onChangeHandler={handleInputChange}
        label="Oras:"
        id="city"
        name="city"
        type="text"
      />
      <Input
        onChangeHandler={handleInputChange}
        label="Cod postal:"
        id="zipcode"
        name="zipcode"
        type="text"
      />
    </StyledOrderBillingDetails>
  );
};

export default OrderBillingDetails;
