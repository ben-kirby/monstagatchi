import React from 'react';
import styled from 'styled-components';
import Button from '../reusable/button'

const GameWrapper = styled.section`
  background-color: tomato;
  width: 80%;
  height: 600px;
  margin: auto;
`;

const GameHeaders = styled.section`
  background-color: lightblue;
  margin: auto;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const GameStats = styled.section`
  background-color: lightblue;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

const ButtonWrapper = styled.section `
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ButtonStyleA = {
  backgroundColor: 'tomato'
}

const ButtonStyleB = {
  backgroundColor: 'bisque'
}

const ButtonStyleC = {
  backgroundColor: 'lightblue'
}

function Body () {


  return(
    <div>
      <GameWrapper>
        <GameHeaders>
          <p>Hunger Level</p>
          <p>Activity Level</p>
          <p>Energy Level</p>
        </GameHeaders>
        <GameStats>
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </GameStats>

        <p>Issa Baby</p>

      </GameWrapper>
      <ButtonWrapper>
        <Button style={ButtonStyleA} buttonText = 'Devour'/>
        <Button style={ButtonStyleB} buttonText = 'Torment'/>
        <Button style={ButtonStyleC} buttonText = 'Slumber'/>
      </ButtonWrapper>
    </div>
  )
}

export default Body;
