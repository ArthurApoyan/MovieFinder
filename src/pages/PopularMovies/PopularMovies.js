import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router";
import {movieRequest} from "../../api/hooks/hooks";
import {POPULAR_MOVIE_URL} from "../../api/url/url";

import Loading from "../../components/Loading/Loading";
import MoviesOnPage from "../../components/MoviesOnPage/MoviesOnPage";
import Paginator from "../../components/Paginator/Paginator";

import "./popularMovies.css";

const PopularMovies = () => {

    const [popularMovies, setPopularMovies] = useState({});
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const {movieRequestGet} = movieRequest()


    const handleChange = (event, value) => {
        setPage(value)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    useEffect(() => {
        const getPopular = async () => {
            setLoading(true)

            const result = await movieRequestGet((POPULAR_MOVIE_URL + page))
            setPopularMovies(result)

            setLoading(false)
        }

        getPopular()

    }, [page])


    return (
        <div className="popularMoviesPage">
            <div style={{marginTop: "-5%"}}><Outlet/></div>

            <MoviesOnPage className= "allMoviesOnPopularPage" allMovies={popularMovies}/>

            {loading && <Loading/>}

            <Paginator count={3} setPage={setPage}/>
        </div>
    );
};

export default PopularMovies;