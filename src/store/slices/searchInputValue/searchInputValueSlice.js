import {createSlice} from "@reduxjs/toolkit";

export const searchInputValueSlice = createSlice({
    name:"searchInputValue",
    initialState: "",
    reducers:{
        getInputValue(state, {payload}){
            console.log(payload)
            return payload
        },
        resetInputValue(){
            return ""
        }
    }
})

export const selectSearchInputValue = state => state.searchInputValue
export const {getInputValue, resetInputValue} = searchInputValueSlice.actions
export const searchInputValueReducer = searchInputValueSlice.reducer