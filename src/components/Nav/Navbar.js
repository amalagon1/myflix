
import { Notifications, Search } from '@mui/icons-material'
import React from 'react'
import './nav.scss'

const Nav = ({ scroll, setscroll }) => {
    return (
        // <div className={scroll ? 'nav-dark' : 'navbar'}>
        <div className={`navbar ${scroll && "nav-dark"}`}>
            <div className="logo">
                <h1>MyFlix</h1>
            </div>
            <p style={{ display: 'none' }}>Browse</p>
            <div className='links'>
                <a>Home</a>
                <a>TV Shows</a>
                <a>Movies</a>
                <a>New & Popular</a>
                <a>My List</a>
            </div>
            <div className="icons">
                <Search />
                <Notifications />
            </div>
        </div>
    )
}

export default Nav
