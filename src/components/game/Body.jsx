import React from 'react'
import styled from 'styled-components'
import Button from '../reusable/button'
import Boredom from './Boredom'
import Energy from './Energy'
import Hunger from './Hunger'
import MonsterSprite from './MonsterSprite'



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

const styles = {
  Title: styled.h1 `
    margin-top: 40px;
    font-size: 50px;
    text-align: center;
    border-bottom: 1px solid black
  `,
  GameWrapper: styled.section`
    background-color: tomato;
    width: 80%;
    height: 600px;
    margin: auto;
  `,


}


class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hunger: 10,
      boredom: 10,
      energy: 10,
    }
  this.handleHungerIncrease = this.handleHungerIncrease.bind(this);
  this.handleHungerDecrease = this.handleHungerDecrease.bind(this);
  this.handleBoredomIncrease = this.handleBoredomIncrease.bind(this);
  this.handleEnergyIncrease = this.handleEnergyIncrease.bind(this);
  this.handleBoredomDecrease = this.handleBoredomDecrease.bind(this);
  this.handleEnergyDecrease = this.handleEnergyDecrease.bind(this);
  }

  handleHungerIncrease() {
    let newHungerValue = this.state.hunger + 1;
    this.setState({hunger: newHungerValue});
  }

  handleHungerDecrease() {
    let newHungerValue = this.state.hunger - 1;
    this.setState({hunger: newHungerValue});
  }

  handleBoredomIncrease() {
    let newBoredomValue = this.state.boredom + 1;
    this.setState({boredom: newBoredomValue});
  }

  handleBoredomDecrease(){
    let newBoredomValue = this.state.boredom - 1;
    this.setState({boredom: newBoredomValue});
  }

  handleEnergyIncrease() {
    let newEnergyValue = this.state.energy + 1;
    this.setState({energy: newEnergyValue});
  }

  handleEnergyDecrease(){
    let newEnergyValue = this.state.energy - 1;
    this.setState({energy: newEnergyValue});
  }



  render(props){
    return(
      <div>
        <styles.Title>{this.props.monsterName} The Monster</styles.Title>
        <styles.GameWrapper>
          <GameHeaders>
            <h1> Hunger </h1>
            <h1> Boredom </h1>
            <h1> Energy </h1>
          </GameHeaders>
          <GameStats>
            <Hunger
              hungerValue={this.state.hunger}
              onHungerValueDecrease={this.handleHungerDecrease}/>
            <Boredom
              boredomValue={this.state.boredom}
              onBoredomValueDecrease={this.handleBoredomDecrease}/>
            <Energy
              energyValue={this.state.energy}
              onEnergyValueDecrease = {this.handleEnergyDecrease}/>
          </GameStats>


          <p>Issa Baby</p>
          <MonsterSprite />

        </styles.GameWrapper>
        <ButtonWrapper>
          <Button onIncremenentStateValue={this.handleHungerIncrease} style={ButtonStyleA} buttonText = 'Devour'/>
          <Button onIncremenentStateValue={this.handleBoredomIncrease}style={ButtonStyleB} buttonText = 'Torment'/>
          <Button onIncremenentStateValue={this.handleEnergyIncrease}style={ButtonStyleC} buttonText = 'Slumber'/>
        </ButtonWrapper>
      </div>
    );
  }
}

export default Body;
