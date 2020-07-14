import React, { Component } from "react";
import "./App.css";
import LinesEllipsis from "react-lines-ellipsis";
import "./Movie.css";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="5"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
}

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre}</span>;
}

// function MovieSynopsis({ synopsis }) {
//   return <span className="MovieSynopsis">{synopsis}</span>;
// }

export default Movie;
