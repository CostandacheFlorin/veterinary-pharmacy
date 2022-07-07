import React, { useState, useEffect } from "react";

import {
  StyledSubmitOrder,
  StyledOrderCartItems,
  StyledTotalPrice,
  StyledOrderSummaryHeader,
} from "./OrderSummary.styled";

import Text from "../../UIElements/Typography/Text";
import OrderItem from "../OrderItem/OrderItem";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { StyledMediumButton } from "../../UIElements/Buttons/Button.styled";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomErrorModal from "../../UIElements/ErrorModal/CustomErrorModal";

const OrderSummary = ({ total, items, details }) => {
  const [loadedItems, setLoadedItems] = useState(items);
  const cart = useSelector((state) => state.cart);
  const [validate, setValidate] = useState(false);

  const history = useHistory();

  const clearError = () => {
    setValidate(false);
  }


  
  const sendOrderHandler = async () => {
    let userId;
    console.log(details);
    if(localStorage.getItem("userData") !== null) {
       userId = JSON.parse(localStorage.getItem("userData")).userId;
    } else {
      userId= "neinregistrat"
    }

    for(var key in details) {
      if(details[key] === "" || details[key] === undefined) {
         setValidate(true);
         return;
      }
  }
    

    const orderInfo = {
      userId: userId,
      products: items,
      numberOfItems: cart.totalQuantity,
      total: cart.totalPrice,
      address: details.address,
      firstname: details.firstname,
      lastname: details.lastname,
      zipcode: details.zipcode,
      city: details.city,
      phone: details.phone,
      email: details.email,
      county: details.county,
      status: "sent",
    };

    console.log(orderInfo);
    const response = await fetch(
      "http://localhost:5000/api/orders/send-order",
      {
        method: "POST",
        body: JSON.stringify(orderInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
      const responseData = await response.json();
      console.log(responseData);
      window.location.assign(`${responseData.url}`);

    };

  return (
    <StyledSubmitOrder>
      <CustomErrorModal message={"Unul sau mai multe campuri nu sunt valide!"} title={"Te rugam sa verifici campurile cu datele personale!"} error={validate} onClear={clearError} />
      <StyledOrderSummaryHeader>
        <ShoppingCartCheckoutIcon />
        <Text type="subtitle" bold="true" align="center" margin="3rem 0 3rem 0">
          Produsele din cart
        </Text>
      </StyledOrderSummaryHeader>

      <StyledOrderCartItems>
        <Text type="text" bold="true" align="center">
          Produs
        </Text>
        <Text type="text" bold="true" align="center">
          Pret
        </Text>
        {items.map((item) => {
          return (
            <OrderItem
              key={item.name}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
            />
          );
        })}
      </StyledOrderCartItems>
      <StyledTotalPrice>
        <Text type="text" align="center" bold="true">
          Total plata
        </Text>
        <Text type="text" align="center" color="#00FF00" bold="true">
          {`${total} lei`}
        </Text>
      </StyledTotalPrice>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "1rem 0" }}
      >
        <StyledMediumButton onClick={sendOrderHandler}>
          {" "}
          Trimite comanda
        </StyledMediumButton>
      </div>
    </StyledSubmitOrder>
  );
};

export default OrderSummary;
