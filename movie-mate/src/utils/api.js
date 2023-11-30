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
