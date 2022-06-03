import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    const listItemClassLg = 'text-white hover:font-bold transition text-sm';

    return (
        <ul className="flex items-center justify-center pt-4">
            <li className={listItemClassLg}>
                <Link to="/">Home</Link>
            </li>
            <li className={`mx-4 ${listItemClassLg}`}>
                <Link to="/contact">Contact</Link>
            </li>
            <li className={listItemClassLg}>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
    )
}

export default Footer;