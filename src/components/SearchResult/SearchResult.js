import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {movieRequest} from "../../api/hooks/hooks";
import {POSTER_URL, SEARCH_URL} from "../../api/url/url";
import Paginator from "../Paginator/Paginator";

import "./searchResult.css"

const SearchResult = () => {

    const [searchResult, setSearchResult] = useState({})
    const [page, setPage] = useState(1)
    const {searchMovie} = movieRequest()
    const {search} = useParams()

    useEffect(() => {
        const searchRequest = async  () => {
            const result = await searchMovie(SEARCH_URL(search, page))
            setSearchResult(result)
        }

        searchRequest()
    }, [search, page])

    const filteredResults = searchResult?.results?.filter((item) => item.poster_path)

    return (
        <div className="searchResult">
            <h1>Total pages : {searchResult?.total_pages}</h1>
            <div className="foundMovies">
                {
                    filteredResults?.map((item) => {
                        return (
                            <div key={item.id} className="foundMovieCard">
                                <Link className="foundMovieCardLink" to={`${item.id}`}><img className="popularMoviePoster" src={POSTER_URL + item?.poster_path} alt="Movie Poster"/></Link>
                                <Link className="foundMovieCardLink" to={`${item.id}`}><h3>{item?.title}</h3></Link>
                            </div>
                        )
                    })
                }
            </div>
            <Paginator count={searchResult?.total_pages} setPage={setPage}/>
        </div>
    );
};

export default SearchResult;