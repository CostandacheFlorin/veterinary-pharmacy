import React, {useState, useEffect} from "react";
import ReviewItem from "../../Reviews/ReviewItem";
import { StyledReviewsContainer } from "./ProductReviews.styled";
import Text from "../../UIElements/Typography/Text";



const ProductReviews = ({productname}) => {
  const [reviews, setReviews] = useState([]);
  console.log(productname);

  useEffect(() => {
      const fetchReviews = async () => {
         const response =  await fetch(`http://localhost:5000/api/management/get-reviews-by-productname/${productname}`);

         const responseData = await response.json();
         setReviews(responseData.reviews);
        }
    

      fetchReviews();
     
      
  }, [])

    


  return (
    <StyledReviewsContainer>
      <Text type="subtitle" bold="true" align="center">
        Recenziile produsului
      </Text>

      {reviews.map((review) => {
        return (
          <ReviewItem
            key={review._id}
            text={review.text}
            name={review.userId}
            date={review.date}
            rating={review.starsNumber}
          />
        );
      })}
      {reviews.length === 0 && <Text align="center" margin="1rem 0" bold={true} type="subtitle">Nu au fost adaugate recenzii pentru acest produs, inregistreaza-te pentru a adauga prima recenzie!</Text>}
    </StyledReviewsContainer>
  );
};

export default ProductReviews;
