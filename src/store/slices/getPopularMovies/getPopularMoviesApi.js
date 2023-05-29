import {createAsyncThunk} from "@reduxjs/toolkit";
import {POPULAR_MOVIE_URL} from "../../../api/url/url";
import {movieRequest} from "../../../api/hooks/hooks";

export const fetchPopularMovies = createAsyncThunk(
    "popularMovies/fetchPopularMovies",
    async function(page){
        const {movieRequestGet} = movieRequest()
        return await movieRequestGet(POPULAR_MOVIE_URL + page)
    }
)