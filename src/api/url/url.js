export const POPULAR_MOVIE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=eeadb5c738acc57bdc5851ce777d00bb&language=en-US&page=";

export const TOP_RATED_MOVIE_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=eeadb5c738acc57bdc5851ce777d00bb&language=en-US&page=";

export const UPCOMING_MOVIE_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=eeadb5c738acc57bdc5851ce777d00bb&language=en-US&page=";

export const POSTER_URL = "https://image.tmdb.org/t/p/original/";

export const MOVIE_DETAILS_URL = (id) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=eeadb5c738acc57bdc5851ce777d00bb&language=en-US`
};

export const SEARCH_URL = (text, page) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=eeadb5c738acc57bdc5851ce777d00bb&language=en-US&page=${page}&include_adult=false&query=${text}`
};

