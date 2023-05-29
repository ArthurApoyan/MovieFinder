import React, {useEffect} from 'react';

import {fetchAllMovies} from "../../store/slices/getMovies/getMoviesApi";
import {useDispatch, useSelector} from "react-redux";
import {selectAllMovies} from "../../store/slices/getMovies/getMoviesSlice";
import HomePageSection from "../../components/HomePageSection/HomePageSection";
import Loading from "../../components/Loading/Loading";

import "./homePage.css";


const HomePage = () => {

    const dispatch = useDispatch()
    const {movies, isLoading} = useSelector(selectAllMovies)

    useEffect(() => {
        dispatch(fetchAllMovies())
    }, [])


    return (
        <div className="homePage">
            {isLoading && <Loading/>}
            <HomePageSection title="Popular Movies" moviesCategory={movies.popular} link="/popular"/>
            <HomePageSection title="Top Rated Movies" moviesCategory={movies.topRated} link="/topRated"/>
            <HomePageSection title="Upcoming Movies" moviesCategory={movies.upcoming} link="/upcoming"/>
            <HomePageSection title="Trending Movies" moviesCategory={movies.trending} link="/upcoming"/>
        </div>
    );
};

export default HomePage;