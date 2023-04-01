import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {movieRequest} from "../../api/hooks/hooks";
import {MOVIE_DETAILS_URL, POSTER_URL} from "../../api/url/url";
import {Link} from "react-router-dom";


import "./movieDescription.css";

const MovieDescription = () => {

    const [movieDetails, setMovieDetails] = useState({})
    const {movieRequestGet} = movieRequest()
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    useEffect(() => {
        const getDetails = async () => {
            const result = await movieRequestGet(MOVIE_DETAILS_URL(id))
            setMovieDetails(result)
        }

        getDetails()
    }, [id])

    return (
        <div className="movieDescriptionContainer">
            <div className="movieDescription">
                <div className="movieDescriptionPoster">
                    <img src={POSTER_URL + movieDetails?.poster_path} alt="moviePoster"/>
                    <h2>Rate : {movieDetails?.vote_average?.toFixed(1)}</h2>
                </div>
                <div className="movieInfo">
                    <h2>{movieDetails?.title}</h2>
                    <h3><span>Release Date : </span> {movieDetails?.release_date}</h3>
                    <h3><span>Budget : </span> {movieDetails?.budget}$</h3>
                    <h3><span>Original Language : </span> {movieDetails?.original_language?.toUpperCase()}</h3>
                    <h4><span>Movie homepage : </span> <Link style={{color: "white"}} target="_blank"
                                                             to={movieDetails?.homepage}>{movieDetails?.homepage}</Link>
                    </h4>
                    <p><span>Overview : </span>{movieDetails.overview}</p>
                    <Link className="trailerLink" to={`/${movieDetails?.id}/${movieDetails?.title}`}>Watch Movie
                        Trailer</Link>
                </div>
                <button onClick={() => {
                    navigate(-1)
                }}>x
                </button>
            </div>
        </div>
    );
};

export default MovieDescription;