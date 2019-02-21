import React from 'react'

class Boredom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount(props){
    this.boredomDecreaseTimer = setInterval(() =>
      this.props.onBoredomValueDecrease(),
      500
    );
  }

  componentWillUpdate(props){
    if (this.props.boredomValue <= 0) {
      clearInterval(this.boredomDecreaseTimer);
    }
  }

  render(){
    return(
      <div>
      <h1>
        {this.props.boredomValue}
      </h1>
    </div>
    )
  }
}

export default Boredom
