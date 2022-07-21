import React from 'react';
import { useBlog } from '../../context/context';

// import components
import Navigation from './Navbar/Navigation';
import NavigationMobile from './Navbar/NavigationMobile';

const Header = () => {
    let { headerAndFooterDisplay } = useBlog();

    return (
        <header className={`lg:mt-4 mt-2 w-full ${headerAndFooterDisplay ? 'hidden' : '' }`}>
            <Navigation />
            <NavigationMobile />
        </header>
    )
}

export default Header;