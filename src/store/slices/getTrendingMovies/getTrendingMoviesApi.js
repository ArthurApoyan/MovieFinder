import {createAsyncThunk} from "@reduxjs/toolkit";
import {TRENDING_MOVIES_URL} from "../../../api/url/url";
import {movieRequest} from "../../../api/hooks/hooks";

export const fetchTrendingMovies = createAsyncThunk(
    "trendingMovies/fetchTrendingMovies",
    async function(page){
        const {movieRequestGet} = movieRequest()
        return await movieRequestGet(TRENDING_MOVIES_URL + page)
    }
)