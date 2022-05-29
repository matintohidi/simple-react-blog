import React , { useState } from 'react';

export default function Comment({ date , text , author }) {
    let dateFormat = new Date(date);

    const [ reply , setReply ] = useState(false);

    const replyHandler = (e) => {
        e.preventDefault();

        console.log(e)
    }

    return (
        <>
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
                        <button onClick={() => setReply(!reply)} className="text-gray-600 px-4 py-2 font-bold text-sm backdropCard rounded-md mt-8 sm:mt-0 cursor-pointer hover:bg-gray-300">Reply</button>
                        <p className="text-sm font-thin font-openSansSm mt-3 sm:mt-2 ml-1 sm:mr-3 truncate">{dateFormat.getFullYear()}/{dateFormat.getMonth()}/{dateFormat.getDate()},{dateFormat.getHours() + 1}:{dateFormat.getMinutes() + 1}</p>
                    </div>
                </div>
            </div>
            <form onSubmit={(e) => replyHandler(e)} className={`mt-4 flex-col justify-center items-center ${reply ? 'flex' : 'hidden'}`}>
                <textarea name='content' className="backdropCard h-32 w-full rounded-md overflow-y-scroll scrollBar ring-mainColor focus:ring-1 border-none outline-none text-gray-600 px-4 py-2 transition-colors" placeholder="Message..."></textarea>
                <button className="text-gray-600 px-4 py-2 font-bold text-sm backdropCard rounded-md my-4 cursor-pointer hover:bg-gray-300 transition-colors">Comment</button>
            </form>
        </>
    )
}