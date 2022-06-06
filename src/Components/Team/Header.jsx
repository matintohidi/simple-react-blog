import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex items-center justify-center pt-4">
            <Link className="text-white hover:text-gray-300 text-sm" to="/">Home</Link>
        </header>
    )
}

export default Header;