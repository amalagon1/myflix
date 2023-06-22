import React from 'react'
import './movie.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { PlaceSharp } from '@mui/icons-material';

const Movie = ({ title, image }) => {
    return (
        <div className="card-container">
            <img src={image}></img>
            <div className="card-container__lower">
                <button className="lower-btn play">
                    <PlayArrowIcon />
                </button>
                <button className="lower-btn list">
                    +
                </button>
            </div>
        </div>
    )
}

export default Movie
