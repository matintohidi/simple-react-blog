import React from 'react';
import { Link } from 'react-router-dom';

// import components
import Socials from '../Socials/Socials';
import { ImageLazy } from '../ImageLazy/ImageLazy';

const Author = ({ author }) => {
    const { username , socials , profile , about } = author;

    return (
        <div className="flex flex-col justify-center items-center backdropCircle rounded-md">
            <Link to={`/${username}`} className="group ring-2 ring-mainColor rounded-full mt-5 mb-2 w-28 h-28 lg:my-4 lg:w-32 lg:h-32 xl:w-40 xl:h-40">
                <ImageLazy src={profile} className="transition duration-200 transform group-hover:scale-105 object-cover rounded-full h-full w-full" alt={`${username} Profile image`} />
            </Link>
            <div className="flex flex-col items-center">
                <Link to={`/${username}`} className="text-xl font-black text-gray-800 xl:text-2xl">{username}</Link>
                { about && <p className="text-gray-700 text-sm font-light font-openSansSm mx-5 sm:mx-8 lg:mx-12 my-6 xl:text-base text-center break-all">{about}</p> }
            </div>
            <ul className="flex items-center mb-4">
                <Socials socials={socials} />
            </ul>
        </div>
    )
}

export default Author;