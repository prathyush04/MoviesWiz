import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("latest");
    const [loading, setLoading] = useState(false);

    const searchMovies = () => {
        setLoading(true);
        setMovies([]);
        fetch(`http://www.omdbapi.com/?s=${query}&apikey=b45ae2d7`)
        .then(res => res.json())
        .then(data => {
            if(data.Search){
                setMovies(data.Search);
            } else{
                setMovies([]);
            }
        })
        .finally(() => setLoading(false));
    };

    useEffect(() => {
        searchMovies();
    },[]);

    return (
        <div className='p-6'>

            <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    placeholder="enter the movie name"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && searchMovies()}
                    className='mb-4 p-2 border border-gray-300 rounded-lg w-full'
                />
                <button   onClick={searchMovies}
                    className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300'> Search </button>
            </div>

            {loading && <p className='text-center text-gray-500'>Loading...</p>}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6'>
                
                {movies.map(movie => (
                    <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
                        <div className='rounded-lg shadow-lg bg-white p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer'>
                            <img src={movie.Poster} alt={movie.Title} className='w-full h-64 object-cover rounded-lg mb-4' />
                            <h3 className='text-lg font-semibold mb-2'>{movie.Title}</h3>
                            <p className='text-gray-600'>Year: {movie.Year}</p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Movies;