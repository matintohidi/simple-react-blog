import React from 'react';
import Avatar from 'react-nice-avatar';
import { Link } from 'react-router-dom';

// import components
import Socials from '../Socials/Socials';
import { ImageLazy } from '../ImageLazy/ImageLazy';

const Author = ({ author }) => {
    const { username , socials , profile , about } = author;

    const config = {
        "sex": "man",
        "faceColor": "#F9C9B6",
        "earSize": "small",
        "eyeStyle": "oval",
        "noseStyle": "round",
        "mouthStyle": "smile",
        "shirtStyle": "hoody",
        "glassesStyle": "none",
        "hairColor": "#000",
        "hairStyle": "thick",
        "hatStyle": "none",
        "hatColor": "#F48150",
        "eyeBrowStyle": "up",
        "shirtColor": "#FC909F",
        "bgColor": "linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)"
    }

    return (
        <div className="flex flex-col justify-center items-center backdropCircle rounded-md">
            <Link to={`/${username}`} className="rounded-full">
                {
                    profile === null ? <Avatar className="rounded-full mt-5 mb-2 w-28 h-28 lg:my-4 lg:w-32 lg:h-32 xl:w-40 xl:h-40" { ...config } /> : <ImageLazy src={profile} className={'object-cover rounded-full mt-5 mb-2 w-28 h-28 lg:my-4 lg:w-32 lg:h-32 xl:w-40 xl:h-40'} alt={username} />
                }
            </Link>
            <div className="flex flex-col items-center">
                <Link to={`/${username}`} className="text-xl font-black text-gray-800 xl:text-2xl">{username}</Link>
                <p className="text-gray-700 text-sm font-light font-openSansSm mx-5 sm:mx-8 lg:mx-12 my-6 xl:text-base text-center break-all">{about}</p>
            </div>
            <ul className="flex items-center mb-4">
                <Socials socials={socials} />
            </ul>
        </div>
    )
}

export default Author;