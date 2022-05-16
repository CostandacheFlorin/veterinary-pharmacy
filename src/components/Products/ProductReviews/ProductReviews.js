import React from "react";
import ReviewItem from "../../Reviews/ReviewItem";
import { StyledReviewsContainer } from "./ProductReviews.styled";
import Text from "../../UIElements/Typography/Text";

const DUMMY_DATA = [
  {
    key: "review1",
    text: "Foarte tare chiar mi-a ajutat cainele care era bolnav de cateva zile    si acum se simte mult mai bine multumesc foarte mult penru acest  produs mesaj lung mesaj lung",
    rating: 4,
    date: "28 august 1993",
    name: "Costandache Florin Adrian",
  },
  {
    key: "review2",
    text: "Foarte tare chiar mi-a ajutat cainele care era bolnav de cateva zile    si acum se simte mult mai bine multumesc foarte mult penru acest  produs mesaj lung mesaj lung",
    rating: 3,
    date: "28 august 12001",
    name: "Ionel Donel",
  },
  {
    key: "review3",
    text: "Foarte tare chiar mi-a ajutat cainele care era bolnav de cateva zile    si acum se simte mult mai bine multumesc foarte mult penru acest  produs mesaj lung mesaj lung",
    rating: 2,
    date: "28 august 1993",
    name: "Popescu Ionut",
  },
  {
    key: "review4",
    text: "Foarte tare chiar mi-a ajutat cainele care era bolnav de cateva zile    si acum se simte mult mai bine multumesc foarte mult penru acest  produs mesaj lung mesaj lung",
    rating: 1,
    date: "28 august 1993",
    name: "raicu Mihael",
  },
  {
    key: "review5",
    text: "Foarte tare chiar mi-a ajutat cainele care era bolnav de cateva zile    si acum se simte mult mai bine multumesc foarte mult penru acest  produs mesaj lung mesaj lung",
    rating: 0,
    date: "28 august 1993",
    name: "Dorel morel",
  },
];

const ProductReviews = () => {
  return (
    <StyledReviewsContainer>
      <Text type="subtitle" bold="true" align="center">
        Recenziile produsului
      </Text>

      {DUMMY_DATA.map((review) => {
        return (
          <ReviewItem
            key={review.key}
            text={review.text}
            name={review.name}
            date={review.date}
            rating={review.rating}
          />
        );
      })}
    </StyledReviewsContainer>
  );
};

export default ProductReviews;
