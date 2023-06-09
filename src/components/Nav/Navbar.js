
import { Notifications, Search } from '@mui/icons-material'
import React from 'react'
import './nav.scss'

import {

    Link
} from "react-router-dom";

const Nav = ({ scroll, setscroll }) => {
    return (
        // <div className={scroll ? 'nav-dark' : 'navbar'}>
        <div className={`navbar ${scroll && "nav-dark"}`}>
            <div className="logo">
                <h1>MyFlix</h1>
            </div>
            <p style={{ display: 'none' }}>Browse</p>
            <div className='links'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tv">TV Shows</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/list">My List</Link>
                    </li>
                </ul>
                <a>Home</a>
                <a>TV Shows</a>
                <a>Movies</a>
                <a>New & Popular</a>
                <a>My List</a>
            </div>
            <div className="icons">
                <Search />
                <Notifications />
                <img style={{ height: "40px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
            </div>
        </div>
    )
}

export default Nav
