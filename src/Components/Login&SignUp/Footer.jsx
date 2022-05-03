import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    const listItemClassLg = 'text-gray-600 hover:text-black transition-colors text-sm';

    return (
        <ul className="flex items-center justify-center">
            <li className={listItemClassLg}>
                <Link to="/">Home</Link>
            </li>
            <li className={`mx-4 ${listItemClassLg}`}>
                <Link to="/contact">Contact</Link>
            </li>
            <li className={listItemClassLg}>
                <Link to="/team">Team</Link>
            </li>
        </ul>
    )
}

export default Footer