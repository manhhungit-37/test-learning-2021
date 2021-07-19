import { useState } from "react"

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function handleAddText() {
    const newTodo = {
      id: Date.now(),
      name: text
    }
    setTodos([...todos, newTodo]);
    setText("");
  }

  function handleDeleteTodo(id) {
    const result = todos.filter(todo => todo.id !== id);
    setTodos(result);
  }

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={handleAddText}>Add</button>
      {todos.length > 0 && todos.map((value) => {
        return (
          <div key={value.id}>
            <div>{value.name}</div>
            <button onClick={() => handleDeleteTodo(value.id)}>Delete</button>
          </div>
        )
      })}
    </>
  )
}