import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './movie.scss'
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { PlaceSharp } from '@mui/icons-material';
import MoviePlayer from '../../pages/MoviePlayer/MoviePlayer';

const Movie = ({ title, image, id, movieID, setmovieID, clicked, setClicked }) => {


    const { video, addVideo, addToList, removeFromList, list } = useContext(GlobalContext);
    const inList = list.find(movie => movie.id === id);

    // function for playing video
    // const playVideo = () => {
    //     addVideo(movie)
    // }

    return (
        <div className="card-container">
            <h3 className="movie-title">{title}</h3>
            <img src={image}></img>
            <div className="card-container__lower">
                <button
                    // onClick={addVideo({ title })}
                    onClick={() => {
                        // addVideo({ title })
                        setClicked(!clicked)
                        setmovieID(movieID);
                    }}
                    className="lower-btn play">
                    <PlayArrowIcon />
                </button>

                <div className="list">
                    <div className="list-label">
                        <p>{inList ? "Remove from" : "Add to"} list</p>
                    </div>

                    <button
                        onClick={() => {
                            if (inList) {

                                // let filtered = list.filter(movie => movie.id !== id);
                                // let newList = list.splice(0, list.length, ...filtered);
                                // addToList(newList);
                                removeFromList(id);

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
