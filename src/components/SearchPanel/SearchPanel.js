import React, {useState} from 'react';
import {useNavigate} from "react-router";

import "./searchPanel.css";

const SearchPanel = () => {

    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate();
    const getInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        navigate(`searchResult/${inputValue}`)
        setInputValue("")
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate(`searchResult/${inputValue}`)
            setInputValue("")
        }
    };

    return (
        <div className="searchPanel">
            <input type="text" onChange={getInputValue} onKeyDown={handleKeyDown} placeholder="Movie Name" value={inputValue}/>
            <button onClick={handleClick}>Search</button>
        </div>
    );
};

export default SearchPanel;