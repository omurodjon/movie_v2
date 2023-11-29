import React, { useEffect,useState } from 'react';
import {Navbar} from './components/navbar';
import { GetMovies } from './components/movies';
import { GetGenres } from './components/genres';
import { IEntity } from './types/types';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import './components/styles/index.css'
function App() {
  const [movie ,setMovie] = useState([])
  const [genres ,setGenres] = useState([])
  useEffect(()=>{ 
    async function movies(){ 
      const data = await fetch('http://localhost:4000/api/movies');
      const response = await data.json();
      setMovie(response)
    }
    movies();
  },[]);
  useEffect(()=>{ 
    async function genres(){ 
      const data = await fetch('http://localhost:4000/api/genres');
      const response = await data.json();
      setGenres(response)
    }
    genres();
  },[]);
  return (
    <>

    <Navbar />
    <div className="flex">
            <ul className="list-group">
              <li className="list-group-item list-group-item-action">All</li>
               {
                genres.map((genre:IEntity.Genre)=>(
                  <GetGenres id={genre.id} name = {genre.name}/>
                ))
               }
            </ul>
            <table className="table table-hover">
            <thead>
              <tr>
                <th className="clickable">Title <i className="fa fa-sort-asc"></i></th>
                <th className="clickable">Genre</th>
                <th className="clickable">Stock</th>
                <th className="clickable">Rate</th>
                <th className="clickable"></th>
              </tr>
            </thead>
            <tbody className="tbody">
            {movie.map((movie:IEntity.Movies)=>(
      <GetMovies id={movie.id}
      title={movie.title}
      genre = {movie.genre}
      numberInStock={movie.numberInStock} 
      dailyRentalRate={movie.dailyRentalRate} 
      />
      ))}
            </tbody>
          </table>
        </div>
    </>
  );
}

export default App;
