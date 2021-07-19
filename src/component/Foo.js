import React, { Component } from 'react';

class Foo extends Component {
  constructor(props) {
    super(props);
    this.name = props.name
    console.log(this);
  }
  handleClick() {
    console.log(this);
  }

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default Foo;