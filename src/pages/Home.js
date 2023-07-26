import { useEffect, useState, useContext, useRef } from 'react';
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


    const ref = useRef(null);

    const handleScroll = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };



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
    const [topRated, setTopRated] = useState([])
    const [action, setAction] = useState([])
    const [comedy, setComedy] = useState([])


    const [movieID, setmovieID] = useState(null)

    const KEY = process.env.REACT_APP_MOVIE_API_KEY


    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key="
    const POSTER_PATH = "https://image.tmdb.org/t/p/original"
    const IMG_PATH = "https://image.tmdb.org/t/p/w300"
    const baseURL = "https://api.themoviedb.org/3";

    // const thumbnail = `https://image.tmdb.org/t/p/original +`

    // use async/await function for api call
    const fetchMovies = async () => {
        const data = await axios.get(`${API_URL}${KEY}`)
        const movieData = data.data.results
        console.log(movieData)

        const res = await axios.get(`${baseURL}/movie/top_rated?api_key=${KEY}&language=en-US`)
        const rated = res.data.results
        setTopRated(rated)

        const actionp = await axios.get(`${baseURL}/discover/movie?api_key=${KEY}&with_genres=28`)
        const action = actionp.data.results
        console.log(action)
        setAction(action)

        const comedyp = await axios.get(`${baseURL}/discover/movie?api_key=${KEY}&with_genres=35`)
        const comedy = comedyp.data.results
        setComedy(comedy)


        console.log(movieData[0].id)
        setMovies(movieData)
        // setFeaturedMovie(movieData[0]);
        const random = Math.floor(Math.random() * movieData.length)
        setFeaturedMovie(movieData[random])
        const poster =
            console.log(data)
    }

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

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
                setScroll={setscroll}
                ref={ref} />
            {/* <ReactPlayer url={videoURL} /> */}
            <div className="banner"
                ref={ref}
                style={{
                    backgroundImage: "url(" + POSTER_PATH + featuredMovie.backdrop_path + ")",
                }}>
                <div className="featured-info">
                    <h1>{featuredMovie.title}</h1>
                    <p>{truncate(featuredMovie.overview, 150)}</p>
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
                    handleScroll={handleScroll}
                    movieID={movieID}
                    setmovieID={setmovieID}
                    clicked={clicked}
                    setClicked={setClicked}
                    list={list} setList={setList}
                    movies={movies}
                    IMG_PATH={IMG_PATH}
                    heading={"Trending movies"} />

                <Carousel
                    handleScroll={handleScroll}
                    movieID={movieID}
                    setmovieID={setmovieID}
                    clicked={clicked}
                    setClicked={setClicked}
                    list={list} setList={setList}
                    movies={topRated} IMG_PATH={IMG_PATH}
                    heading={"Top rated picks"} />

                <Carousel
                    handleScroll={handleScroll}
                    movieID={movieID}
                    setmovieID={setmovieID}
                    clicked={clicked}
                    setClicked={setClicked}
                    list={list} setList={setList}
                    movies={action} IMG_PATH={IMG_PATH}
                    heading={"Action"} />

                <Carousel
                    handleScroll={handleScroll}
                    movieID={movieID}
                    setmovieID={setmovieID}
                    clicked={clicked}
                    setClicked={setClicked}
                    list={list} setList={setList}
                    movies={comedy}
                    IMG_PATH={IMG_PATH}
                    heading={"Comedy"} />

            </main>

        </div >



    );
}

export default Home;

