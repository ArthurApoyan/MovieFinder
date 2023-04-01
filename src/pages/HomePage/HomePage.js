import React, {useEffect, useState} from 'react';
import {movieRequest} from "../../api/hooks/hooks";
import {POPULAR_MOVIE_URL, TOP_RATED_MOVIE_URL, TRENDING_MOVIES_URL, UPCOMING_MOVIE_URL} from "../../api/url/url";

import HomePageSection from "../../components/HomePageSection/HomePageSection";
import Loading from "../../components/Loading/Loading";

import "./homePage.css";

const HomePage = () => {

    const [homePageContent, setHomePageContent] = useState({
        popular: {},
        topRated: {},
        upcoming: {},
        trending: {}
    })
    const [loading, setLoading] = useState(false)
    const {movieRequestGet} = movieRequest()

    const getPopular = async () => {

        setLoading(true)

        const result = await movieRequestGet(POPULAR_MOVIE_URL + 1)
        setHomePageContent((prevState) => ({...prevState, popular: result}))

        setLoading(false)
    }

    const getTopRated = async () => {
        const result = await movieRequestGet(TOP_RATED_MOVIE_URL + 1)
        setHomePageContent((prevState) => ({...prevState, topRated: result}))
    }

    const getUpcoming = async () => {
        const result = await movieRequestGet(UPCOMING_MOVIE_URL + 1)
        setHomePageContent((prevState) => ({...prevState, upcoming: result}))
    }

    const getTrending = async () => {
        const result = await movieRequestGet(TRENDING_MOVIES_URL + 1)
        setHomePageContent((prevState) => ({...prevState, trending: result}))
    }

    useEffect(() => {
        getPopular()
        getTopRated()
        getUpcoming()
        getTrending()
    }, [])

    return (
        <div className="homePage">
            {loading && <Loading/>}
            <HomePageSection title="Popular Movies" moviesCategory={homePageContent.popular} link="/popular"/>
            <HomePageSection title="Top Rated Movies" moviesCategory={homePageContent.topRated} link="/topRated"/>
            <HomePageSection title="Upcoming Movies" moviesCategory={homePageContent.upcoming} link="/upcoming"/>
            <HomePageSection title="Trending Movies" moviesCategory={homePageContent.upcoming} link="/upcoming"/>
        </div>
    );
};

export default HomePage;