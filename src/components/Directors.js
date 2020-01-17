import React from 'react';
import { directors } from '../data';

const renderMovieList = (movies) => {
  return movies.map(movie => <li>{movie}</li>)
}

const renderDirectorList = () => {
  return directors.map(director => {
    return (
      <div>
        <h3>Name: {director.name}</h3>
        <p>Movies: </p>
        <ul>{renderMovieList(director.movies)}</ul>
      </div>
    )
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectorList()}
    </div>
  );
}

export default Directors
