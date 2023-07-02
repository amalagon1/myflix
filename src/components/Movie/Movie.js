import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './movie.scss'
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { PlaceSharp } from '@mui/icons-material';

const Movie = ({ title, image, id }) => {

    const { addToList, removeFromList, list } = useContext(GlobalContext);
    const inList = list.find(movie => movie.id === id);


    // const listDisabled = inList ? true : false;

    return (
        <div className="card-container">
            <h3 className="movie-title">{title}</h3>
            <img src={image}></img>
            <div className="card-container__lower">
                <button className="lower-btn play">
                    <PlayArrowIcon />
                </button>

                <div className="list">
                    <div className="list-label">
                        <p>{inList ? "Remove from" : "Add to"} list</p>
                    </div>

                    <button
                        onClick={() => {
                            if (inList) {
                                // console.log("hello")
                                // let filtered = list.filter(movie => movie.id !== id);
                                // let newList = list.splice(0, list.length, ...filtered);
                                // addToList(newList);
                                removeFromList(id);
                                // console.log(newList);


                            } else {
                                addToList({ title, image, id })
                                console.log(list)
                            }
                        }}
                        className="lower-btn list">
                        {inList ? "-" : "+"}

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Movie
