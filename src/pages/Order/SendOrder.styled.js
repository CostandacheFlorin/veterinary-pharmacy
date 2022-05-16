import styled from "styled-components";

export const StyledOrderLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  width: 90%;
  margin: 0 auto;
  @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
  }
`;




export const StyledOrderHeader = styled.div`
  margin: 5rem 2rem;
`;



