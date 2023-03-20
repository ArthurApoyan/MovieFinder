import React, {useEffect, useState} from 'react';
import {movieRequest} from "../../api/hooks/hooks";
import {POSTER_URL, TOP_RATED_MOVIE_URL} from "../../api/url/url";
import Loading from "../../components/Loading/Loading";
import {Pagination} from "@mui/material";
import {Link} from "react-router-dom";

const TopRatedMovies = () => {

    const [topRated, setTopRated] = useState({})
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const {topRatedMovieRequest} = movieRequest()

    const handleChange = (event, value) => {
        setPage(value)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    useEffect(() => {
        const getLatest = async () => {

            setLoading(true)

            const result = await topRatedMovieRequest(TOP_RATED_MOVIE_URL + page)
            setTopRated(result)

            setLoading(false)
        }

        getLatest()
    }, [page])


    return (
        <div className="popularMoviePage">
            {loading && <Loading/>}
            <div className="popularMoviesContainer">
                {
                    topRated?.results?.map((item) => {
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
            <div className="pagination">
                <Pagination count={10} color="primary" size="large" onChange={handleChange}/>
            </div>
        </div>
    );
};

export default TopRatedMovies;