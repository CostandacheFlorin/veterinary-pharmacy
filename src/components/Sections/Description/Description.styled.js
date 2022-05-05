import styled from "styled-components";

export const DescriptionCallToAction = styled.div`
  padding-left: 5vw;
  height: 100vh;
  width: 35%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  /* align-items: center; */
  text-align: center;
`;

export const DescriptionCTAText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
`;

export const DescriptionCTAHeader1 = styled.div`
  @media (max-width: 575px) {
    & h1 {
      font-size: 2.2rem;
    }
    
  }

  @media (max-width: 400px) {
    & h1 {
      font-size: 1.9rem;
    }
    
  }

`;
export const DescriptionCTAHeader3 = styled.div`
  @media (max-width: 580px) {
    & h3 {
      font-size: 0.9rem;
    }
  }
`;

export const DescriptionSection = styled.section`
  min-height: 70vh;
  width: 100%;
  display: flex;
`;

export const DescriptionMedia = styled.div`
  height: 100%;
  width: 65%;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 10%);

  grid-gap: 1.5rem;
  padding: 1.5rem;

  & > * {
    width: 100%;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

export const DescriptionMediaMobile = styled.div`
  @media (max-width: 850px) {
    padding-top: 15%;
    height: 100%;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 1fr);
  }



  @media (max-width: 575px) {
    padding-top: 35%;
  }

  @media (min-width: 851px) {
    display: none;
  }
`;


