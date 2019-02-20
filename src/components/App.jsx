import React from 'react';
import Body from './game/Body';
import NewGameForm from './newGame/NewGameForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monsterName: null,
      gameStarted: false,
    }
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleMonsterName = this.handleMonsterName.bind(this);

  }

  handleStartGame(target){
    this.setState({gameStarted: true});
    console.log(this.state.gameStarted);
  }

  handleMonsterName(name){
    this.setState({monsterName: name.target.value});
      console.log(this.state.monsterName);
  }

  render(){
    let newGameStart = null;
    if (this.state.gameStarted)  {
      newGameStart = <Body />
    } else {
     newGameStart = <NewGameForm
       monsterName = {this.handleMonsterName}
       onStartGame = {this.handleStartGame}/>
    }
    return (
      <div>
        {newGameStart}
      </div>
    );
  }
}

export default App;
