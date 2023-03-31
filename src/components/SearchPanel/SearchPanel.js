import React, {useState} from 'react';
import {useNavigate} from "react-router";

import "./searchPanel.css";

const SearchPanel = () => {

    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate();
    const getInputValue = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="searchPanel">
            <input type="text" onChange={getInputValue} placeholder="Movie Name" value={inputValue}/>
            <button onClick={() => {
                navigate(`searchResult/${inputValue}`)
                setInputValue("")
            }}>Search</button>
        </div>
    );
};

export default SearchPanel;