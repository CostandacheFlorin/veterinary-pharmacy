import styled from 'styled-components';


export const StyledPaymentMethod = styled.div`
grid-column: 1 / span 2;
width: 60%;
margin: 0 auto;
min-height: 100%;
border: 2px solid #000;
padding: 2rem;

@media (max-width: 800px) {
    width: 100%;
    
}
`

export const StyledPaymentHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;

& svg {
    font-size: 40px;
    color: #ADD8E6;
}
`

export const StyledPaymentOptions = styled.div`
width: max-content;
margin: 0 auto;
text-align: left;
`