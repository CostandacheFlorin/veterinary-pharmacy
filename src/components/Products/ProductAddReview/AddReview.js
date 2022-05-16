import React, { useState} from "react";
import { StyledMediumButton } from "../../UIElements/Buttons/Button.styled";
import HoverRating from "../../UIElements/Rating/HoverRating";
import Text from "../../UIElements/Typography/Text";

import {
  StyledAddReviewWrapper,
  StyledAddReviewRating,
  StyledAddReviewText,
  StyledTextArea,
} from "./AddReview.styled";

import { openNotification } from '../../UIElements/Notifications/Notification';


const AddReview = () => {

 
 


  const submitHandler = (e) => {
    e.preventDefault();
    openNotification("Recenzie adaugate cu success", " a mers sa adaugi o recenzie vere","success", "review");
    
  };

  return (
    <StyledAddReviewWrapper onSubmit={submitHandler}>
      <StyledAddReviewText>
        <Text type="text" bold="true" margin="0 0 1rem 0">
          Recenzie:{" "}
        </Text>
        <StyledTextArea />
      </StyledAddReviewText>

      <StyledAddReviewRating>
        <Text type="text" bold="true" margin="0 0 1rem 0">
          Nota:
        </Text>
        <HoverRating />

        <StyledMediumButton margin="3rem 0">Adauga recenzie</StyledMediumButton>
      </StyledAddReviewRating>
      


      
    </StyledAddReviewWrapper>
  );
};

export default AddReview;
