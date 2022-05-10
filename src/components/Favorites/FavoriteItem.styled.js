import styled from "styled-components";

export const StyledFavoritesItem = styled.div`
 height: 12rem;
  width: 70%;
  margin: 2rem auto;
  background-color: #fff;
  display: flex;
 
  justify-content: space-around;
  align-items: center;
  border: 2px solid #e1e1e1;
  @media (min-width: 875px){
    gap: 5rem;
  }
  @media (max-width: 875px){
    width: 95%;
  }



`;

export const StyledFavoritesImage = styled.div`
  width: 10rem;
  margin-left: 0.5rem;
  & img {
    height: 10rem;
  }
`;

export const StyledFavoritesDescription = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;

  @media (max-width: 875px) {
    flex-direction: column;
    justify-content: space-around;
    
    margin-left: 0.5rem;
    gap: 0;
    & > * > * {
      font-size: 17px;
    }
  }
`;
export const StyledFavoritesItemName = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const StyledFavoritesActions = styled.div`
text-align: center;

`

export const StyledFavoritesItemPrice = styled.div`
 width:6rem;
    text-align: center;
    margin-right: 3rem;
    
  @media (max-width: 875px){
    margin-right: 0;
  }
`