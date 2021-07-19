import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  increment = () => {
    console.log(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        {/* onClick = function(cb) {
            cb();
        } */}
        {/* const a = this.increment; a() */}
        {/* const b = () => console.log(this); b() */}

        <input type="text" onChange={() => console.log(this)} />
      </div>
    );
  }
}

TestClass.propTypes = {

};

export default TestClass;