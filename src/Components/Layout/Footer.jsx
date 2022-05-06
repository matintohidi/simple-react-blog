import React from 'react';
import { useLocation } from 'react-router-dom';

//impirt Media
import Shape1 from '../../assets/media/3D object and icons/Ellipse 20.png';
import Shape2 from '../../assets/media/3D object and icons/Ellipse 28.png';
import Shape3 from '../../assets/media/3D object and icons/Vector.png';

export default function Footer() {
    const location = useLocation();

    return (
        <div className={`flex flex-col justify-center items-center bg-[#222433] py-16 relative ${location.pathname === '/Login' && 'hidden' || location.pathname === '/SignUp' && 'hidden' }`}>
            <p className="text-sm font-thin font-openSansSm text-gray-300">Copyright &#169; 2022 | <a href="#" className="font-bold text-white">ReadIT</a></p>
            <p className="text-sm font-thin font-openSansSm text-gray-300">All rights reserved</p>
            <img src={Shape3} className="absolute bottom-0 left-0 w-24 h-14" />
            <img src={Shape2} className="absolute top-0 right-36 hidden md:block xl:w-14 xl:h-14 xl:right-0 xl:left-56 xl:top-4" />
            <img src={Shape1} className="absolute bottom-0 right-12 h-28 hidden xl:block" />
        </div>
    )
}