import React from 'react'
import './movie.scss'

const Movie = ({ title, image }) => {
    return (
        <div className="movie-container">
            <img src={image}></img>
        </div>
    )
}

export default Movie
