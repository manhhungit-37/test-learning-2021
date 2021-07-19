import React, { useState } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function Movie() {
  const [movies, setMovies] = useState([]);

  function handleAddMovie(name) {
    const newMovie = {
      id: Date.now(),
      name
    }
    setMovies(prevState => [...prevState, newMovie]);
  }

  function handleDeleteMovie(id) {
    const newMovies = movies.filter(movie => movie.id !== id);
    setMovies(newMovies);
  }

  return (
    <div>
      <MovieForm addMovie={handleAddMovie} />
      <ul>
        {movies.length > 0 && movies.map(movie => (
          // <li>
          //   {movie.name}<button onClick={handleDeleteMovie}>Delete</button>
          // </li>
          <MovieList key={movie.id} movie={movie} deleteMovie={handleDeleteMovie}  />
        ))}
      </ul>
    </div>
  );
}

export default Movie;