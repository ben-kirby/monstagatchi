import React from 'react'

class Energy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount(props){
    this.energyDecreaseTimer = setInterval(() =>
      this.props.onEnergyValueDecrease(),
      7000
    );
  }

  componentWillUpdate(props){
    if (this.props.energyValue <= 0) {
      clearInterval(this.energyDecreaseTimer);
    }
  }

  render(){
    return(
      <div>
      <h1>
        {this.props.energyValue}
      </h1>
    </div>
    )
  }
}

export default Energy
