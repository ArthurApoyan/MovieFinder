import React, {useEffect, useState} from 'react';
import {movieRequest} from "../../api/hooks/hooks";
import {Pagination} from "@mui/material";
import Loading from "../../components/Loading/Loading";
import {POPULAR_MOVIE_URL, POSTER_URL} from "../../api/url/url";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";


import "./popularMovies.css";


const PopularMovies = () => {

    const [popularMovies, setPopularMovies] = useState({});
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const {popularMovieRequest} = movieRequest()


    const handleChange = (event, value) => {
        setPage(value)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    useEffect(() => {
        const getPopular = async () => {

            setLoading(true)

            const result = await popularMovieRequest((POPULAR_MOVIE_URL + page))
            setPopularMovies(result)

            setLoading(false)
        }
        getPopular()
    }, [page])


    return (
        <div className="popularMoviePage">
            <div style={{marginTop: "-5%"}}><Outlet/></div>
            <div className="popularMoviesContainer">
                {
                    popularMovies?.results?.map((item) => {
                        return (
                            <div key={item.id} className="popularMovie">
                                <Link className="movieCardLink" to={`${item.id}`}><img className="popularMoviePoster" src={POSTER_URL + item?.poster_path} alt="topRatedMovie"/></Link>
                                <Link className="movieCardLink" to={`${item.id}`}><h3>{item?.title}</h3></Link>
                                <h3>Rate: {item?.vote_average}</h3>
                            </div>
                        )
                    })
                }
            </div>
            {loading && <Loading/>}
            <div className="pagination">
                <Pagination count={3} color="primary" size="large" onChange={handleChange}/>
            </div>
        </div>
    );
};

export default PopularMovies;