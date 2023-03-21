import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {Pagination} from "@mui/material";
import {movieRequest} from "../../api/hooks/hooks";
import {POSTER_URL, SEARCH_URL} from "../../api/url/url";


import "./searchResult.css"

const SearchResult = () => {

    const [searchResult, setSearchResult] = useState({})
    const [page, setPage] = useState(1)
    const {searchMovie} = movieRequest()
    const {search} = useParams()

    const handleChange = (event, value) => {
        setPage(value)
    }

    useEffect(() => {
        const searchRequest = async  () => {
            const result = await searchMovie(SEARCH_URL(search, page))
            setSearchResult(result)
        }

        searchRequest()
    }, [search, page])

    const filteredResults = searchResult?.results?.filter((item) => item.poster_path)

    console.log(searchResult)

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
            <div className="searchPagination">
                <Pagination count={searchResult?.total_pages} color="primary" size="large" onChange={handleChange}/>
            </div>
        </div>
    );
};

export default SearchResult;