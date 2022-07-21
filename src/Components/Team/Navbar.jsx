import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-center gap-x-4">
            <NavLink className="text-white text-sm" to="/">Home</NavLink>
            <NavLink className="text-white text-sm" to="/blog">Blog</NavLink>
            <NavLink className="text-white text-sm" to="/team">Team</NavLink>
        </nav>
    )
}

export default Navbar;