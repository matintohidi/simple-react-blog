import React , { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v1 as uuid } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

export default function CreateArticle() {
    const navigate = useNavigate();

    const [ Tag , setTag ] = useState("");
    const [ data , setData ] = useState({
        title: "",
        content: "",
        tags: [],
        status: true,
        image: null
    })

	let imageHandler = (e) => {
        let formData = new FormData();
		formData.append("File" , e.target.files[0]);
        setData({...data , image: formData});
	}

    let tagHandler = (e) => {
        setTag(e.target.value);
    }

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

    let submitArticle = () => {
        if(data.title === "") {
            toast.error("Please enter a Title");
        } else if(data.content === "") {
            toast.error("Please enter a Content");
        } else {
            axios.post("http://127.0.0.1:8000/api/articles/" , data
            ,{
                headers: {
                    "Authorization": "Token c1e2919bcf61ee34682e6c1013471d77ee37c394"
                }
            }).then(() => {
                navigate("/");
                toast.success("Your Article is create");
            })
            .catch(() => toast.error("We cant submit your article"))
        }
    }

    return (
        <>
            <div className="mx-8 sm:mx-14 md:mx-18 lg:mx-22 xl:mx-32 lg:mt-24">
                <div className="flex justify-center items-center">
                    <ToastContainer autoClose={5000} />
                </div>
                <h1 className="mt-4 font-TheBrown text-2xl lg:text-3xl text-gray-600 text-center">Create Article</h1>
                <div>
                    <div className="mt-4">
                        <h1 className="text-sm font-openSansSm font-extrabold mb-1">Title of Post</h1>
                        <input className="w-full px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" placeholder="Title" onChange={(e) => setData({...data , title: e.target.value })}/>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-sm font-openSansSm font-extrabold mb-1">Content</h1>
                        <textarea className="h-40 w-full rounded overflow-hidden leading-tight border border-mainColor shadow ring-2 ring-transparent focus:ring-mainColor focus:outline-none p-2 transition-colors" placeholder="Content..." onChange={(e) => setData({ ...data , content: e.target.value })}></textarea>
                    </div>
                    <div className="md:flex md:items-center md:justify-between mt-6">
                        <div className="lg:flex">
                            <div>
                                <h1 className="text-sm font-openSansSm font-extrabold mb-1">Tags</h1>
                                <div className="flex justify-between md:mr-4">
                                    <input className="w-3/4 px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" placeholder="Tag..." onChange={tagHandler} value={Tag}/>
                                    <button className="w-1/5 py-1 bg-mainColor text-center text-white font-thin rounded hover:bg-[#1c7bf0]" onClick={tagsHandler}>Ok</button>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-wrap lg:justify-center lg:items-center">
                                {
                                    data.tags.map((tag) => {
                                        return (
                                            <p key={uuid()} className="px-2 py-1 text-center bg-mainColor text-white mr-1 mb-1 md:m-0 md:ml-1 rounded font-openSansSm">{tag}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex items-center justify-between lg:mt-6">
                            <h1 className="text-sm font-openSansSm font-extrabold mr-2">Release Status</h1>
                            <span className="relative cursor-pointer" onClick={() => setData({...data , status: !data.status })}>
                                <span className={`block w-10 h-6 ${data.status ? "bg-mainColor" : "bg-gray-400"} rounded-full shadow-inner`}></span>
                                <span className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-white transform ${data.status ? "translate-x-full" : ""}`}>
                                    <input type="checkbox" className="absolute opacity-0 w-0 h-0" />
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex mt-6 items-center justify-center bg-grey-300">
                        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-mainColor rounded-lg shadow-lg tracking-wide uppercase border border-mainColor cursor-pointer hover:bg-mainColor hover:text-white">
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <span className="mt-2 text-base leading-normal">Image Of Article</span>
                            <input type='file' name='file' className="hidden" onChange={imageHandler} />
                        </label>
                    </div>
                </div>
                <div className="mt-6 flex justify-center items-center">
                    <button className="px-5 py-1 text-center border border-mainColor bg-white text-mainColor rounded-full font-openSansSm text-sm font-bold shadow hover:bg-gray-100 transition-colors" onClick={submitArticle}>Submit Article</button>
                </div>
            </div>
        </>
    )
}