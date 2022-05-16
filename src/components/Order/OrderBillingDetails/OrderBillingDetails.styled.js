import styled from 'styled-components';


export const StyledBillingHeader = styled.div`
  /* grid-row: 1 / span 1; */
  grid-column: 1 / span 2;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;


  & svg {
      font-size: 40px;
  }
`;


export const StyledOrderBillingDetails = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  border: 1px solid #e8e8e8;
  padding: 1rem;
`;