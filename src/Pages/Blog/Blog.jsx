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
        <div className="backdropCircle lg:rounded-lg rounded mt-4 mx-8">
            <div className="mx-4">
                <h1 className="font-TheBrown text-gray-800 text-lg text-center">Search your Article name</h1>
                <div className="relative mt-1">
                    <input className="w-full h-8 pr-3 pl-9 py-1 text-sm leading-tight border border-mainColor rounded shadow outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" onChange={(e) => setNameSearch(e.target.value)} value={nameSearch}/>
                    <img src={SerachIcon} className=" absolute w-8 h-8 top-0 cursor-pointer bg-mainColor rounded-l left-0" onClick={searchArticle} />
                </div>
            </div>
            <div className="m-4">
                <div className="mt-4">
                    <FilterArticle />
                </div>
                <div className="mt-4">

                </div>
            </div>
        </div>
    )
}