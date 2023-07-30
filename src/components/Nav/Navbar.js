

import { useState, } from 'react';
import { useNavigate } from 'react-router-dom'
import { Notifications, Search, ArrowDropDown } from '@mui/icons-material';
import { getAuth, signOut } from "firebase/auth";
import List from '../../pages/List/List';
import './nav.scss'

import {
    Link, Routes, Route
} from "react-router-dom";

const Nav = ({ scroll, setscroll }) => {

    const [hovered, setHovered] = useState(false);

    const navigate = useNavigate();

    const handleHover = () => {
        setHovered(!hovered);
    };

    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate("/")
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        // <div className={scroll ? 'nav-dark' : 'navbar'}>
        <div className={`navbar ${scroll && "nav-dark"}`}>
            <div className="left">
                <div className="logo">
                    <h1 className="thing">MyFlix</h1>
                </div>
                <p style={{ display: 'none' }}>Browse</p>
                <div>
                    <ul className='links'>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/list" >My List</Link>
                        </li>
                    </ul>

                </div>
            </div>

            <div className="icons">
                <Search />
                <Notifications />
                <div className="profile">

                    <img style={{ height: "40px" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
                    <div className="arrow">
                        <ArrowDropDown />
                    </div>

                    <div className="status_dropdown">
                        <button onClick={logout}>Logout</button>
                    </div>

                </div>

            </div>

        </div>
    )



}

export default Nav
