import React from 'react';
import {Pagination} from "@mui/material";

import "./paginator.css";

const Paginator = ({count, setPage}) => {

    const handleChange = (event, value) => {
        setPage(value)
    }

    return (
        <div className="pagination">
            <Pagination count={count} color="primary" size="large" onChange={handleChange}/>
        </div>
    );
};

export default Paginator;