import styled from 'styled-components';
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