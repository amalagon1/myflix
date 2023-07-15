import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './list.scss';
import Nav from '../../components/Nav/Navbar';
import Movie from '../../components/Movie/Movie';
import movieTrailer from 'movie-trailer';
import MoviePlayer from '../MoviePlayer/MoviePlayer';




const List = ({ image, title, id, }) => {
    const IMG_PATH = "https://image.tmdb.org/t/p/w300"
    const { list } = useContext(GlobalContext);

    // movieTrailer('Oceans Eleven', { id: true, multi: true })
    //     .then(res => console.log(res))

    return (
        <div className="list-body">
            <Nav />
            <div >
                <h1 className='title'>My list</h1>
                {list && (
                    <div className="results">
                        {list.map(movie => (

                            // <p>{movie.title}</p>

                            <Movie
                                key={movie.id}
                                id={movie.id}
                                movieID={movie.id}
                                title={movie.title}
                                image={movie.image}
                            />
                        ))}
                    </div>

                )}
            </div>

        </div>
    )
}

export default List
