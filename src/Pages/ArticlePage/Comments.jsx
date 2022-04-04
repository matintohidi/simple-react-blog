import React from "react";

// import Components
import Comment from "../../Components/ArticlePage/Comment";

export default function Comments() {
    return (
        <>
            <div className="flex flex-col justify-center items-end">
                <Comment time={"Today , 12:38"} text={"Hello guys, My name is Matin Tohidi and i living Iran , My favorite job is Programming , Lorem ipsum dolor sit amet consectetur adipisicing elit Hello guys, My name is Matin Tohidi"} />
                <Comment time={"December , 2 , 19:48"} text={"It's so Nice!!"} />
                <Comment time={"April , 18 , 01:00"} text={"Hello guys, My name is Matin Tohidi and i living Iran"} />
                <Comment time={"2021 , December , 1 , 1:10"} text={"Hello guys, My name is Matin Tohidi and i living Iran , My favorite job is Programming"} />
            </div>
            <div>
                <h1 className="mt-6 text-2xl font-black text-gray-700 tracking-tight">Leave A Comment</h1>
                <div className="mt-4 flex flex-col justify-center items-center">
                    <textarea className="backdropCard h-32 w-full rounded-md overflow-hidden ring-2 ring-transparent focus:ring-mainColor focus:outline-none text-gray-600 placeholder:text-gray-500 p-2 transition-colors" placeholder="Message..."></textarea>
                    <div className="text-gray-600 px-4 py-2 font-bold text-sm backdropCard rounded-md my-4 cursor-pointer hover:bg-gray-300 transition-colors">Comment</div>
                </div>
            </div>
        </>
    )
}