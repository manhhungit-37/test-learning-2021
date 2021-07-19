import React, { useContext, useState, useEffect } from 'react'
import { TodoConText } from '../../contexts/TodoContext';
import useDebounce from '../../hooks/useDebounce';

function TodoSearch() {
  const [text, setText] = useState("");
  const { fetchApiWithConditional } = useContext(TodoConText);
  const { textDebounce } = useDebounce(text);

  useEffect(() => {
    fetchApiWithConditional(textDebounce);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textDebounce])

  console.log("text", text);
  console.log("textDebounce", textDebounce);

  return (
    <form>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </form>
  )
}

export default TodoSearch
