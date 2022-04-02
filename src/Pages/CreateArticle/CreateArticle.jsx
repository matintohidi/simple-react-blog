import axios from "axios";
import React , { useState } from "react";

//import components
import AlertError from "../../Components/Alert/AlertError";

export default function CreateArticle() {
    const [ Tag , setTag ] = useState("");
    const [ data , setData ] = useState({
        title: "",
        content: "",
        tags: [],
        status: true,
        image: null
    })
    const [ error , setError ] = useState({
        status: false,
        text: "",
    })

	let imageHandler = (e) => {
        const formData = new FormData();
		formData.append("File" , e.target.files[0]);
        setData({...data , image: formData});
	};

    let tagHandler = (e) => {
        setTag(e.target.value);
    }

    let tagsHandler = () => {
        if(Tag === "") {
            setData({...data});
            setError({ status: true , text:"Please enter a correct tag name" });
            setTimeout(() => {
                setError({ status: false , text: "" })
            }, 5000);
        } else if(data.tags.includes(Tag)) {
            setData({...data});
            setError({ status: true , text:"Please dont enter duplicate tags" });
            setTimeout(() => {
                setError({ status: false , text: "" })
            }, 5000);
        } else {
            setError({ status: false , text: "" });
            setData({ ...data } , data.tags.push(Tag));
            setTag("");
        }
    }

    let submitArticle = () => {
        if(data.title === "") {
            setError({ status: true , text:"Please enter a Title" });
            setTimeout(() => {
                setError({ status: false , text: "" })
            }, 5000);
        } else if(data.content === "") {
            setError({ status: true , text:"Please enter a Content" });
            setTimeout(() => {
                setError({ status: false , text: "" });
            }, 5000);
        } else {
            setError({ status: false , text: "" });
            axios.post("http://127.0.0.1:8000/api/articles/" , data
            ,{
                headers: {
                    "Authorization": "Token cfb9fe57b9b0e52df2820dacfb3671a0c112df52"
                }
            })
        }
    }

    let num = 0;

    return (
        <div className="mx-8 sm:mx-14 md:mx-18 lg:mx-22 xl:mx-26 lg:mt-20">
            {
                error.status ? <AlertError text={error.text} /> : null
            }
            <h1 className="mt-2 font-extrabold text-xl text-black">Create Article</h1>
            <div>
                <div className="mt-4">
                    <h1 className="text-sm font-openSansSm font-extrabold mb-1">Title of Post</h1>
                    <input className="w-full px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" placeholder="Title" onChange={(e) => setData({...data , title: e.target.value })}/>
                </div>
                <div className="mt-6">
                    <h1 className="text-sm font-openSansSm font-extrabold mb-1">Content</h1>
                    <textarea className="h-40 w-full rounded overflow-hidden leading-tight border border-mainColor shadow ring-2 ring-transparent focus:ring-mainColor focus:outline-none p-2 transition-colors" placeholder="Content..." onChange={(e) => setData({ ...data , content: e.target.value })}></textarea>
                </div>
                <div className="md:flex md:items-end">
                    <div className="mt-6">
                        <h1 className="text-sm font-openSansSm font-extrabold mb-1">Tags</h1>
                        <div className="flex justify-between">
                            <input className="w-3/4 px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" placeholder="Tag..." onChange={tagHandler} value={Tag}/>
                            <button className="w-1/5 py-1 bg-mainColor text-center text-white font-thin rounded hover:bg-[#1c7bf0]" onClick={tagsHandler}>Ok</button>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-wrap md:justify-center md:items-center">
                        {
                            data.tags.map((tag) => {
                                return (
                                    <p key={num++} className="px-2 py-1 text-center bg-mainColor text-white mr-1 mb-1 md:m-0 md:ml-1 rounded font-openSansSm">{tag}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="lg:flex lg:justify-between">
                    <div className="mt-6 flex items-center justify-between">
                        <h1 className="text-sm font-openSansSm font-extrabold mr-2">Release Status</h1>
                        <span className="relative cursor-pointer" onClick={() => setData({...data , status: !data.status })}>
                            <span className={`block w-10 h-6 ${data.status ? "bg-mainColor" : "bg-gray-400"} rounded-full shadow-inner`}></span>
                            <span className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-white transform ${data.status ? "translate-x-full" : ""}`}>
                                <input type="checkbox" className="absolute opacity-0 w-0 h-0" />
                            </span>
                        </span>
                    </div>
                    <div className="flex mt-6 items-center justify-center bg-grey-300 flex-col">
                        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-mainColor rounded-lg shadow-lg tracking-wide uppercase border border-mainColor cursor-pointer hover:bg-mainColor hover:text-white">
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <span className="mt-2 text-base leading-normal">Image Of Article</span>
                            <input type='file' name='file' className="hidden" onChange={imageHandler} />
                        </label>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-center items-center">
                <button className="px-5 py-1 text-center border border-mainColor bg-white text-mainColor rounded-full font-openSansSm text-sm font-bold shadow hover:bg-gray-100 transition-colors" onClick={submitArticle}>Submit Article</button>
            </div>
        </div>
    )
}