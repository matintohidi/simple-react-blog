import React from 'react';

// import svg
import { svg } from '../../data/svgIcons';

const Socials = ({ socials }) => {
    const { github , instagram , linkedin , telegram , website } = svg;

    return (
        <ul className="flex">
            <li className={`mr-4 last:ml-0 ${socials.github === null && 'hidden'}`}>
                <a className="inline-flex items-center justify-center w-9 h-9 backdropCard rounded bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.github}>
                    {github}
                </a>
            </li>
            <li className={`mr-4 last:ml-0 ${socials.instagram === null && 'hidden'}`}>
                <a className="inline-flex items-center justify-center w-9 h-9 rounded backdropCard bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.instagram}>
                    {instagram}
                </a>
            </li>
            <li className={`mr-4 last:ml-0 ${socials.linkedin === null && 'hidden'}`}>
                <a className="inline-flex items-center justify-center w-9 h-9 backdropCard rounded bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.linkedin}>
                    {linkedin}
                </a>
            </li>
            <li className={`mr-4 last:ml-0 ${socials.telegram === null && 'hidden'}`}>
                <a className="inline-flex items-center justify-center w-9 h-9 backdropCard rounded bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.telegram}>
                    {telegram}
                </a>
            </li>
            <li className={`mr-4 last:ml-0 ${socials.website === null && 'hidden'}`}>
                <a className="inline-flex items-center justify-center w-9 h-9 backdropCard rounded bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.website}>
                    {website}
                </a>
            </li>
        </ul>
    )
}

export default Socials;