import React from 'react';
import './list.scss';
import Nav from '../../components/Nav/Navbar';
import Movie from '../../components/Movie/Movie';


const List = ({ image, title, id, list }) => {
    return (
        <div>
            <Nav />
            <h1 className='title'>My list</h1>
            {list && (
                <div className="results">
                    {list.map(movie => (

                        // <li key={m.id}>
                        //     {m.title}
                        // </li>
                        < Movie

                            id={movie.id}

                        />
                    ))}
                </div>

            )}
        </div>
    )
}

export default List
