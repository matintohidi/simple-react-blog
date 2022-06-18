import React from "react";
import { v1 as uuid } from 'uuid';
import { useBlog } from "../../context/context";
import { filterArticles } from "../../services";

//import components
import ArticleCard from '../ArticleCard/ArticleCard';
import Shape from '../../Components/Layout/Shape';

const Articles = () => {
    let { filterArticle , setFilterArticle } = useBlog();
    let { results , active_page , next , previous } = filterArticle;

    const pageHandler = (type) => {
        window.scrollTo(0 , 0);
        
        filterArticles(type , true)
            .then(res => setFilterArticle(res.data))
            .catch(err => console.log(err.response))
    }


    return (
            <div className={`relative mb-5 ${results.length === 0 ? 'hidden' : ''}`}>
                <div className="mx-4 md:mx-12 lg:mx-20 mt-16 z-10">
                    <div className="backdropCircle rounded shadow-md">
                        <div className="mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                {
                                    results.map((data) => {
                                        return (
                                            <ArticleCard key={uuid()} data={data} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex justify-center items-center mb-16">
                            <button onClick={() => pageHandler(previous)} className={`text-mainColor px-5 py-3 rounded mr-5 ring-1 ring-mainColor text-sm hover:bg-mainColor hover:text-white transition-colors ${previous === null ? "hidden" : "block"}`}>Previews</button>
                            <p className="px-5 py-3 rounded-full mr-5 ring-1 ring-mainColor text-sm bg-mainColor text-white transition-colors">{active_page}</p>
                            <button onClick={() => pageHandler(next)} className={`text-mainColor px-5 py-3 rounded ring-1 ring-mainColor text-sm hover:bg-mainColor hover:text-white transition-colors ${next === null ? "hidden" : "block"}`}>Next</button>
                        </div>
                    </div>
                </div>
                <Shape count={results.length} shapeDisplay={false} />
            </div>
    )
}

export default Articles;