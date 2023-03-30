import React from "react";
import MovieCard from "../MovieCard/MovieCard";

import "./moviesOnPage.css";

const MoviesOnPage = ({className, allMovies}) => {
    return (
        <div className={className}>
            {
                allMovies?.results?.map((item) => {
                    return (
                        <div key={item.id} className="movieOnPage">
                            <MovieCard id={item?.id} className="movieCardOnPage" title={item?.title} posterPath={item?.poster_path}/>
                            <h3>Rate: {item?.vote_average}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MoviesOnPage;