import {createSlice} from "@reduxjs/toolkit";
import {fetchMovieDescription} from "./movieDescriptionApi";

export const movieDescriptionSlice = createSlice({
    name: "movieDescription",
    initialState: {},
    extraReducers: {
        [fetchMovieDescription.fulfilled]:(state, {payload}) => {
            return payload
        }
    }
})

export const selectMovieDescription = state => state.movieDescription
export const movieDescriptionReducer = movieDescriptionSlice.reducer