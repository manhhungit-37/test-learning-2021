import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function CountTheme() {
  const { count } = useContext(ThemeContext);
  
  return (
    <div>
      <button onClick={() => count + 1}>+1</button>
      <div>{count}</div>
    </div>
  );
}

export default CountTheme;