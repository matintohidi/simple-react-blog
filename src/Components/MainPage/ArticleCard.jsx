import React from 'react';
import { Link } from 'react-router-dom';
import { numToMonth } from '../../hooks/useMonth';

export default function ArticleCard(props) {
    let { author , img , title , content , day , month , year , slug } = props;

    return (
        <div className="m-3 md:mx-6 lg:mx-6 lg:mt-6 lg:mb-0 backdropCard rounded shadow-md col-span-1">
            <img loading="lazy" src={img} className={`rounded-t shadow-lg md:h-72 xl:h-88 h-96 w-full image ${img === undefined ? "hidden" : ""}`} />
            <div className="mx-5 py-3">
                <div className="mb-4">
                    <div className="mb-4 flex justify-between">
                        <p className="text-sm font-medium font-openSansSm">{day} , {numToMonth(month)} , {year}</p>
                        <h1 className="text-sm tracking-widest capitalize">{author}</h1>
                    </div>
                    <h1 className="text-2xl font-black three-points">{title}</h1>
                    <p className="text-sm font-medium font-openSansSm mt-3 break-words three-points">{content}</p>
                </div>
                <div className="flex ml-0 mx-auto">
                    <Link to={`/article/${slug}`} className="text-gray-600 text-sm font-black">
                        <div className="w-auto h-12 flex justify-start px-6 items-center backdropCard hover:bg-[#d1d3d6] transition-colors mt-3 rounded cursor-pointer">Read More</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}