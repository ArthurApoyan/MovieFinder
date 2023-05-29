import {createAsyncThunk} from "@reduxjs/toolkit";
import {TOP_RATED_MOVIE_URL} from "../../../api/url/url";
import {movieRequest} from "../../../api/hooks/hooks";

export const fetchTopRatedMovies = createAsyncThunk(
    "topRatedMovies/fetchTopRatedMovies",
    async function(page){
        const {movieRequestGet} = movieRequest()
        return await movieRequestGet(TOP_RATED_MOVIE_URL + page)
    }
)