import { useEffect, useState } from 'react';
import Nav from './components/Nav/Navbar';
import axios from 'axios';
import Movie from './components/Movie/Movie';

function App() {

  const [featuredMovie, setFeaturedMovie] = useState([])
  const [movies, setMovies] = useState([])

  const KEY = process.env.REACT_APP_MOVIE_API_KEY


  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key="
  const POSTER_PATH = "https://image.tmdb.org/t/p/w1280"
  const IMG_PATH = "https://image.tmdb.org/t/p/w300"
  // use async/await function for api call
  const fetchMovies = async () => {
    const data = await axios.get(`${API_URL}${KEY}`)
    const movieData = data.data.results
    // const featured = setMovies(0).title
    console.log(movieData[0].title)
    setMovies(movieData)
    setFeaturedMovie(movieData[0]);
    const poster =
      console.log(data)
  }

  // const getMovies = () => {
  //   fetch(API_URL + KEY)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.results)
  //     })
  // }
  useEffect(() => {
    fetchMovies()
  }, [])


  return (
    <div className="App">
      <Nav />

      <div className="banner"
        style={{
          backgroundImage: "url(" + POSTER_PATH + featuredMovie.poster_path + ")",
        }}>
        <div className="featured-info">
          <h1>{featuredMovie.title}</h1>
          <p>{featuredMovie.overview}</p>
          <button>Play Trailer</button>
        </div>

        {/* <img src={POSTER_PATH + featuredMovie.poster_path}></img> */}
      </div>
      <main>
        <div className="trending">
          <h1>Trending movies</h1>
          <div className="movies-wrapper">
            {movies && movies.map((movie) =>
              <Movie
                title={movie.title}
                image={IMG_PATH + movie.poster_path} />)}
          </div>
        </div>
      </main>

    </div >
  );
}

export default App;
