import React, {useState} from 'react';
import {Link} from "react-router-dom";


import "./searchPanel.css";
import {useNavigate} from "react-router";


const SearchPanel = () => {

    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate();
    const getInputValue = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="searchPanel">
            <input type="text" onChange={(e) => {
                getInputValue(e)
            }} placeholder="Movie Name" value={inputValue}/>
            <button onClick={() => {
                navigate(`searchResult/${inputValue}`)
                setInputValue("")
            }
            }>Search
            </button>
        </div>
    );
};

export default SearchPanel;