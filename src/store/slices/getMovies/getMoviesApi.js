import {createAsyncThunk} from "@reduxjs/toolkit";
import {POPULAR_MOVIE_URL, TOP_RATED_MOVIE_URL, TRENDING_MOVIES_URL, UPCOMING_MOVIE_URL} from "../../../api/url/url";
import {movieRequest} from "../../../api/hooks/hooks";

export const fetchAllMovies = createAsyncThunk(
    "allMovies/fetchAllMovies",
    async function () {
        const {movieRequestGet} = movieRequest()
        const popularMovies = await movieRequestGet(POPULAR_MOVIE_URL + 1)
        const topRatedMovies = await movieRequestGet(TOP_RATED_MOVIE_URL + 1)
        const upcomingMovies = await movieRequestGet(UPCOMING_MOVIE_URL + 1)
        const trendingMovies = await movieRequestGet(TRENDING_MOVIES_URL + 1)

        return({
            popularMovies,
            topRatedMovies,
            upcomingMovies,
            trendingMovies
        })
    }
)