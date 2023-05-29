import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectTrendingMovies} from "../../store/slices/getTrendingMovies/getTrendingMoviesSlice";
import {fetchTrendingMovies} from "../../store/slices/getTrendingMovies/getTrendingMoviesApi";

import MoviesOnPage from "../../components/MoviesOnPage/MoviesOnPage";
import Paginator from "../../components/Paginator/Paginator";
import Loading from "../../components/Loading/Loading";

import "./trendingMovies.css";

const TrendingMovies = () => {

    const dispatch = useDispatch()
    const {trending, isLoading} = useSelector(selectTrendingMovies)
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(fetchTrendingMovies(page))
        window.scrollTo(0, 0)
    }, [page])

    return (
        <div className="trendingMoviesPage">
            {isLoading && <Loading/>}

            <MoviesOnPage className="allMoviesOnOtherPages" allMovies={trending}/>

            <Paginator count={10} setPage={setPage}/>
        </div>
    );
};

export default TrendingMovies;