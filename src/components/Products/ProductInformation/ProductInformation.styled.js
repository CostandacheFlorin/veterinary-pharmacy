import styled from "styled-components";
import Text from "../../UIElements/Typography/Text";

export const StyledProductInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledProductInformationImage = styled.div`
  margin-top: 4rem;
  margin-left: 3vw;
  height: 40rem;
  border: 1px solid black;
  & img {
    width: 100%;
    height: 100%;
    padding: 1rem;

    @media (max-width: 1000px) {
      padding: 0rem;
    }
  }
  @media (max-width: 1000px) {
    margin-left: 0rem;
  }
`;

export const StyledProductInformationContent = styled.div``;
export const StyledProductInformationName = styled(Text)`
  width: 90%;
  margin: 0 auto;
  margin-top: 3rem;
  border-bottom: 2px solid #e4e4e4;
  padding-bottom: 4rem;
`;

export const StyledProductInformationPrice = styled(Text)`
  color: #ff0000;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const StyledProductInformationDescription = styled(Text)`
  border-bottom: 2px solid #e4e4e4;
  padding-bottom: 4rem;
`;
export const StyledProductInformationCallToAction = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
export const StyledProductionInformationButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
export const StyledProductionInformationQuantity = styled.div`
  @media (max-width: 550px) {
    margin-bottom: 1rem;
  }
`;
