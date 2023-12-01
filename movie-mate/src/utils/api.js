const apiKey = '1eea6a6b';

export const fetchMovies = async (searchQuery) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`);
        const data = await response.json();
        return data.Search || [];
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};

export const fetchMovieData = async (imdbID) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);
        const movieData = await response.json();
        return movieData;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return null;
    }
};

