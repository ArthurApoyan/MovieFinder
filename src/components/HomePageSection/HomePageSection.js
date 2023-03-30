import React from "react";
import {Link} from "react-router-dom";

import MovieCard from "../MovieCard/MovieCard";

import "./homePageSection.css";

const HomePageSection = ({title, moviesCategory, link}) => {
    return (
        <div className="homePageSection">
            <div className="homePageSectionTitle">
                <h2>{title}</h2>
                <Link className="homePageSectionTitleLink" to={link}><h2>See More</h2></Link>
            </div>
            <div className="homePageSectionContent">
                {
                    moviesCategory?.results?.map((item, index) => {
                        if (index > 4) return false
                        return (
                            <MovieCard id={item?.id}
                                       className="movieCardHomePage"
                                       title={item?.title}
                                       posterPath={item?.poster_path}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomePageSection;