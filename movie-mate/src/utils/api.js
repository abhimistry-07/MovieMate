const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_URL;


export const fetchMovies = async (searchQuery) => {
    try {
        const response = await fetch(`${baseUrl}/?s=${searchQuery}&apikey=${apiKey}`);
        const data = await response.json();
        return data.Search || [];
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};

export const fetchMovieData = async (imdbID) => {
    try {
        const response = await fetch(`${baseUrl}/?apikey=${apiKey}&i=${imdbID}`);
        const movieData = await response.json();
        return movieData;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return null;
    }
};

