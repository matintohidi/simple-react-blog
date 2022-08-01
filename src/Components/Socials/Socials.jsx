import React from 'react';

// import svg
import { svg } from '../../data/svgIcons';

const Socials = ({ socials }) => {
    const { github , instagram , linkedin , telegram , website } = svg;

    const socilsaStyle = "inline-flex items-center justify-center w-9 h-9 rounded backdropCard bg-opacity-15 group transition duration-150 hover:bg-mainColor hover:opacity-100";

    return (
        <ul className="flex gap-x-4">
            <li className={socials.github === null ? 'hidden' : ''}>
                <a className={socilsaStyle} href={socials.github}>
                    {github}
                </a>
            </li>
            <li className={socials.instagram === null ? 'hidden' : ''}>
                <a className={socilsaStyle} href={socials.instagram}>
                    {instagram}
                </a>
            </li>
            <li className={socials.linkedin === null ? 'hidden' : ''}>
                <a className={socilsaStyle} href={socials.linkedin}>
                    {linkedin}
                </a>
            </li>
            <li className={socials.telegram === null ? 'hidden' : ''}>
                <a className={socilsaStyle} href={socials.telegram}>
                    {telegram}
                </a>
            </li>
            <li className={socials.website === null ? 'hidden' : ''}>
                <a className={socilsaStyle} href={socials.website}>
                    {website}
                </a>
            </li>
        </ul>
    )
}

export default Socials;