import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleCard(props) {
    let { author , img , title , content , day , month , year , id } = props;

    const monthOfYear = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

    switch (month) {
        case 1 :
            month = monthOfYear[0];
            break;
        case 2 :
            month = monthOfYear[1];
            break;
        case 3 :
            month = monthOfYear[2];
            break;
        case 4 :
            month = monthOfYear[3];
            break;
        case 5 :
            month = monthOfYear[4];
            break;
        case 6 :
            month = monthOfYear[5];
            break;
        case 7 :
            month = monthOfYear[6];
            break;
        case 8 :
            month = monthOfYear[7];
            break;
        case 9 :
            month = monthOfYear[8];
            break;
        case 10 :
            month = monthOfYear[9];
            break;
        case 11 :
            month = monthOfYear[10];
            break;
        case 12 :
            month = monthOfYear[11];
            break;
        default:
            break;
    }

    return (
        <div className="m-3 md:mx-6 lg:mx-6 lg:mt-6 lg:mb-0 backdropCard rounded shadow-md col-span-1">
            <img loading="lazy" src={img} className={`rounded-t shadow-lg md:h-72 xl:h-88 h-96 w-full image ${img == undefined ? "hidden" : ""}`} />
            <div className="mx-5 py-3">
                <div className="mb-4">
                    <div className="mb-4 flex justify-between">
                        <p className="text-sm font-medium font-openSansSm">{day} , {month} , {year}</p>
                        <h1 className="text-sm tracking-widest capitalize">{author}</h1>
                    </div>
                    <h1 className="text-2xl font-black three-points">{title}</h1>
                    <p className="text-sm font-medium font-openSansSm mt-3 break-words three-points">{content}</p>
                </div>
                <div className="flex ml-0 mx-auto">
                    <Link to={`/article/${id}`} className="text-gray-600 text-sm font-black">
                        <div className="w-auto h-12 flex justify-start px-6 items-center backdropCard hover:bg-[#d1d3d6] transition-colors mt-3 rounded cursor-pointer">Read More</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}