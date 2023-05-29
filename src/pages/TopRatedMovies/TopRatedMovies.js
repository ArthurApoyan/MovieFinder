import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTopRatedMovies} from "../../store/slices/getTopRatedMovies/getTopRatedMoviesApi";
import {selectTopRatedMovies} from "../../store/slices/getTopRatedMovies/getTopRatedMoviesSlice";

import MoviesOnPage from "../../components/MoviesOnPage/MoviesOnPage";
import Paginator from "../../components/Paginator/Paginator";
import Loading from "../../components/Loading/Loading";

import "./topRatedMovies.css";

const TopRatedMovies = () => {

    const dispatch = useDispatch()
    const {topRated, isLoading} = useSelector(selectTopRatedMovies)
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(fetchTopRatedMovies(page))
        window.scrollTo(0, 0)
    }, [page])

    return (
        <div className="topRatedMoviesPage">
            {isLoading && <Loading/>}

            <MoviesOnPage className="allMoviesOnOtherPages" allMovies={topRated}/>

            <Paginator count={10} setPage={setPage}/>
        </div>
    );
};

export default TopRatedMovies;