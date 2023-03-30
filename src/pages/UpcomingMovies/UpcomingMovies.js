import React, {useEffect, useState} from 'react';
import {movieRequest} from "../../api/hooks/hooks";
import {UPCOMING_MOVIE_URL} from "../../api/url/url";

import MoviesOnPage from "../../components/MoviesOnPage/MoviesOnPage";
import Paginator from "../../components/Paginator/Paginator";
import Loading from "../../components/Loading/Loading";

import "./upcomingMovies.css";

const UpcomingMovies = () => {

    const [upcoming, setUpcoming] = useState({})
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const {movieRequestGet} = movieRequest()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    useEffect(() => {
        const getUpcoming = async () => {

            setLoading(true)

            const result = await movieRequestGet(UPCOMING_MOVIE_URL + page)
            setUpcoming(result)

            setLoading(false)

        }

        getUpcoming()
    }, [page])

    return (
        <div className="upcomingMoviesPage">
            {loading && <Loading/>}

            <MoviesOnPage className="allMoviesOnOtherPages" allMovies={upcoming}/>

            <Paginator count={4} setPage={setPage}/>
        </div>
    );
};

export default UpcomingMovies;