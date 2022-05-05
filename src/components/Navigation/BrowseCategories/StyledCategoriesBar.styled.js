import styled from "styled-components";

export const StyledCategoriesBar = styled.div`
  position: sticky;
  min-height: 100%;

  width: 100%;
  background-color: #00d775;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: space-around;

    & > * {
      width: 33.3%;
    }
  }
`;
