import React from 'react';

export default function Comment({ time , text , author }) {
    let { year , month , day , hour , minute } = time;

    return (
        <div className="my-2 backdropCard rounded-md w-fit">
            <div className="mx-4 py-5 flex flex-col sm:flex-row sm:justify-between">
                <div>
                    <img src={'http://127.0.0.1:8000' + author.profile} alt={author.username + " Profile image"} className="w-20 h-20 rounded-full sm:w-24 sm:h-24 md:w-28 md:h-28"/>
                    <div className="mt-4">
                        <h1 className="text-lg font-black text-gray-800">{author.username}</h1>
                        <p className="text-base font-light font-openSansSm">{text}</p>
                    </div>
                </div>
                <div className="flex flex-col items-start sm:flex-row-reverse">
                    <div className="text-gray-600 px-4 py-2 font-bold text-sm backdropCard rounded-md mt-8 sm:mt-0 cursor-pointer hover:bg-gray-300">Reply</div>
                    <p className="text-sm font-thin font-openSansSm mt-3 sm:mt-2 ml-1 sm:mr-3 truncate">{year}/{month}/{day},{hour}:{minute}</p>
                </div>
            </div>
        </div>
    )
}