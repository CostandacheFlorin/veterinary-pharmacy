import styled from "styled-components";

export const StyledProductDescriptionWrapper = styled.div`
  min-height: 100%;
  margin: 2rem;
  border: 2px solid #e4e4e4;
  & > * {
    margin: 3rem;
  }
`;

export const StyledProductDescriptionHeader = styled.div``;

export const StyledProductFullDescription = styled.div``;

export const StyledProductIngredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const StyledProductIngredientsList = styled.ul``;

export const StyledIngredientItem = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
`;
export const StyledProductSpecies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
   
`;

export const StyledProductUsage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
