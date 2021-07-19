import { useEffect, useState } from "react"

export default function Effect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    setCount(count+1);
  }, []);

  function hanldeChangeCount() {
    setCount(count+1);
  }

  return (
    <div>
      <button onClick={hanldeChangeCount}>Click</button>
      <div>{count}</div>
      <input type="text" value={text} onChange={({ target }) => setText(target.value)} />
      <div>{text}</div>
    </div>    
  )
}