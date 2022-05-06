import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v1 as uuid } from 'uuid';
import { getArticles } from '../../services';

// import Components
import Header from './Header';
import ArticleCard from '../../Components/Home/ArticleCard';
import Footer from '../../Components/Layout/Footer';
import Loader from '../../Components/Layout/Loader';
import Shape from '../../Components/Layout/Shape';

// import Media
import Img1 from '../../assets/media/Img/1.jpg';

export default function SectionContent() {
    const [ loader , setLoader ] = useState(true);
    const [ articels , setArticles ] = useState([]);
    const [ count , setCount ] = useState(0);

    useEffect(() => {
        window.scrollTo(0 , 0);
        getArticles()
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
                    <div className="m-3 md:m-6 lg:m-0 lg:mx-6 lg:mt-10 backdropCard rounded lg:flex">
                        <img loading="lazy" src={Img1} className="rounded-t lg:rounded shadow-lg lg:w-80 lg:h-80" />
                        <div className="mx-5 py-3 lg:flex flex-col items-center justify-around">
                            <div>
                                <p className="text-sm font-medium font-openSansSm">12 January, 2021</p>
                                <h2 className="text-2xl font-black">The Master Of Disaster</h2>
                                <p className="text-sm font-medium font-openSansSm mt-3 break-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet </p>
                            </div>
                            <div className="flex ml-0 mx-auto">
                                <div className="w-auto h-12 flex justify-start px-6 items-center backdropCard hover:bg-[#d1d3d6] transition-colors mt-3 rounded cursor-pointer">
                                    <Link to="/" className="text-gray-600 text-sm font-black">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            {
                                articels.map((article) => {
                                    return (
                                        <ArticleCard key={uuid()} author={article.author.username} img={article.image} title={article.title} content={article.content} day={article.formatted_date.day} month={article.formatted_date.month} year={article.formatted_date.year} slug={article.slug} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-16">
                        <Link to="/articles/page" className="px-5 py-3 rounded-full transition-colors ring-1 ring-mainColor text-sm hover:bg-[#eaebec] text-mainColor">See More</Link>
                    </div>
                </div>
                <Shape count={count} shapeDisplay={true} />
            </div>
            }
        </>
    )
}