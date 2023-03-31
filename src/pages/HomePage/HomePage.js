import React, {useEffect, useState} from 'react';
import {movieRequest} from "../../api/hooks/hooks";
import {POPULAR_MOVIE_URL, TOP_RATED_MOVIE_URL, UPCOMING_MOVIE_URL} from "../../api/url/url";

import HomePageSection from "../../components/HomePageSection/HomePageSection";
import Loading from "../../components/Loading/Loading";

import "./homePage.css";

const HomePage = () => {

    const [homePagePopular, setHomePagePopular] = useState({})
    const [homePageTopRated, setHomePageTopRated] = useState({})
    const [homePageUpcoming, setHomePageUpcoming] = useState({})
    const [loading, setLoading] = useState(false)

    const {movieRequestGet} = movieRequest()

    const getPopular = async () => {

        setLoading(true)

        const result = await movieRequestGet(POPULAR_MOVIE_URL + 1)
        setHomePagePopular(result)

        setLoading(false)
    }

    const getTopRated = async () => {
        const result = await movieRequestGet(TOP_RATED_MOVIE_URL + 1)
        setHomePageTopRated(result)
    }

    const getUpcoming = async () => {
        const result = await movieRequestGet(UPCOMING_MOVIE_URL + 1)
        setHomePageUpcoming(result)
    }

    useEffect(() => {
        getPopular()
        getTopRated()
        getUpcoming()
    }, [])

    return (
        <div className="homePage">
            {loading && <Loading/>}
            <HomePageSection title="Popular Movies" moviesCategory={homePagePopular} link="/popular"/>
            <HomePageSection title="Top Rated Movies" moviesCategory={homePageTopRated} link="/topRated"/>
            <HomePageSection title="Upcoming Movies" moviesCategory={homePageUpcoming} link="/upcoming"/>
        </div>
    );
};

export default HomePage;