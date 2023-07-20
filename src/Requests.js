
const KEY = process.env.REACT_APP_MOVIE_API_KEY

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${KEY}&with_genres=28`,
    fethComedyMovies: `/discover/movie?api_key=${KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${KEY}&with_genres=99`
};

export default requests;