import styled from 'styled-components';

export const StyledAddReviewWrapper = styled.form`
    min-height: 100%;
    
    max-width: max-content;
    margin: 2rem auto;
    border: 2px solid #e8e8e8 ;
    border-radius: 12px;
    padding: 2rem;
    display: flex;
    gap: 2rem;
    @media (max-width: 850px) {
        max-width: 92%;
        flex-direction: column;
        align-items: center;
    }
`

export const StyledAddReviewRating = styled.div`
text-align: center;
`

export const StyledAddReviewText = styled.div`

    @media(max-width: 850px) {
        width: 100%;
    }
`

export const StyledTextArea = styled.textarea`
    width: 30rem;
    height: 10rem;

    @media (max-width: 850px) {
        width: 100%;
        height: 15rem;
    }
`