import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './list.scss';
import Nav from '../../components/Nav/Navbar';
import Movie from '../../components/Movie/Movie';


const List = ({ image, title, id, }) => {
    const IMG_PATH = "https://image.tmdb.org/t/p/w300"
    const { list } = useContext(GlobalContext);
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
