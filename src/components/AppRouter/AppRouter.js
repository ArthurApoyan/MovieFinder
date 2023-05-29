import React from 'react';
import {Route, Routes} from "react-router";
import Layout from "../../pages/Layout/Layout";
import PopularMovies from "../../pages/PopularMovies/PopularMovies";
import HomePage from "../../pages/HomePage/HomePage";
import TopRatedMovies from "../../pages/TopRatedMovies/TopRatedMovies";
import UpcomingMovies from "../../pages/UpcomingMovies/UpcomingMovies";
import TrendingMovies from "../../pages/TrendingMovies/TrendingMovies";
import MovieDescription from "../MovieDescription/MovieDescription";
import SearchResult from "../SearchResult/SearchResult";
import VideoTrailer from "../VideoTrailer/VideoTrailer";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/:id" element={<MovieDescription/>}/>
                <Route path="/:id/:movieTitle" element={<VideoTrailer/>}/>
                <Route path="popular" element={<PopularMovies/>}/>
                <Route path="popular/:id" element={<MovieDescription/>}/>
                <Route path="topRated" element={<TopRatedMovies/>}/>
                <Route path="topRated/:id" element={<MovieDescription/>}/>
                <Route path="upcoming" element={<UpcomingMovies/>}/>
                <Route path="upcoming/:id" element={<MovieDescription/>}/>
                <Route path="trending" element={<TrendingMovies/>}/>
                <Route path="trending/:id" element={<MovieDescription/>}/>
                <Route path="searchResult/:search" element={<SearchResult/>}/>
                <Route path="searchResult/:search/:id" element={<MovieDescription/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;