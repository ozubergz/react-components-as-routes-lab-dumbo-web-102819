import React from 'react';
import { movies } from '../data';

const renderGenreList = (genres) => {
  return genres.map(genre => <li>{genre}</li>)
}

const renderMoviesList = () => {
  return movies.map(movie => {
    return (
      <div>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genres: </p>
        <ul>
          {renderGenreList(movie.genres)}
        </ul>
      </div>
      
    )
  });
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMoviesList()}
    </div>
  );
};

export default Movies;
