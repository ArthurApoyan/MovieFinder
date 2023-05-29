import {createSlice} from "@reduxjs/toolkit";
import {fetchAllMovies} from "./getMoviesApi";

export const getMoviesSlice = createSlice({
    name: "allMovies",
    initialState: {
        isLoading: false,
        movies: {
            popular: {},
            topRated: {},
            upcoming: {},
            trending: {}
        }
    },
    reducers: {},
    extraReducers: {
        [fetchAllMovies.pending]:(state) => {
            state.isLoading = true
        },
        [fetchAllMovies.fulfilled]:(state, {payload}) => {
            state.movies.popular = payload.popularMovies
            state.movies.topRated = payload.topRatedMovies
            state.movies.upcoming = payload.upcomingMovies
            state.movies.trending = payload.trendingMovies
            state.isLoading = false
        },
        [fetchAllMovies.rejected]:() => {
            console.log("error")
        }
    }
})

export const selectAllMovies = state => state.allMovies
export const {} = getMoviesSlice.actions
export const getAllMoviesReducer = getMoviesSlice.reducer