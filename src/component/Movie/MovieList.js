import React from 'react';

function MovieList({ movie, deleteMovie }) {
  return (
    <li>
      {movie.name}
      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </li>
  );
}

export default MovieList;