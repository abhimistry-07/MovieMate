import React from 'react'

const MovieDetails = ({movie}) => {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
      <p>Released: {movie.Released}</p>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
    </div>
  )
}

export default MovieDetails