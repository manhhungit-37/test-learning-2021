import { useState } from "react"

console.log(this);
export default function Input() {
  const [text, setText] = useState("");

  function onChange(event) {
    console.log(event)
    setText(event.target.value);
  }

  return (
    <>
      <input value={text} onChange={onChange} />
      <input value={text} onChange={(event) => onChange(event)} />
    </>
  )
}