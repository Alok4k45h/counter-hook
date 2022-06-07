import React, { Component } from "react";
//step-1: here we are using class component for counter state management
class ClassCounter extends Component {
  constructor(props) {
    super(props);
    //step-2: creating state variable count and initialise it to zero
    // in class component state is defined as an object having all variables as an key and it's inital value as an value of that key
    this.state = {
      count: 0, // key-value pair
    };
  }

  //step-3: method for setting the state value based on user event
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count: {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;
