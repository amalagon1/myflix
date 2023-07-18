import axios from 'axios';
import { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import './moviePlayer.scss';

const opts = {
    height: '650',
    width: '1000',
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
            <YouTube className='youtube' videoId={trailerId} opts={opts} />
        </div>


    )
}

export default MoviePlayer
