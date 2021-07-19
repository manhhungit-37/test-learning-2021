import { createContext, useEffect, useState } from "react";

export const TodoConText = createContext();

const items = [{
  id: 1,
  name: 'learn react'
},
{
  id: 2,
  name: 'learn javascript'
}]

const TodoContextProvider = ({ children }) => {
  const [defaultTodos, setDefaultTodos] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newTodos = await fetchApi();
      setDefaultTodos(newTodos);
      setTodos(newTodos);
    }

    fetchData();
  }, [])

  function fetchApi() {
    return new Promise(resolve => {
      resolve(items);
    })
  }

  function fetchApiWithConditional(text) {
    const newTodos = defaultTodos.filter(todo => todo.name.toLowerCase().indexOf(text) !== -1);
    setTodos(newTodos);
  }

  const TodoContextData = {
    todos,
    setTodos,
    setDefaultTodos,
    fetchApiWithConditional
  }

  return (
    <TodoConText.Provider value={ TodoContextData }>
      { children }
    </TodoConText.Provider>
  )
}

export default TodoContextProvider;