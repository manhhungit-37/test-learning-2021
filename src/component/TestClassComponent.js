import { Component } from "react";

class TestClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event) {
    this.setState({text: event.target.value});
  console.log(this.state.text);
  }


  render() {
    return (
      <>
        <h1>Hungtung</h1>
        <input value={this.state.text} onChange={this.onChange} />
      </>
    )
  }
}

export default TestClassComponent;