import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v1 as uuid } from 'uuid';
import { getArticles } from '../../services';

// import Components
import Header from './Head';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';
import Loader from '../../Components/Layout/Loader';
import Shape from '../../Components/Layout/Shape';
import TopicArticle from '../../Components/Home/TopicArticle';

export default function SectionContent() {
    const [ loader , setLoader ] = useState(true);
    const [ articels , setArticles ] = useState([]);
    const [ count , setCount ] = useState(0);

    useEffect(() => {
        window.scrollTo(0 , 0);
        getArticles(undefined , 'published')
            .then((res) => {
                setLoader(false);
                setArticles(res.data.results);
                setCount(res.data.results.length);
            });
    },[])

    return (
        <>
            <Header />
            {
                loader ? <Loader /> : <div className="relative mb-5">
                <div className="backdropCircle rounded mx-4 md:mx-12 lg:mx-20 mt-16 shadow-md z-10">
                    <TopicArticle />
                    <div className="mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            {
                                articels.map((data) => {
                                    return (
                                        <ArticleCard key={uuid()} data={data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-16">
                        <Link to="/articles" className="px-5 py-3 rounded-full transition-colors ring-1 ring-mainColor text-sm text-mainColor">See More</Link>
                    </div>
                </div>
                <Shape count={count} />
            </div>
            }
        </>
    )
}