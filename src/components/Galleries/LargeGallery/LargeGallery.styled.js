import styled from 'styled-components';

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


export const StyledDescriptionFigure1 = styled.figure`
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const StyledDescriptionFigure2 = styled.figure`
  grid-row: 3 / span 4;
  grid-column: 1 / span 4;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const StyledDescriptionFigure3 = styled.figure`
  grid-row: 7 / span 2;
  grid-column: 1 / span 2;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const StyledDescriptionFigure4 = styled.figure`
  grid-row: 1 / span 2;
  grid-column: 3 / span 3;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const StyledDescriptionFigure5 = styled.figure`
  grid-row: 7 / span 2;
  grid-column: 3 / span 3;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const StyledDescriptionFigure6 = styled.figure`
  grid-row: 3 / span 4;
  grid-column: 5 / span 5;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const StyledDescriptionFigure7 = styled.figure`
  grid-row: 1 / span 2;
  grid-column: 6 / span 3;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const StyledDescriptionFigure8 = styled.figure`
  grid-row: 7 / span 2;
  grid-column: 6 / span 3;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
