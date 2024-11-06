/* eslint-disable react/prop-types */
function ListOfMovies ({ movies }) {
 return (
 <ul className='movies'>
  { movies.map(movie=>(
  <li className='movie' key={movie.id}>
      <h1>{movie.title}</h1>
      <p>{movie.year}</p>
      <img src={movie.img} alt="Movie from Movie Catalog" />
  </li>
))}</ul>)

} 

function NonMovies (){
 return ( <h3>Sin Resultados 😣 </h3>)
}

export function Movies ({ movies }){
 
 const hasMovies = movies?.length > 0

 return(
  hasMovies ? <ListOfMovies movies={movies}/> : <NonMovies/> 
 )
}

