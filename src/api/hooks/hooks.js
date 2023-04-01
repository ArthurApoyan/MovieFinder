export const movieRequest = () => {

    const movieRequestGet = async (url) => {
        const response = await fetch(url)
        return response.json()
    }

    return {movieRequestGet}
}