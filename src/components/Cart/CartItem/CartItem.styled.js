import styled from "styled-components";


export const StyledCartItem = styled.div`
  height: 12rem;
  width: 98%;
  margin: 2rem auto;
  background-color: #fff;
  display: flex;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.26);
  justify-content: space-around;
  align-items: center;
  border: 1px solid grey;
  
  @media (min-width: 875px){
    gap: 5rem;
  }

`;

export const StyledCartItemImage = styled.div`
 width: 32rem;
display: flex;
justify-content: center;
 & img {
     height: 10rem;

 }

`;

export const StyledCartItemPrice = styled.div`
    width:6rem;
    text-align: center;
    margin-right: 3rem;
    
  @media (max-width: 875px){
    margin-right: 0;
  }
    

`

export const StyledCartItemName = styled.div`

width: 100%;

display: flex;
justify-content: center;
align-items: center;




`

export const StyledCartItemDescription = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
gap: 3rem;

@media (max-width: 875px){
    
flex-direction: column;
justify-content: space-around;
margin-left: 0.5rem;
margin-right: 0.5rem;
gap: 0;
& > * > *{
     font-size: 17px;
 }

}

`
export const StyledCartQuantityControl = styled.div`
text-align: center;
display: flex;
flex-direction: column;
gap: 0.5rem;
`