import styled from "styled-components";

export const StyledFilterCheckboxes = styled.div`
  max-height: 100%;
  min-width: 260px;
  padding-right: 2rem;
  padding-left: 2rem;
  margin-top: 1rem;

  @media (max-width: 540px) {
    min-width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyledProductsListing = styled.div`
  min-height: 100%;

  @media (max-width: 540px) {
    width:  100%;
  
  }
`;

export const StyledPagination = styled.div`
width:100%;
display: flex;
justify-content: center;
margin-top: 3rem;
`