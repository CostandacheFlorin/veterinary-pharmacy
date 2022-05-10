import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  color: #565656;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);

  z-index: 5;


  
`;

export const StyledSearchbar = styled.div`
  width: 30%;

  @media (max-width: 480px) {
    display: none;
  }
`;
