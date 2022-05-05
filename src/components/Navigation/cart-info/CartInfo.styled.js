import styled from "styled-components";

export const StyledCartInfo = styled.div`
  padding-right: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    font-size: 30px;
  }
`;

export const StyledCartIcon = styled.div`
  display: flex;
  position: relative;
`;

export const StyledCartNotification = styled.span`
  font-size: 0.7rem;
  height: 1.1rem;
  width: 1.1rem;
  background-color: gold;
  border-radius: 50%;
  color: #250061;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 1rem;
`;
