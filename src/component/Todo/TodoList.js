import React, { useContext } from 'react';
import { TodoConText } from '../../contexts/TodoContext';

function TodoList() {
  let { todos, setTodos, setDefaultTodos } = useContext(TodoConText);

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    setDefaultTodos(newTodos);
  }

  console.log("todos", todos);

  return (
    <div>
      {todos.length > 0 && todos.map(todo => (
        <div key={todo.id}>
          <li>{todo.name}</li>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
