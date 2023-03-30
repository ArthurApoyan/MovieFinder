import React from 'react';
import {Link} from "react-router-dom";
import {POSTER_URL} from "../../api/url/url";

import "./movieCard.css";

const MovieCard = ({id, posterPath, title, className}) => {
    return (
        <div className={className} key={id}>
            <Link className="movieCardLink" to={`${id}`}><img className="movieCardPoster" src={POSTER_URL + posterPath} alt="poster"/></Link>
            <Link className="movieCardLink" to={`${id}`}><h3>{title}</h3></Link>
        </div>
    );
};

export default MovieCard;