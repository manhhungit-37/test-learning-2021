import React, { useRef } from 'react';

function MovieForm({ addMovie }) {
  const inputRef = useRef();

  return (
    <div>
      Movie:
      <input type="text" ref={inputRef} />
      <button onClick={() => addMovie(inputRef.current.value)}>Add</button>
    </div>
  );
}

export default MovieForm;