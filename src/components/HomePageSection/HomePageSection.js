import React, {useState} from "react";
import {Link} from "react-router-dom";

import MovieCard from "../MovieCard/MovieCard";

import "./homePageSection.css";

const HomePageSection = ({title, moviesCategory, link}) => {

    const [showMovies, setShowMovies] = useState([0, 1, 2])

    const showNextMovie = () => {
        showMovies.shift()
        showMovies.push(showMovies[showMovies.length - 1] + 1)
        const newShowMovies = [...showMovies]
        setShowMovies(newShowMovies)
    }

    const showPrevMovie = () => {
        showMovies.pop()
        showMovies.unshift(showMovies[0] - 1)
        const newShowMovies = [...showMovies]
        setShowMovies(newShowMovies)
    }

    const filteredResults = moviesCategory?.results?.filter((item, index) => index < 10)
    const showedMovies = filteredResults?.filter((item, index) => showMovies.includes(index))

    return (
        <div className="homePageSection">
            <div className="homePageSectionTitle">
                <h2>{title}</h2>
                <Link className="homePageSectionTitleLink" to={link}><h2>See More</h2></Link>
            </div>
            <div className="homePageSectionContent">
                <button disabled={showMovies[0] === 0} onClick={showPrevMovie}>«</button>
                {
                    showedMovies?.map((item) => {
                        return (
                            <MovieCard
                                key={item?.id}
                                id={item?.id}
                                className="movieCardHomePage"
                                title={item?.title}
                                posterPath={item?.poster_path}/>
                        )
                    })
                }
                <button disabled={showMovies[showMovies.length - 1] === 9} onClick={showNextMovie}>»</button>
            </div>
        </div>
    )
}

export default HomePageSection;