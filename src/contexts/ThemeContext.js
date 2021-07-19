import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  console.log(1);
  const theme = {
    light: {
      backgroundColor: '#00f2ff',
      color: '#fff'
    },
    dark: {
      backgroundColor: '#000000',
      color: '#fff'
    },
    currentTopic: "light"
  };

  const [count, setCount] = useState(0);

  return (
    <ThemeContext.Provider value={{theme, count}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;