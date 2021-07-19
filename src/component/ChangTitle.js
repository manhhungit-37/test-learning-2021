import { Component } from "react";

export default class ChangTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  componentDidMount() {
    document.title = `${this.state.count}`;
  }
  componentDidUpdate() {
    document.title = `${this.state.count}`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}