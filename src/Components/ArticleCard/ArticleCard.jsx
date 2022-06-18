import React from 'react';
import { Link } from 'react-router-dom';
import { numToMonth } from '../../hooks/useMonth';

// import components
import { ImageLazy } from '../ImageLazy/ImageLazy';

export default function ArticleCard ({ data }) {
    let { author , image , title , content , published , slug } = data;

    let dateFormat = new Date(published);

    return (
        <div className="m-3 md:mx-6 lg:mx-6 lg:mt-6 lg:mb-0 backdropCard rounded shadow-md col-span-1">
            <Link to={`/article/${slug}`}>
                <ImageLazy src={image} alt={content} className="rounded-t shadow-lg md:h-72 xl:h-88 h-96 w-full image" />
            </Link>
            <div className="mx-5 py-3">
                <div className="flex flex-col items-start mb-4">
                    <div className="mb-4 w-full flex justify-between">
                        <p className="text-sm font-medium font-openSansSm">{dateFormat.getDate()} , {numToMonth(dateFormat.getMonth())} , {dateFormat.getFullYear()}</p>
                        <Link to={`/${author.username.toLowerCase()}`} className="text-sm tracking-widest">{author.username}</Link>
                    </div>
                    <Link to={`/article/${slug}`}><h1 className="text-2xl font-black three-points-title">{title}</h1></Link>
                    <p className="text-sm font-medium font-openSansSm mt-3 break-all three-points">{content}</p>
                </div>
                <div className="flex">
                    <Link to={`/article/${slug}`} className="font-Mont text-gray-600 text-sm font-black h-12 flex justify-start px-6 items-center backdropCard transition-colors mt-3 rounded cursor-pointer">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}