import {createSlice} from "@reduxjs/toolkit";
import {fetchSearchResult} from "./searchResultApi";

export const searchResultSlice = createSlice({
    name:"searchResult",
    initialState: {},
    reducers: {},
    extraReducers: {
        [fetchSearchResult.fulfilled]:(state, {payload}) => {
            console.log(payload, "searchResult")
            return payload
        }
    }
})

export const selectSearchResult = state => state.searchResult
export const searchResultReducer = searchResultSlice.reducer