import React from 'react';

function TestContext() {
  const person = {
    name: "hung",
    sayHi: function() {
      console.log(this);
    }
  }

  console.log(this);

  return (
    <div>
      <button onClick={person.sayHi}>Click</button>
    </div>
  );
}

export default TestContext;