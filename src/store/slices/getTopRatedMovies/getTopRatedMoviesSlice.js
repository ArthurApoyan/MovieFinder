import {createSlice} from "@reduxjs/toolkit";
import {fetchTopRatedMovies} from "./getTopRatedMoviesApi";

export const getTopRatedMoviesSlice = createSlice({
    name:"topRatedMovies",
    initialState: {
        isLoading: false,
        topRated: {}
    },
    reducers: {},
    extraReducers: {
        [fetchTopRatedMovies.pending]:(state) => {
            state.isLoading = true
        },
        [fetchTopRatedMovies.fulfilled]:(state, {payload}) => {
            state.topRated = payload
            state.isLoading = false
        },
        [fetchTopRatedMovies.rejected]:() => {
            console.log("error in top rated")
        }
    }
})

export const selectTopRatedMovies = state => state.topRatedMovies
export const getTopRatedMoviesReducer = getTopRatedMoviesSlice.reducer