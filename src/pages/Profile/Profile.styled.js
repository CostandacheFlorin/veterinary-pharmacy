import styled from 'styled-components';


export const StyledProfileWrapper = styled.div`
    height: 100%;
    width: 80%;
    margin: 5rem auto;
    display: grid;
    grid-template-columns: 10rem 1fr;
    grid-gap: 2rem;
    
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: 95%;
    }
    
`