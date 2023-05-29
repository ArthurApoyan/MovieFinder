const BASE_URL = "https://api.themoviedb.org/3/"
export const POPULAR_MOVIE_URL = BASE_URL + "movie/popular?api_key=eeadb5c738acc57bdc5851ce777d00bb&language=en-US&page=";

export const TOP_RATED_MOVIE_URL = BASE_URL + "movie/top_rated?api_key=eeadb5c738acc57bdc5851ce777d00bb&language=en-US&page=";

export const UPCOMING_MOVIE_URL = BASE_URL + "movie/upcoming?api_key=eeadb5c738acc57bdc5851ce777d00bb&language=en-US&page=";

export const TRENDING_MOVIES_URL = BASE_URL + "trending/movie/week?api_key=eeadb5c738acc57bdc5851ce777d00bb&language=en-US&page="

export const POSTER_URL = "https://image.tmdb.org/t/p/original/";

export const MOVIE_DETAILS_URL = (id) => {
    return BASE_URL + `movie/${id}?api_key=eeadb5c738acc57bdc5851ce777d00bb&language=en-US`
};

export const SEARCH_URL = (text, page) => {
    return BASE_URL + `search/movie?api_key=eeadb5c738acc57bdc5851ce777d00bb&language=en-US&page=${page}&include_adult=false&query=${text}`
};

