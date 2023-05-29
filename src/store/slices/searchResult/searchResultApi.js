import {createAsyncThunk} from "@reduxjs/toolkit";
import {movieRequest} from "../../../api/hooks/hooks";


export const fetchSearchResult = createAsyncThunk(
    "searchResult/fetchSearchResult",
    async function(url){
        const {movieRequestGet} = movieRequest()
        return await movieRequestGet(url)
    }
)