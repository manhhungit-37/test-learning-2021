import React, { Component } from 'react';


export default class MyButton extends Component {

  state = { tapped: false }
  tap() {
    this.setState({ tapped: true });  // --> 'this' here is undefined 
  }
  render() {
      return (
           <button onClick={ this.tap }>TAP ME</button>
      )
  }
}