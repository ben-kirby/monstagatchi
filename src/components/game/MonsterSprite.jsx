import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import sprite from '../assets/sprite.png';
import llama from '../assets/llama.png'

const styles = {
  image: {
    width: '100px',
    height: '100px'
  }
}

class MonsterSprite extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(props){
    return(
      <div style={styles.image}>
      <Spritesheet
        image={sprite}
        widthFrame={375}
        heightFrame={500}
        steps={14}
        fps={12}
        loop={true}
        autoPlay={true}
      />
      <Spritesheet
        image={llama}
        widthFrame={48}
        heightFrame={48}
        steps={6}
        fps={6}
        loop={true}
        autoPlay={true}
      />

      </div>
    );
  }
}


export default MonsterSprite
