import React, { useState } from "react"
import 'flowbite';
import { v1 as uuid } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

export default function FilterArticle() {
    const [ data , setData ] = useState({
        date: "",
        tags: [],
    });

    const [ Tag , setTag ] = useState("");

    let tagsHandler = () => {
        if(data.tags.length > 4) {
            toast.error("The maximum number of allowed tags is 5");
        } else {
            if(Tag === "") {
                setData({...data});
                toast.error("Please enter a correct tag name");
            } else if(data.tags.includes(Tag)) {
                setData({...data});
                toast.error("Please dont enter duplicate tags");
            } else {
                setData({ ...data } , data.tags.push(Tag));
                setTag("");
            }
        }
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <ToastContainer autoClose={5000} />
            </div>
            <div>
                <div className="flex justify-between">
                    <div className="flex mt-3 w-1/3">
                        <input className="w-full px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" placeholder="Tag..." onChange={(e) => setTag(e.target.value)} value={Tag}/>
                        <button className="ml-2 py-1 px-5 bg-mainColor text-center text-white font-thin rounded hover:bg-[#1c7bf0]" onClick={tagsHandler}>Ok</button>
                    </div>
                    <div className="w-1/2">
                        {/* filter by time and date */}
                    </div>
                </div>
                <div className="mt-3 flex flex-wrap">
                    {
                        data.tags.map((tag) => {
                            return (
                                <p key={uuid()} className="px-2 py-1 text-center bg-mainColor text-white mr-1 mb-1 rounded font-openSansSm">{tag}</p>
                            )
                        })
                    }
                </div>
                <button className="bg-mainColor px-3 py-1 text-white rounded mt-2">Filter</button>
            </div>
        </>
    )
}