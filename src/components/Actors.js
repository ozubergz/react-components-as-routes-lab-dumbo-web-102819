import React from 'react';
import { actors } from '../data';

const renderMovieList = (movies) => {
  return movies.map(movie => <li>{movie}</li>)
}

const renderActorsList = () => {
  return actors.map(actor => {
    return (
      <div>
        <h3>Name: {actor.name}</h3>
        <p>Movies: </p>
        <ul>{renderMovieList(actor.movies)}</ul>
      </div>
    )
  })
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActorsList()}
    </div>
  );
};

export default Actors;
