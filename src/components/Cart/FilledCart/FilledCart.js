import React from "react";
import { StyledCartWrapper } from "./FilledCart.styled";
import CartItem from "../CartItem/CartItem";
import Item1 from "../../../img/medicament7.jpg";
import Item2 from "../../../img/medicament5.jpg";
import Item3 from "../../../img/medicament3.jpg";
import CartSubmit from "../CartSubmit/CartSubmit";
const FilledCart = () => {
  return (
    <StyledCartWrapper>
      <CartItem
        image={Item1}
        name="ceva"
        id="altceva"
        price={8}
        productName="ceva medicament"
      />

<CartItem
        image={Item2}
        name="altnume"
        id="altceva2"
        price={155.33}
        productName="ceva medicament cu denumire lunga 200 miligrame ospatar"
      />

<CartItem
       
        name="altnume2"
        id="altceva3"
        price={16.74}
        productName="ceva medisdsadsad  dddddd dddddcamen dsadsad asdsa dsad sad sad asdas"
      />
      <CartSubmit total={200} />
    </StyledCartWrapper>
  );
};

export default FilledCart;
