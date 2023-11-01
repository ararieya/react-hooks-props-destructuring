import React from "react";

function MovieCard({
}) {
  return (
    <div className="movie-card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM"
        alt="Mad Max: Fury Road"
      />
      <h2>Mad Max: Fury Road</h2>
      <small>Genres: Action, Adventure, Science Fiction, Thriller</small>
    </div>
  );
}

export default MovieCard;
