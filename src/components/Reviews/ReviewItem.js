import React from "react";
import Text from "../UIElements/Typography/Text";
import {
  StyledReviewItemWrapper,
  StyledReviewItem,
  StyledReviewUser,
  StyledReviewData,
} from "./ReviewItem.styled";
import ItemRating from "../UIElements/Rating/ItemRating";

const ReviewItem = ({rating, name, date, text}) => {
  return (
    <StyledReviewItemWrapper>
      <StyledReviewItem>
        <StyledReviewUser>
          
          <Text type="text" bold="true">
            {name}
          </Text>{" "}
          <Text type="text">{date}</Text>{" "}
        </StyledReviewUser>
        <StyledReviewData>
          <ItemRating rating={rating}/>
          <Text type="text">
            {text}
          </Text>
        </StyledReviewData>
      </StyledReviewItem>
    </StyledReviewItemWrapper>
  );
};

export default ReviewItem;
