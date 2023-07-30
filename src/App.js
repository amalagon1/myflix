import { useEffect, useState } from 'react';
import Nav from './components/Nav/Navbar';
import axios from 'axios';
import Movie from './components/Movie/Movie';
import Carousel from './components/Carousel/Carousel';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import List from './pages/List/List';

import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';

function App() {

  const [scroll, setscroll] = useState(false);


  const changevalueonScroll = () => {

    const scrollvalue = document.documentElement.scrollTop;
    if (scrollvalue > 80) {
      setscroll(true);
    }
    else {
      setscroll(false);
    }
  }
  window.addEventListener('scroll', changevalueonScroll);

  const [featuredMovie, setFeaturedMovie] = useState([])
  const [movies, setMovies] = useState([])


  const KEY = process.env.REACT_APP_MOVIE_API_KEY


  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key="
  const POSTER_PATH = "https://image.tmdb.org/t/p/original"
  const IMG_PATH = "https://image.tmdb.org/t/p/w300"
  // use async/await function for api call
  // const fetchMovies = async () => {
  //   const data = await axios.get(`${API_URL}${KEY}`)
  //   const movieData = data.data.results
  //   console.log(movieData[0].title)
  //   setMovies(movieData)
  //   setFeaturedMovie(movieData[0]);
  //   const poster =
  //     console.log(data)
  // }

  // useEffect(() => {
  //   fetchMovies()
  // }, [])


  return (
    // <Router>
    //   <div className="App">
    //     <Nav scroll={scroll} setScroll={setscroll} />

    //     <div className="banner"
    //       style={{
    //         backgroundImage: "url(" + POSTER_PATH + featuredMovie.backdrop_path + ")",
    //       }}>
    //       <div className="featured-info">
    //         <h1>{featuredMovie.title}</h1>
    //         <p>{featuredMovie.overview}</p>
    //         <button>Play Trailer</button>
    //       </div>


    //     </div>
    //     <main>
    //       <Carousel movies={movies} IMG_PATH={IMG_PATH} heading={"Trending movies"} />
    //       <Carousel movies={movies} IMG_PATH={IMG_PATH} heading={"Recommended for you"} />
    //       <Carousel movies={movies} IMG_PATH={IMG_PATH} heading={"Trending movies"} />
    //       <Carousel movies={movies} IMG_PATH={IMG_PATH} heading={"Trending movies"} />

    //     </main>

    //   </div >
    // </Router>
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />} />

        <Route path="/list" element={<List />} />

      </Routes >
    </GlobalProvider>


  );
}

export default App;
