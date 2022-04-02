import React, { useState } from "react"
import 'flowbite';

//import components
import AlertError from "../../Components/Alert/AlertError";

export default function FilterArticle() {
    let num = 0;
    const [ data , setData ] = useState({
        date: "",
        tags: [],
    });

    const [ Tag , setTag ] = useState("");
    const [ error , setError ] = useState({
        status: false,
        text: "",
    })

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

    console.log(data)

    return (
        <>
            {
                error.status ? <AlertError text={error.text} /> : null
            }
            <div id="accordion-collapse" data-accordion="collapse" className="mt-4">
                <h2 id="accordion-collapse-heading-2">
                    <button type="button" className="flex justify-between items-center p-5 w-full text-left text-gray-500 outline-none focus:bg-inherit" data-accordion-target="#accordion-collapse-body-2">
                    <span>Filter Article</span>
                    <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-2" className="hidden mx-2">
                    <div>
                        <div className="flex justify-between mt-3">
                            <input className="w-3/4 px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" placeholder="Tag..." onChange={tagHandler} value={Tag}/>
                            <button className="w-1/5 py-1 bg-mainColor text-center text-white font-thin rounded hover:bg-[#1c7bf0]" onClick={tagsHandler}>Ok</button>
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
                        <button className="bg-mainColor px-3 py-1 text-white rounded-md">Filter</button>
                    </div>
                </div>
            </div>
        </>
    )
}