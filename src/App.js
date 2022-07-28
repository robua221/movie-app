import "./App.css";
//347b2d15
import SearchIcon from "./search.svg";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=347b2d15";



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search)
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie App</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="serch" onClick={() => searchMovies(searchTerm  )} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {
            movies.map((movie)=>{
              const id=Math.random()*3
              return <MovieCard key={id} movie={movie}/>
            })
          }
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
