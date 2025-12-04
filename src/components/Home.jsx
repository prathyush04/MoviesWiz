import React, { useState, useEffect } from 'react';

function Home() {

    // const [preview, setPreview] = useState(false);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setMovies([]);
        fetch(`http://www.omdbapi.com/?s=movies&apikey=b45ae2d7`)
        .then(res => res.json())
        .then(data => {
            if(data.Search){
                setMovies(data.Search);
            } else{
                setMovies([]);
            }
        })
        .finally(() => setLoading(false));
    },[])


    return (
        <div className="flex flex-col items-center justify-center text-center p-10">
            <h1 className="text-4xl font-bold mb-4"> Welcome to MovieWiz</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
                Discover movies, explore details, and find your favorites with ease.
                Start by browsing our <span className="font-semibold text-blue-500">Movies</span> section!
            </p>

            <a 
                href="/movies"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Browse Movies
            </a>

            {loading && <p className='text-center text-gray-500'>Loading...</p>}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6'>
                
                {movies.map(movie => (
                    <div key={movie.imdbID}
                        className='rounded-lg shadow-lg bg-white p-4 hover:shadow-xl transition-shadow duration-300'>
                            <img src={movie.Poster} alt={movie.Title} 
                            className='w-full h-64 object-cover rounded-lg mb-4' />
                            <h3 className='text-lg font-semibold mb-2'>{movie.Title}</h3>
                            <p className='text-gray-600'>Year: {movie.Year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;