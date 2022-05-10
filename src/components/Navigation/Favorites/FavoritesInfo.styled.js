import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFavoritesInfo = styled(Link)`
  padding-right: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  & svg {
    font-size: 30px;
    color:#FF0000;
  }
`;

export const StyledFavoritesIcon = styled.div`
  display: flex;
  position: relative;
  
`;

export const StyledFavoritesNotification = styled.span`
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
  left: 1.5rem;
`;
