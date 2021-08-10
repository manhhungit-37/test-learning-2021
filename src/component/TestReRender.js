import React, { useState, useMemo, useEffect } from 'react'



function TestReRender() {
  const [number, setNumber] = useState(0);
  const [isLight, setIsLight] = useState(true);

  // useMemo((num) => {
  //   console.log("i was called!");
  //   return num+5;

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [number]);

  // useEffect((num) => {
  //   console.log("i was called!");
  //   return num+5;

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [number]);

  return (
    <div>
      <div>{number}</div>
      <button onClick={() => setNumber(number+1)}>Update Number</button>  
      <button onClick={() => setIsLight(!isLight)}>Toogle the light</button>
    </div>
  ) 
}

export default TestReRender
