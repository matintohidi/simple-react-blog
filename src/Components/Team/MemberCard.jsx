import React from 'react';

// import components
import { ImageLazy } from '../ImageLazy/ImageLazy';
import { svg } from '../../data/svgIcons';

const TeamCard = ({ data }) => {
    const { profile , name , basin , socials } = data;
    const { github , instagram , linkedin , telegram } = svg;

    return (
        <div className="flex flex-col rounded-2xl items-start transition duration-300 card opacity-50 hover:opacity-100 group hover:md:-translate-y-6">
            <div className="p-5 sm:p-10">
                <ImageLazy src={profile} className="rounded-lg w-full object-cover grayscale group-hover:grayscale-0" />
                <div className="mt-2">
                    <h1 className="font-MontBold text-lg font-bold text-white">{name}</h1>
                    <h2 className="text-gray-300 font-Mont font-thin text-sm mt-2">{basin}</h2>
                </div>
                <ul className="flex mt-6 justify-center gap-x-4">
                    <li className={`cursor-pointer opacity-0 transition translate-y-10 delay-100 group-hover:opacity-100 group-hover:translate-y-0 ${socials.github === undefined ? 'hidden' : ''}`}>
                        <a className="inline-flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 backdropCard rounded-full bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.github}>
                            {github}
                        </a>
                    </li>
                    <li className={`cursor-pointer opacity-0 transition translate-y-10 delay-100 group-hover:opacity-100 group-hover:translate-y-0 ${socials.instagram === undefined ? 'hidden' : ''}`}>
                        <a className="inline-flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 backdropCard rounded-full bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.instagram}>
                            {instagram}
                        </a>
                    </li>
                    <li className={`cursor-pointer opacity-0 transition translate-y-10 delay-100 group-hover:opacity-100 group-hover:translate-y-0 ${socials.linkedin === undefined ? 'hidden' : ''}`}>
                        <a className="inline-flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 backdropCard rounded-full bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.linkedin}>
                            {linkedin}
                        </a>
                    </li>
                    <li className={`cursor-pointer opacity-0 transition translate-y-10 delay-100 group-hover:opacity-100 group-hover:translate-y-0 ${socials.telegram === undefined ? 'hidden' : ''}`}>
                        <a className="inline-flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 backdropCard rounded-full bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.telegram}>
                            {telegram}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TeamCard