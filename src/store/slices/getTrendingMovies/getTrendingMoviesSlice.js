import {createSlice} from "@reduxjs/toolkit";
import {fetchTrendingMovies} from "./getTrendingMoviesApi";

export const getTrendingMoviesSlice = createSlice({
    name:"trendingMovies",
    initialState: {
        isLoading: false,
        trending: {}
    },
    reducers: {},
    extraReducers: {
        [fetchTrendingMovies.pending]:(state) => {
            state.isLoading = true
        },
        [fetchTrendingMovies.fulfilled]:(state, {payload}) => {
            state.trending = payload
            state.isLoading = false
        },
        [fetchTrendingMovies.rejected]:() => {
            console.log("error in upcoming")
        }
    }
})

export const selectTrendingMovies = state => state.trendingMovies
export const getTrendingMoviesReducer = getTrendingMoviesSlice.reducer