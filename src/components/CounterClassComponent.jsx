import { Component } from "react";
import "./counter.css";

class CounterClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count ? this.state.count - 1 : this.state.count,
    });
  }

  render() {
    return (
      <div className="Parent">
        <h2>Class Counter</h2>
        <button onClick={() => this.increment()}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.decrement()}>-</button>
      </div>
    );
  }
}

export default CounterClassComponent;
