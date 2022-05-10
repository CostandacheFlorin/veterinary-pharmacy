import styled from "styled-components";

export const StyledProductCard = styled.div`
  max-width: 16rem;
  position: relative;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.86);
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  background: white;
  border: 1px solid #e1e1e1;

  margin-top: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

export const StyledProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

   & img {
    width: 16rem;
    object-fit: cover;
    height: 16rem;
    object-position: center;
    padding: 0 4px;
   }
`;

export const StyledProductInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledProductActions = styled.div`
  display: flex;
  justify-content: center;

  & button {
    border-radius: 20px;
  }
`;

export const StyledProductPrice = styled.div`
  color: #5af542;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
`;

export const StyledProductDetails = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export const StyledProductTitle = styled.div`
  margin-top: 1rem;
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
`;
export const StyledProductContent = styled.div`
`

