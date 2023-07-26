import { useContext, useState, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './list.scss';
import Nav from '../../components/Nav/Navbar';
import Movie from '../../components/Movie/Movie';
import movieTrailer from 'movie-trailer';
import MoviePlayer from '../MoviePlayer/MoviePlayer';




const List = ({ image, title, id, }) => {
    const [clicked, setClicked] = useState(false);
    const [movieID, setmovieID] = useState(null)

    const KEY = process.env.REACT_APP_MOVIE_API_KEY
    const IMG_PATH = "https://image.tmdb.org/t/p/w300"
    const { list } = useContext(GlobalContext);

    const ref = useRef(null);

    const handleScroll = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // movieTrailer('Oceans Eleven', { id: true, multi: true })
    //     .then(res => console.log(res))

    return (
        <div className="list-body">
            <div
                onClick={() => { setClicked(!clicked) }}
                className={clicked ? "backdrop" : "backdrop-hidden"}>
                {clicked && <MoviePlayer movieID={movieID} KEY={KEY} />}
            </div>
            <Nav />
            <div >
                <h1 className='title'>My list</h1>
                {list && (
                    <div className="results">
                        {list.map(movie => (

                            // <p>{movie.title}</p>

                            <Movie
                                handleScroll={handleScroll}
                                key={movie.id}
                                id={movie.id}
                                movieID={movie.id}
                                title={movie.title}
                                image={movie.image}
                                setClicked={setClicked}
                                clicked={clicked}
                                movieId={movieID}
                                setmovieID={setmovieID}
                            />
                        ))}
                    </div>

                )}
            </div>

        </div>
    )
}

export default List
