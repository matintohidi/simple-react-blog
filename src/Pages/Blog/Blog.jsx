import React , { useState } from "react";

// import media
import SerachIcon from "../../assets/media/Img/searchicon.svg";
import FilterArticle from "../../Components/Blog/FilterArticle";

export default function Blog() {
    const [ nameSearch , setNameSearch ] = useState("");

    let searchArticle = () => {
        setNameSearch("");
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="backdropCircle lg:rounded-lg rounded mt-8 lg:mt-24 py-4 sm:py-6 lg:py-10 w-3/4">
                    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
                        <h1 className="font-TheBrown text-gray-600 text-xl sm:text-2xl lg:text-3xl text-center">Search your Article name</h1>
                        <div className="relative mt-1">
                            <input className="w-full h-10 pr-3 pl-9 py-2 text-sm leading-tight border border-mainColor rounded shadow outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" onChange={(e) => setNameSearch(e.target.value)} value={nameSearch}/>
                            <img src={SerachIcon} className=" absolute w-10 h-10 top-0 cursor-pointer bg-mainColor rounded-l left-0" onClick={searchArticle} />
                        </div>
                    </div>
                    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
                        <FilterArticle />
                    </div>
                </div>
            </div>
        </>
    )
}