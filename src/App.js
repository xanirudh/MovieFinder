import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import searchIcon from './search.svg';

// Api key: 8c0ef5f2

const API_URL = 'https://www.omdbapi.com/?apikey=8c0ef5f2';

const movie1 = {
  "Title": "Spiderman and Grandma",
  "Year": "2009",
  "imdbID": "tt1433184",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
}

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);


  } 


  useEffect(() => {
    searchMovies('marvel');
  }, []);



  return (
   <div className="app">
    <h1>MovieFinder</h1>

    <div className="search">
      <input
      placeholder='Search for Movies'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
      src={searchIcon}
      alt="search"
      onClick={() => searchMovies(searchTerm)}
      />
    </div>
    {
      movies?.length > 0 ? (
          <div className='container'>
          {movies.map((movie) => {
                return(
                  < MovieCard movie1={movie}/>
                )
          })}
          </div>
      ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
      )

    }
    

   </div>
   
  );
}

export default App;
