import styled from 'styled-components';

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



export const StyledDescriptionMobileFigure1 = styled.figure`
  grid-row: 1 / span 3;
  grid-column: 2 / span 8;
  transform: scaleX(-1);

  & img {
    width: 100%;
        height:100%;
        object-fit:cover;
        display: block;
        box-shadow: 0 1px 35px rgba(0, 0, 0, 0.26);
  }
`;

export const StyledDescriptionMobileFigure2 = styled.figure`
  z-index: 1;
  grid-row: 3 / span 3;
  grid-column: 1 / span 7;
  margin-left: 10px;
  & img {
    width: 100%;
        height:100%;
        object-fit:cover;
        display: block;
        box-shadow: 0 1px 35px rgba(0, 0, 0, 0.26);
  }
`;

export const StyledDescriptionMobileFigure3 = styled.figure`
  grid-row: 5 / span 3;
  grid-column: 5 / span 5;
  & img {
    width: 100%;
        height:100%;
        object-fit:cover;
        display: block;
        box-shadow: 0 1px 35px rgba(0, 0, 0, 0.26);
  }
`;