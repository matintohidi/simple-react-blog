import React from "react";
import { v1 as uuid } from 'uuid';

// import Components
import Comment from "./Comment";

export default function Comments(props) {

    return (
        <>
            <div className="flex flex-col justify-center items-end">
                {
                    props.comments.length === 0 ? <div className="mx-auto">
                        <div className="text-gray-700 my-6 px-8 py-4 backdropCard rounded-md text-center">This article don't have comment</div>
                    </div> : props.comments.map((comment) => {
                        return (
                            <Comment key={uuid()} time={comment.formatted_date} text={comment.content} author={comment.author} />
                        )
                    })
                }
            </div>
            <div>
                <h1 className="mt-6 text-xl font-black text-gray-700 tracking-tight">Leave A Comment</h1>
                <div className="mt-4 flex flex-col justify-center items-center">
                    <textarea className="backdropCard h-32 w-full rounded-md overflow-y-scroll scrollBar ring-mainColor focus:ring-1 border-none outline-none text-gray-600 px-4 py-2 transition-colors" placeholder="Message..."></textarea>
                    <div className="text-gray-600 px-4 py-2 font-bold text-sm backdropCard rounded-md my-4 cursor-pointer hover:bg-gray-300 transition-colors">Comment</div>
                </div>
            </div>
        </>
    )
}