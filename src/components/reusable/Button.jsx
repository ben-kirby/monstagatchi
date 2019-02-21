import React from 'react'
import styled from 'styled-components';


const ButtonStyle = styled.button`
  padding: 20px;
  border-radius: 15px;
`;

function Button(props){
  return(

      <ButtonStyle onClick={props.onIncremenentStateValue} style={props.style}>{props.buttonText}</ButtonStyle>

  )
}

export default Button
