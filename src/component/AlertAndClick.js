import React, { useState } from 'react';

function AlertAndClick() {
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(prevState => prevState + 1);
  }

  return (
    <div>
      <div>You clicked {count} times</div>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => setTimeout(() => alert(count), 1000)}>Alert</button>
    </div>
  );
}

export default AlertAndClick;