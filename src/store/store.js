import {configureStore} from "@reduxjs/toolkit";
import {getAllMoviesReducer} from "./slices/getMovies/getMoviesSlice";
import {getPopularMoviesReducer} from "./slices/getPopularMovies/getPopularMoviesSlice";
import {getTopRatedMoviesReducer} from "./slices/getTopRatedMovies/getTopRatedMoviesSlice";
import {getUpcomingMoviesReducer} from "./slices/getUpcomingMovies/getUpcomingMoviesSlice";
import {getTrendingMoviesReducer} from "./slices/getTrendingMovies/getTrendingMoviesSlice";

export const store = configureStore({
    reducer:{
        allMovies: getAllMoviesReducer,
        popularMovies: getPopularMoviesReducer,
        topRatedMovies: getTopRatedMoviesReducer,
        upcomingMovies: getUpcomingMoviesReducer,
        trendingMovies: getTrendingMoviesReducer
    }
})