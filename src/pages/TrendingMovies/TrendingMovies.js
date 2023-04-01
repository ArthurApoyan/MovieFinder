import React, {useEffect, useState} from 'react';
import {movieRequest} from "../../api/hooks/hooks";
import {TOP_RATED_MOVIE_URL, TRENDING_MOVIES_URL} from "../../api/url/url";

import MoviesOnPage from "../../components/MoviesOnPage/MoviesOnPage";
import Paginator from "../../components/Paginator/Paginator";
import Loading from "../../components/Loading/Loading";

import "./trendingMovies.css";

const TrendingMovies = () => {

    const [trending, setTrending] = useState({})
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const {movieRequestGet} = movieRequest()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    useEffect(() => {
        const getTrending = async () => {

            setLoading(true)

            const result = await movieRequestGet(TRENDING_MOVIES_URL + page)
            setTrending(result)

            setLoading(false)
        }

        getTrending()
    }, [page])


    return (
        <div className="trendingMoviesPage">
            {loading && <Loading/>}

            <MoviesOnPage className="allMoviesOnOtherPages" allMovies={trending}/>

            <Paginator count={10} setPage={setPage}/>
        </div>
    );
};

export default TrendingMovies;