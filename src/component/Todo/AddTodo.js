import React, { useContext, useRef } from 'react';
import { TodoConText } from '../../contexts/TodoContext';

function AddTodo() {
  const todoRef = useRef();
  const { setTodos, setDefaultTodos } = useContext(TodoConText);

  function handleAddTodo() {
    if (!todoRef.current.value) return;

    const newTodo = {
      id: Date.now(),
      name: todoRef.current.value,
    }
    setTodos(prevState => [...prevState, newTodo]);
    setDefaultTodos(prevState => [...prevState, newTodo]);
    todoRef.current.value = '';
  } 

  return (
    <div>
      <input type="text" ref={todoRef} />
      <button onClick={() => handleAddTodo()}>Add</button>
    </div>
  )
}

export default AddTodo;
