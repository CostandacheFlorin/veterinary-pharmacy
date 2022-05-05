import styled from "styled-components";
import PageWrapper from "../../UIElements/PageWrapper/PageWrapper";

export const ProductListingLayout = styled(PageWrapper)`
  width: 100%;
  min-height: 100%;


  display: grid;
  grid-template-columns: minmax(0, 260px) minmax(0, 1fr);



  @media (max-width: 540px) {
    
        display: flex;
        flex-direction: column;
    
}
`;
