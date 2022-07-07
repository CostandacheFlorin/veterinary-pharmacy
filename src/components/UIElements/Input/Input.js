import React from 'react';
import { StyledInputContainer } from './Input.styled';



const Input = ({value, id, label,type,name, width, height, onChangeHandler}) => {

  
 


 return(
     <StyledInputContainer width={width} height={height} >
         <label htmlFor={id}>{label}</label>
         <input value={value} onChange={onChangeHandler} type={type} name={name} id={id} />

     </StyledInputContainer>

 )
}



export default Input;