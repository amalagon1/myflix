import React from 'react'
import './movie.scss'
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { PlaceSharp } from '@mui/icons-material';

const Movie = ({ title, image, id }) => {

    const [list, setList] = useState('')


    return (
        <div className="card-container">
            <h3 className="movie-title">{title}</h3>
            <img src={image}></img>
            <div className="card-container__lower">
                <button className="lower-btn play">
                    <PlayArrowIcon />
                </button>
                <button
                    onClick={() => {
                        setList([{ image, title }])

                        console.log('clicked')
                    }}
                    className="lower-btn list">
                    +
                </button>
            </div>
        </div>
    )
}

export default Movie
