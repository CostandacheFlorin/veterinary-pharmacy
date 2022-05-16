import styled from 'styled-components';

export const StyledReviewItemWrapper = styled.div`
min-height: 100% ;
max-width: 100%;


background-color: #fff;
`

export const StyledReviewItem = styled.div`
min-height: 100% ;
max-width: 100%;
margin: 2rem;
background-color: #fff;
display: grid;
grid-template-columns: minmax(150px, 250px) 1fr;
border: 2px solid #e8e8e8;
`

export const StyledReviewUser = styled.div`

display: flex;
flex-direction: column;
margin: 4rem 1rem;
gap: 3rem;

/* justify-content: space-around; */
   
`
export const StyledReviewData = styled.div`
margin-top: 1rem;
display: flex;
flex-direction: column;
gap: 1rem;
/* justify-content: space-around; */
margin-right: 1rem;
margin-bottom: 1rem;

`