import React from 'react'
import './movie.scss'

const Movie = ({ title, image }) => {
    return (
        <div className="card-container">
            <img src={image}></img>
            <div className="card-container__lower">
                <div className="lower-icons">
                    <button className="play">
                        Play trailer
                    </button>
                    <button className="list">
                        +
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Movie
