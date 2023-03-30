import React, {useEffect, useState} from 'react';
import {movieRequest} from "../../api/hooks/hooks";
import {TOP_RATED_MOVIE_URL} from "../../api/url/url";

import MoviesOnPage from "../../components/MoviesOnPage/MoviesOnPage";
import Paginator from "../../components/Paginator/Paginator";
import Loading from "../../components/Loading/Loading";

import "./topRatedMovies.css";

const TopRatedMovies = () => {

    const [topRated, setTopRated] = useState({})
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const {movieRequestGet} = movieRequest()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    useEffect(() => {
        const getLatest = async () => {

            setLoading(true)

            const result = await movieRequestGet(TOP_RATED_MOVIE_URL + page)
            setTopRated(result)

            setLoading(false)
        }

        getLatest()
    }, [page])


    return (
        <div className="topRatedMoviesPage">
            {loading && <Loading/>}

            <MoviesOnPage className="allMoviesOnOtherPages" allMovies={topRated}/>

            <Paginator count={10} setPage={setPage}/>
        </div>
    );
};

export default TopRatedMovies;