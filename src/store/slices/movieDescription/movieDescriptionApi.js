import {createAsyncThunk} from "@reduxjs/toolkit";
import {movieRequest} from "../../../api/hooks/hooks"
import {MOVIE_DETAILS_URL} from "../../../api/url/url";

export const fetchMovieDescription = createAsyncThunk(
    "movieDescription/fetchMovieDescription",
        async function(id){
                const {movieRequestGet} = movieRequest()
                return await movieRequestGet(MOVIE_DETAILS_URL(id))
        }
)