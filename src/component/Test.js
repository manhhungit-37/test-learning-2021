import { useState, useRef } from "react";

export default function Test() {
  const [text, setText] = useState("Search a product");
  const inputRef = useRef();
  const [text2, setText2] = useState("Hung");

  function handleChange(e) {
    setText("search sau set");
  }

  function handleChane2(e) {
    setText2("hungsauSet")
  }

  console.log(text2);
  console.log(text);


  return (
    <>
      <input type="text" onChange={handleChange} ref={inputRef} />
      <input type="text" onChange={handleChane2} />

    </>
  )
}