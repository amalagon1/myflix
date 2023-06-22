import React from 'react'
import './movie.scss'

const Movie = ({ title, image }) => {
    return (
        <div className="card-container">
            <img src={image}></img>
            <div className="card-container__lower">
                <button className="play">
                    <p>Play trailer</p>
                </button>
                <button className="list">
                    +
                </button>
            </div>
        </div>
    )
}

export default Movie
