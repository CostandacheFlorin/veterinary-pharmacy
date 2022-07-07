import React, {useState, useEffect} from "react";
import Text from "../UIElements/Typography/Text";
import {
  StyledReviewItemWrapper,
  StyledReviewItem,
  StyledReviewUser,
  StyledReviewData,
} from "./ReviewItem.styled";
import ItemRating from "../UIElements/Rating/ItemRating";

const ReviewItem = ({rating, name, date, text}) => {

  const [username, setUsername] = useState("");

  useEffect(() => {

    const fetchUsername = async () => {
        const response = await fetch(`http://localhost:5000/api/users/get-username-by-id/${name}`);
        const responseData = await response.json();
        setUsername(responseData.username);     

      }

      fetchUsername();
  },[])
 
  


  return (
    <StyledReviewItemWrapper>
      <StyledReviewItem>
        <StyledReviewUser>
          
          <Text type="text" bold="true">
            {username}
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
