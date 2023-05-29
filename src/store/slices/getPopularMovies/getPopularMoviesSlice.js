import {createSlice} from "@reduxjs/toolkit";
import {fetchPopularMovies} from "./getPopularMoviesApi";

export const getPopularMoviesSlice = createSlice({
    name:"popularMovies",
    initialState: {
        isLoading: false,
        populars: {}
    },
    reducers: {},
    extraReducers: {
        [fetchPopularMovies.pending]:(state) => {
            state.isLoading = true
        },
        [fetchPopularMovies.fulfilled]:(state, {payload}) => {
            state.populars = payload
            state.isLoading = false
        },
        [fetchPopularMovies.rejected]:() => {
            console.log("error in populars")
        }
    }
})

export const selectPopularMovies = state => state.popularMovies
export const getPopularMoviesReducer = getPopularMoviesSlice.reducer