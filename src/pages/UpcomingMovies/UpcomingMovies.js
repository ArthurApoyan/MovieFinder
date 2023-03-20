import React, {useEffect, useState} from 'react';
import {movieRequest} from "../../api/hooks/hooks";
import {POSTER_URL, UPCOMING_MOVIE_URL} from "../../api/url/url";
import Loading from "../../components/Loading/Loading";
import {Pagination} from "@mui/material";
import {Link} from "react-router-dom";

const UpcomingMovies = () => {

    const [upcoming, setUpcoming] = useState({})
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const {upcomingMovieRequest} = movieRequest()

    const handleChange = (event, value) => {
        setPage(value)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    useEffect(() => {
        const getUpcoming = async () => {

            setLoading(true)

            const result = await upcomingMovieRequest(UPCOMING_MOVIE_URL + page)
            setUpcoming(result)

            setLoading(false)

        }

        getUpcoming()
    }, [page])

    console.log(upcoming)

    return (
        <div className="popularMoviePage">
            {loading && <Loading/>}
            <div className="popularMoviesContainer">
                {
                    upcoming?.results?.map((item) => {
                        return (
                            <div key={item.id} className="popularMovie">
                                <Link className="movieCardLink" to={`${item.id}`}><img className="popularMoviePoster" src={POSTER_URL + item?.poster_path} alt="topRatedMovie"/></Link>
                                <Link className="movieCardLink" to={`${item.id}`}><h3>{item?.title}</h3></Link>
                                <h3>Release Date : {item?.release_date}</h3>
                            </div>
                        )
                    })
                }
            </div>
            <div className="pagination">
                <Pagination count={4} color="primary" size="large" onChange={handleChange}/>
            </div>
        </div>
    );
};

export default UpcomingMovies;