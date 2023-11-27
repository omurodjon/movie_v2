import React, { useEffect,useState } from 'react';
import {Navbar} from './components/navbar';
import {Movies} from './components/header';
import { IEntity } from './types/types';
function App() {
  const [movie ,setMovie] = useState([])
  useEffect(()=>{ 
    async function movies(){ 
      const data = await fetch('http://localhost:4000/api/movies');
      const response = await data.json();
      setMovie(response)
    }
    movies();
  },[]);
  return (
    <>
    <Navbar />
    {movie.map((movie:IEntity.Movies)=>(
      <Movies id={movie.id}
      title={movie.title}
      numberInStock={movie.numberInStock} 
      dailyRentalRate={movie.dailyRentalRate} 
      />
    ))}
    </>
  );
}

export default App;
