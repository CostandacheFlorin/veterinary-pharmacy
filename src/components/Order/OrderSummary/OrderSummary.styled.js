import styled from "styled-components";

export const StyledSubmitOrder = styled.div`
  border: 1px solid #e8e8e8;
`;

export const StyledOrderCartItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-items: center;
`;

export const StyledTotalPrice = styled.div`
  width: 80%;
  margin: 2rem auto;
  padding-top: 2rem;

  border-top: 3px solid green;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`;

export const StyledOrderSummaryHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & svg {
    font-size: 40px;
  }
`;
