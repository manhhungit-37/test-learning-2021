import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Navbar() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div>
      <nav>
        <ul>
          <li>Hung</li>
          <li>HUng1</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;