import React from "react";

const MovieCards = ({ movie }) => {
  return (
    <div className="text-white p-4 m-4 rounded-lg shadow-lg w-64 hover:shadow-3xl transition-shadow duration-300">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <h2 className="font-bold mt-2">Title: {movie.title}</h2>
      <p className="text-sm">Rating: {movie.vote_average}</p>
      <p className="text-sm">Release: {movie.release_date}</p>
    </div>
  );
};

export default MovieCards;
