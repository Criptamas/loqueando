import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'



export default function App  () {
    const {search, error, setSearch} = useSearch()
    const { movies, getMovies } = useMovies({search})

    
    const handleSubmit = (event) =>{
        event.preventDefault()
        getMovies()
    }
    
    const handleChange = (event) =>{
        event.preventDefault()
        setSearch(event.target.value)
    }
    return(
        
    <div id='page'>
        <header>
            <h1>Buscador de Peliculas </h1>
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} style={{
                    border: '1px solid transparent', 
                    borderColor: error ? 'red' : 'transparent' }} name="query" placeholder='Avengers, Iron Man, Star Wars...'
                    value={search}/>
                <button>Buscar</button>
            </form>
            {error && <p>{error}</p>}
        </header>


        <main>
            <Movies  movies={movies}/>
        </main>
    </div>)
}