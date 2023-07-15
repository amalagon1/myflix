import axios from 'axios';
import { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import './moviePlayer.scss';

const opts = {
    height: '400',
    width: '700',
    playerVars: {
        autoplay: 1,
    },
};

const MoviePlayer = ({ movieID }) => {
    const [trailerId, setTrailerId] = useState("")

    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        );
        setTrailerId(data?.results[0].key)

    }

    useEffect(() => {
        fetchVideo();
    }, [])
    console.log(trailerId);
    return (
        <div className="modal">
            <h1>Hey I'm the modal</h1>
            <YouTube videoId={trailerId} opts={opts} />
        </div>


    )
}

export default MoviePlayer
