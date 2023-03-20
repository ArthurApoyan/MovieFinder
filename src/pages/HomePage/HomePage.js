import React, {useEffect, useState} from 'react';
import {movieRequest} from "../../api/hooks/hooks";
import {POPULAR_MOVIE_URL, POSTER_URL, TOP_RATED_MOVIE_URL, UPCOMING_MOVIE_URL} from "../../api/url/url";
import {Link} from "react-router-dom";
import Loading from "../../components/Loading/Loading";


import "./homePage.css";

const HomePage = () => {

    const [homePagePopular, setHomePagePopular] = useState({})
    const [homePageTopRated, setHomePageTopRated] = useState({})
    const [homePageUpcoming, setHomePageUpcoming] = useState({})
    const [loading, setLoading] = useState(false)


    const {popularMovieRequest, topRatedMovieRequest, upcomingMovieRequest} = movieRequest()


    useEffect(() => {
        const getPopular = async () => {

            setLoading(true)

            const result = await popularMovieRequest(POPULAR_MOVIE_URL + 1)
            setHomePagePopular(result)

            setLoading(false)
        }

        getPopular()

        const getTopRated = async () => {
            const result = await topRatedMovieRequest(TOP_RATED_MOVIE_URL + 1)
            setHomePageTopRated(result)
        }

        getTopRated()
        const getUpcoming = async () => {
            const result = await upcomingMovieRequest(UPCOMING_MOVIE_URL + 1)
            setHomePageUpcoming(result)
        }

        getUpcoming()
    }, [])


    return (
        <div className="homePage">
            {loading && <Loading/>}
            <div className="homePagePopular">
                <div>
                    <h2 style={{margin: "0", color: "white"}}>Popular Movies</h2>
                    <Link className="homePagePopularLink" to="/popular"><h2>See More</h2></Link>
                </div>
                <div>
                    {
                        homePagePopular?.results?.map((item, index) => {
                            if (index > 4) return false
                            return (
                                <div className="movieCard" key={item.id}>
                                    <Link className="movieCardLink" to={`${item.id}`}><img className="homePagePoster" src={POSTER_URL + item?.poster_path} alt="popularMovie"/></Link>
                                    <Link className="movieCardLink" to={`${item.id}`}><h3>{item?.title}</h3></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="homePagePopular topRated">
                <div>
                    <h2 style={{margin: "0", color: "white"}}>Top Rated Movies</h2>
                    <Link className="homePagePopularLink" to="/topRated"><h2>See More</h2></Link>
                </div>
                <div>
                    {
                        homePageTopRated?.results?.map((item, index) => {
                            if (index > 4) return false
                            return (
                                <div className="movieCard" key={item.id}>
                                    <Link className="movieCardLink" to={`${item.id}`}><img className="homePagePoster" src={POSTER_URL + item?.poster_path} alt="topRatedMovie"/></Link>
                                    <Link className="movieCardLink" to={`${item.id}`}><h3>{item?.title}</h3></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="homePagePopular upcoming">
                <div>
                    <h2 style={{margin: "0", color: "white"}}>Upcoming Movies</h2>
                    <Link className="homePagePopularLink" to="/upcoming"><h2>See More</h2></Link>
                </div>
                <div>
                    {
                        homePageUpcoming?.results?.map((item, index) => {
                            if (index > 4) return false
                            return (
                                <div className="movieCard" key={item.id}>
                                    <Link className="movieCardLink" to={`${item.id}`}><img className="homePagePoster" src={POSTER_URL + item?.poster_path} alt="upcomingMovie"/></Link>
                                    <Link className="movieCardLink" to={`${item.id}`}><h3>{item?.title}</h3></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;