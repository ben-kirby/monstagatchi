import React from 'react'

class Hunger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount(props) {
    this.hungerDecreaseTimer = setInterval(() =>
      this.props.onHungerValueDecrease(),
      5000
    );
  }

  componentWillUpdate(props){
      if (this.props.hungerValue <= 0) {
        clearInterval(this.hungerDecreaseTimer);
        console.log("Hunger Timer Over")
      };
  }

  render(){
    return(
      <div>
    <h1>
      {this.props.hungerValue}
    </h1>
  </div>
)
  }
}

export default Hunger
