import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";


function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=b45ae2d7`)
        .then(res => res.json())
        .then(data => setMovie(data))
        .finally(() => setLoading(false));
    },[id]);

    if(loading) return <p> Loading...</p>;
    if(!movie) return <p> Movie not found</p>;

    return (
        <div className="flex flex-col items-center justify-center text-center p-10">
            <h1 className="text-4xl font-bold mb-4">{movie.Title}</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
                {movie.Plot}
            </p>
            <img src={movie.Poster} alt={movie.Title} className="w-fullmax-w-md h-auto object-cover rounded-lg mb-4" />
            <p className="text-gray-600">Year: {movie.Year}</p>
            <p className="text-gray-600">Genre: {movie.Genre}</p>
            <p className="text-gray-600">Director: {movie.Director}</p>
            <p className="text-gray-600">Actors: {movie.Actors}</p>
            <p className="text-gray-600">IMDB Rating: {movie.imdbRating}</p>
        </div>
    )
}

export default MovieDetails;