import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { StyledPriceFilter } from "./PriceFilter.styled";
import Text from "../Typography/Text";
import { StyledMediumButton } from "../Buttons/Button.styled";
const PriceFilter = ({setPriceRange, priceRange, triggerFilter}) => {

  const minDistance = 10;

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
        if (activeThumb === 0) {
          const clamped = Math.min(newValue[0], 300 - minDistance);
          setPriceRange([clamped, clamped + minDistance]);
        } else {
          const clamped = Math.max(newValue[1], minDistance);
          setPriceRange([clamped - minDistance, clamped]);
        }
      } else {
        setPriceRange(newValue);
      }
    };

  return (
    <StyledPriceFilter>
      <Text type="text" size="medium" color="#000">
        Filtreaza dupa pret
      </Text>
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        min={0}
        max={300}
        
      />
      
    </StyledPriceFilter>
  );
};


export default PriceFilter;
