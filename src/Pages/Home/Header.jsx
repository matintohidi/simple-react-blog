import React from 'react';
import { Link } from 'react-router-dom';

// import media
import Shape1 from '../../assets/media/3D object and icons/ColorWhiteGlossy.png';
import Shape2 from '../../assets/media/3D object and icons/ColorGreenGlossy.png';
import Shape3 from '../../assets/media/3D object and icons/RoundCubeWhiteGlossy.png';
import Shape4 from '../../assets/media/3D object and icons/ColorBlueGlossy.png';
import Shape5 from '../../assets/media/3D object and icons/ColorOrangeGlossy.png';
import ArrorDown from '../../assets/media/3D object and icons/Icon.svg';

export default function Header() {
    return (
        <div className="relative lg:mt-36">
            <div className="flex flex-col justify-center items-center mt-12 w-full">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <h2 className="font-extrabold text-2xl text-gray-700">If You Read,</h2>
                    <h2 className="font-extrabold text-2xlfont-extrabold text-2xl text-gray-700 md:ml-1">Read It</h2>
                </div>
                <p className="text-sm font-medium text-center font-openSansSm mt-4 mx-8 md:mx-48 lg:mx-72 xl:mx-96 2xl:mx-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet</p>
                <Link to="/CreateArticle" className="mt-5 px-7 py-2 bg-mainColor hover:bg-[#1a79ee] transition-colors rounded flex items-center justify-center">
                    <p className="font-bold text-white">Write Your Article</p>
                </Link>
            </div>
            <div className="relative block lg:hidden">
                <img src={Shape1} className="h-12 w-12 absolute right-10 top-2"/>
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full absolute top-8 right-7 backdropCircle"></div>
                <img src={Shape4} className="md:h-12 md:w-12 h-11 w-11 z-10 absolute right-10 top-12"/>
                <img src={Shape3} className="md:h-11 ms:w-11 w-9 h-9 z-10 absolute right-[90px] md:right-[110px] top-16"/>
                <img src={Shape2} className="h-10 w-10 z-10 absolute right-14 md:right-20 md:top-28 top-24"/>
                <img src={Shape5} className="h-12 w-12 absolute md:right-1/3 right-1/2 top-16 blur-sm"/>
            </div>
            <img src={Shape3} className="lg:block hidden absolute right-20 z-20 top-52 h-16 w-16"/>
            <div className="lg:block hidden w-44 h-44 rounded-full absolute backdropCircle z-10 right-10 top-48"></div>
            <img src={Shape4} className="lg:block hidden w-16 h-16 absolute z-20 right-24 top-72"/>
            <img src={Shape2} className="lg:block hidden h-12 w-12 absolute right-48 top-64"/>
            <img src={Shape5} className="lg:block hidden h-20 w-20 absolute -z-10 right-1/4 top-64 blur-sm"/>
            <div className="flex justify-center mt-32 ">
                <div className="animate-bounce flex justify-center items-center rounded-full h-12 w-12 bg-customLightColor hover:bg-[#c9ccd3] transition-colors">
                    <img src={ArrorDown} className="w-8 h-8"/>
                </div>
            </div>
        </div>
    )
}