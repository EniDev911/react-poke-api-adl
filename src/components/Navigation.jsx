import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const setActive = ({ isActive }) => (isActive ? "active" : "noactive");
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={setActive} end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/pokemones" className={setActive}>Pokemones</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation