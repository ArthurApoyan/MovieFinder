import React from 'react';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {
    getInputValue,
    resetInputValue,
    selectSearchInputValue
} from "../../store/slices/searchInputValue/searchInputValueSlice";

import "./searchPanel.css";


const SearchPanel = () => {

    const dispatch = useDispatch()
    const inputValue = useSelector(selectSearchInputValue)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`searchResult/${inputValue}`)
        dispatch(resetInputValue())
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate(`searchResult/${inputValue}`)
            dispatch(resetInputValue())
        }
    };

    return (
        <div className="searchPanel">
            <input type="text"
                   placeholder="Movie Name"
                   value={inputValue}
                   onChange={(e) => dispatch(getInputValue(e.target.value))}
                   onKeyDown={handleKeyDown}/>
            <button onClick={handleClick}>Search</button>
        </div>
    );
};

export default SearchPanel;