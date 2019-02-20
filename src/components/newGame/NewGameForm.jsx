import React from 'react';
import PropTypes from 'prop-types';

function NewGameForm(props){
  return(
    <div>
      <input onChange={props.monsterName}  type="text" placeholder="Enter Your Monster"/>
      <button onClick={props.onStartGame} type="button">Start Game</button>
    </div>
  )
}

NewGameForm.propTypes = {
  onStartGame: PropTypes.func,
  monsterName: PropTypes.func
}

export default NewGameForm
