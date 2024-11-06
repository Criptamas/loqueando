import { useState } from 'react'
// import withMovie from '../mocks/with-results.json'
import withoutMovies from '../mocks/no-results.json'

export function useMovies ({search}){
 const [responseMovie, setResponseMovie] = useState([])
 const movies = responseMovie.Search
 const mappedMovies = movies?.map(movie => ({
  id:movie.imdbID,
  title: movie.Title,
  img: movie.Poster,
  year: movie.Year
 })) 

 const getMovies = () =>{
  if(search){
  fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
  .then(res => res.json())
  .then(json => {
   setResponseMovie(json)
  })
  } else{
   setResponseMovie(withoutMovies)
  }
 }
 return { movies: mappedMovies, getMovies }
}

