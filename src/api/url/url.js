import {TMDBAPIkey} from "../../utils/APIs/Api keys";

const BASE_URL = "https://api.themoviedb.org/3/"
export const POPULAR_MOVIE_URL = BASE_URL + `movie/popular?api_key=${TMDBAPIkey}&language=en-US&page=`;

export const TOP_RATED_MOVIE_URL = BASE_URL + `movie/top_rated?api_key=${TMDBAPIkey}&language=en-US&page=`;

export const UPCOMING_MOVIE_URL = BASE_URL + `movie/upcoming?api_key=${TMDBAPIkey}&language=en-US&page=`;

export const TRENDING_MOVIES_URL = BASE_URL + `trending/movie/week?api_key=${TMDBAPIkey}&language=en-US&page=`;

export const POSTER_URL = "https://image.tmdb.org/t/p/original/";

export const MOVIE_DETAILS_URL = (id) => {
    return BASE_URL + `movie/${id}?api_key=${TMDBAPIkey}&language=en-US`
};

export const SEARCH_URL = (text, page) => {
    return BASE_URL + `search/movie?api_key=${TMDBAPIkey}&language=en-US&page=${page}&include_adult=false&query=${text}`
};

