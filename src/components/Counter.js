import { Component } from "react";

class Counter extends Component {
  /**
   * The constructor function is a special function that is called automatically when a new instance
   * of a class is created
   */
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    // Alternative for using a function for event handling
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  // TWO WAYS TO USE EVENT HANDLING IN REACT 
  /**
   * When the incrementCounter function is called, the state of the component is updated by calling
   * the setState function and passing in an object with the updated state.
   */
  // incrementCounter = () => {this.setState({
  //         counter: this.state.counter + 1
  //     });
  // }

  //OR Bind the function
  /**
   * When the incrementCounter function is called, the state of the component is updated by calling
   * the setState function and passing in an object with the updated state.
   */
  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  /**
   * The render function returns a JSX element
   * @returns A React component
   */
  render() {
    return (
      <div>
        <h3>Count value is: {this.state.counter}</h3>
        <button onClick={this.incrementCounter}>Click</button>
      </div>
    );
  }
}

export default Counter;