import React, { useState } from "react";
import { StyledMediumButton } from "../../UIElements/Buttons/Button.styled";
import HoverRating from "../../UIElements/Rating/HoverRating";
import Text from "../../UIElements/Typography/Text";

import {
  StyledAddReviewWrapper,
  StyledAddReviewRating,
  StyledAddReviewText,
  StyledTextArea,
} from "./AddReview.styled";

import { openNotification } from "../../UIElements/Notifications/Notification";

const AddReview = ({productname}) => {
  const [reviewText, setReviewText] = useState();
  const [reviewsStars, setReviewsStars] = useState();

  const reviewTextHandler = (event) => {
    setReviewText(event.target.value);
  };

  console.log(reviewText);
  console.log(reviewsStars);

  const reviewStarsHandler = (value) => {
    setReviewsStars(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let userId;
    if(localStorage.getItem("userData") !== null) {
      userId = JSON.parse(localStorage.getItem("userData")).userId;
   } else {
     userId= "neinregistrat"
   }

    const response = await fetch(
      "http://localhost:5000/api/management/add-review",
      {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          productName: productname,
          starsNumber: reviewsStars,
          text: reviewText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
      
    );

    const responseData = await response.json();
    console.log(responseData.text);
      if(response.ok) {
        openNotification("Recenzie adaugate cu success", "", "success", "review");

      }else {
        openNotification("Recenzia nu a putut fi adaugata", " ", "fail", "review");
      }
  };

  return (
    <StyledAddReviewWrapper onSubmit={submitHandler}>
      <StyledAddReviewText>
        <Text type="text" bold="true" margin="0 0 1rem 0">
          Recenzie:{" "}
        </Text>
        <StyledTextArea value={reviewText} onChange={reviewTextHandler} />
      </StyledAddReviewText>

      <StyledAddReviewRating>
        <Text type="text" bold="true" margin="0 0 1rem 0">
          Nota:
        </Text>
        <HoverRating setReviewValue={reviewStarsHandler} />

        <StyledMediumButton margin="3rem 0">Adauga recenzie</StyledMediumButton>
      </StyledAddReviewRating>
    </StyledAddReviewWrapper>
  );
};

export default AddReview;
