import React from 'react';
import {useNavigate} from "react-router";

import "./goBackButton.css";

const GoBackButton = () => {

    const navigate = useNavigate();

    return (
        <div>
           <button className="goBack" onClick={() => navigate(-1)}>← Back</button>
        </div>
    );
};

export default GoBackButton;