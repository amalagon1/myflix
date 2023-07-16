import { useEffect, useState, useContext } from 'react';
import Nav from '../components/Nav/Navbar'
import axios from 'axios';
import Movie from '../components/Movie/Movie';
import MoviePlayer from './MoviePlayer/MoviePlayer';
import Carousel from '../components/Carousel/Carousel';
import List from '../pages/List/List';
import { GlobalContext } from '../context/GlobalState';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";


function Home() {

    // const { video, addVideo, addToList, removeFromList, list } = useContext(GlobalContext);
    const [scroll, setscroll] = useState(false);
    const [list, setList] = useState([]);
    const [clicked, setClicked] = useState(false);



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
    const [movieID, setmovieID] = useState(null)



    const [videoURL, setVideoURL] = useState("")

    // const handleMovieClick = async (featuredMovie) => {
    //     const response = await axios.get(
    //         `https://api.themoviedb.org/3/movie/${featuredMovie.id}/videos?api_key=YOUR_API_KEY`
    //     );

    //     if (response.data.results.length > 0) {
    //         setTrailerId(response.data.results[0].key);
    //     }
    // };

    const KEY = process.env.REACT_APP_MOVIE_API_KEY


    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key="
    const POSTER_PATH = "https://image.tmdb.org/t/p/original"
    const IMG_PATH = "https://image.tmdb.org/t/p/w300"

    // const thumbnail = `https://image.tmdb.org/t/p/original +`

    // use async/await function for api call
    const fetchMovies = async () => {
        const data = await axios.get(`${API_URL}${KEY}`)
        const movieData = data.data.results
        // const featured = setMovies(0).title
        console.log(movieData[0].id)
        setMovies(movieData)
        setFeaturedMovie(movieData[0]);
        // setTrailerId(movieData[0].id);
        const poster =
            console.log(data)
    }

    // const setTrailer = (featuredMovie) => {
    //     movieTrailer(featuredMovie.id).then((res) => {
    //         setVideoURL(res);
    //     })
    // }
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

        <div className="homescreen">
            <div
                onClick={() => { setClicked(!clicked) }}
                className={clicked ? "backdrop" : "backdrop-hidden"}>
                {clicked && <MoviePlayer movieID={movieID} KEY={KEY} />}
            </div>
            <Nav scroll={scroll}
                setScroll={setscroll} />
            {/* <ReactPlayer url={videoURL} /> */}
            <div className="banner"
                style={{
                    backgroundImage: "url(" + POSTER_PATH + featuredMovie.backdrop_path + ")",
                }}>
                <div className="featured-info">
                    <h1>{featuredMovie.title}</h1>
                    <p>{featuredMovie.overview}</p>
                    <button
                        onClick={() => {
                            setClicked(!clicked)
                            setmovieID(featuredMovie.id)
                        }}
                        className="featured-btn">
                        <PlayArrowIcon />
                        <p>Play</p>
                    </button>
                    {/* <button onClick={handleMovieClick(featuredMovie)}>Play Trailer</button> */}
                </div>
                {/* {trailerId && <YouTube videoId={trailer} />} */}
                {/* <img src={POSTER_PATH + featuredMovie.poster_path}></img> */}
            </div>
            <main>
                <Carousel
                    movieID={movieID}
                    setmovieID={setmovieID}
                    clicked={clicked}
                    setClicked={setClicked}
                    list={list} setList={setList}
                    movies={movies}
                    IMG_PATH={IMG_PATH}
                    heading={"Trending movies"} />

                <Carousel
                    movieID={movieID}
                    setmovieID={setmovieID}
                    clicked={clicked}
                    setClicked={setClicked}
                    list={list} setList={setList}
                    movies={movies} IMG_PATH={IMG_PATH}
                    heading={"Recommended for you"} />

                <Carousel
                    movieID={movieID}
                    setmovieID={setmovieID}
                    clicked={clicked}
                    setClicked={setClicked}
                    list={list} setList={setList}
                    movies={movies} IMG_PATH={IMG_PATH}
                    heading={"Trending movies"} />

                <Carousel
                    movieID={movieID}
                    setmovieID={setmovieID}
                    clicked={clicked}
                    setClicked={setClicked}
                    list={list} setList={setList}
                    movies={movies}
                    IMG_PATH={IMG_PATH}
                    heading={"Trending movies"} />

            </main>

        </div >



    );
}

export default Home;

