import React from 'react';
import {useNavigate} from "react-router";

import "./goBackButton.css";

const GoBackButton = () => {

    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1)
    }

    return (
        <div>
           <button className="goBack" onClick={goBack}>← Back</button>
        </div>
    );
};

export default GoBackButton;