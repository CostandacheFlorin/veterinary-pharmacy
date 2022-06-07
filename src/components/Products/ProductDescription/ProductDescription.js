import React from "react";

import {
  StyledProductDescriptionWrapper,
  StyledProductDescriptionHeader,
  StyledProductFullDescription,
  StyledProductIngredients,
  StyledProductSpecies,
  StyledProductUsage,
  StyledProductIngredientsList,
  StyledIngredientItem,
} from "./ProductDescription.styled";
import Text from "../../UIElements/Typography/Text";

const ProductDescription = (props) => {
  const renderIngredients = (ingredients) =>
    ingredients.map((ingredient) => (
      <StyledIngredientItem
        key={ingredient.name}
      >{`${ingredient.name} in cantitate de ${ingredient.quantity}`}</StyledIngredientItem>
    ));

  const renderSpecies = (species) =>
    species.map((specie) => (
      <StyledIngredientItem
        key={specie.specie}
      >{`${specie.specie}`}</StyledIngredientItem>
    ));

  return (
    <StyledProductDescriptionWrapper>
      <StyledProductDescriptionHeader>
        <Text type="subtitle" bold={"true"}>
          {props.name}
        </Text>
      </StyledProductDescriptionHeader>

      <StyledProductFullDescription>
        <Text type="text">{props.description}</Text>
      </StyledProductFullDescription>
      <StyledProductIngredients>
        <Text type="subtitle" bold={"true"}>
          Lista ingredientelor:
        </Text>
        <StyledProductIngredientsList>
          {renderIngredients(props.ingredients)}
        </StyledProductIngredientsList>
      </StyledProductIngredients>
      <StyledProductSpecies>
        <Text type="subtitle" bold={"true"}>
          Speciile tinta ale produsului:
        </Text>
        <StyledProductIngredientsList>
        {renderSpecies(props.species)}

        </StyledProductIngredientsList>
      </StyledProductSpecies>
      <StyledProductUsage>
        <Text type="subtitle" bold={"true"}>
          Mod de utilizare:
        </Text>
        <Text type="text">{props.usage}</Text>
      </StyledProductUsage>
    </StyledProductDescriptionWrapper>
  );
};

export default ProductDescription;
