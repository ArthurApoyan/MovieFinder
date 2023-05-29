import {createAsyncThunk} from "@reduxjs/toolkit";
import {UPCOMING_MOVIE_URL} from "../../../api/url/url";
import {movieRequest} from "../../../api/hooks/hooks";

export const fetchUpcomingMovies = createAsyncThunk(
    "upcomingMovies/fetchUpcomingMovies",
    async function(page){
        const {movieRequestGet} = movieRequest()
        return await movieRequestGet(UPCOMING_MOVIE_URL + page)
    }
)