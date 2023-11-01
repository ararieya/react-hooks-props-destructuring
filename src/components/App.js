import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const title = "Mad Max";
  const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];
  const socialLinks = {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  };

  return (
    <div className="App">
      {/* passing down props from the parent component */}
      <MovieCard title={title} posterSrc={posterURL} genres={genresArr} />
      <SocialMedia links={socialLinks} />
    </div>
  );
  
}

// child component- Without Destructing
function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.posterSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <small>{props.genres.join(", ")}</small>
    </div>
  );
}

//With Destructing
// function MovieCard({ title, posterSrc, genres }) {
//   return (
//     <div className="movie-card">
//       <img src={posterSrc} alt={title} />
//       <h2>{title}</h2>
//       <small>{genres.join(", ")}</small>
//     </div>
//   );
// }

function SocialMedia({ socialLinks }) {
  return (
    <div>
      <a href={socialLinks.github}>{socialLinks.github}</a>
      <a href={socialLinks.linkedin}>{socialLinks.linkedin}</a>
    </div>
  );
}


export default App;
