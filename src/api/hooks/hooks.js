export const movieRequest = () => {
    const popularMovieRequest = async (url) => {
        const response = await fetch(url)
        return response.json()
    }

    const topRatedMovieRequest = async (url) => {
        const response = await fetch(url)
        return response.json()
    }

    const upcomingMovieRequest = async (url) => {
        const response = await fetch(url)
        return response.json()
    }

    const getMovieDetails = async (url) => {
        const response = await fetch(url)
        return response.json()
    }

    const searchMovie = async (url) => {
        const response = await fetch(url)
        return response.json()
    }

    return {
        popularMovieRequest,
        topRatedMovieRequest,
        upcomingMovieRequest,
        getMovieDetails,
        searchMovie
    }
}