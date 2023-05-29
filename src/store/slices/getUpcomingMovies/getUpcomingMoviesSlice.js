import {createSlice} from "@reduxjs/toolkit";
import {fetchUpcomingMovies} from "./getUpcomingMoviesApi";

export const getUpcomingMoviesSlice = createSlice({
    name:"upcomingMovies",
    initialState: {
        isLoading: false,
        upcoming: {}
    },
    reducers: {},
    extraReducers: {
        [fetchUpcomingMovies.pending]:(state) => {
            state.isLoading = true
        },
        [fetchUpcomingMovies.fulfilled]:(state, {payload}) => {
            state.upcoming = payload
            state.isLoading = false
        },
        [fetchUpcomingMovies.rejected]:() => {
            console.log("error in upcoming")
        }
    }
})

export const selectUpcomingMovies = state => state.upcomingMovies
export const getUpcomingMoviesReducer = getUpcomingMoviesSlice.reducer