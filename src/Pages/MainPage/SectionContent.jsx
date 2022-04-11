import React , { useState , useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

// import Components
import SectionHeader from './SectionHeader';
import ArticleCard from '../../Components/MainPage/ArticleCard';
import Footer from '../../Components/Layout/Footer';
import Loader from '../../Components/Layout/Loader';

// import Media
import Shape1 from '../../assets/media/3D object and icons/ColorWhiteMatte2.png';
import Shape2 from '../../assets/media/3D object and icons/ColorPurpleGlossy1.png';
import Shape3 from '../../assets/media/3D object and icons/ColorBlueGlossy2.png';
import Shape4 from '../../assets/media/3D object and icons/ColorGreenGlossy2.png';
import Shape5 from '../../assets/media/3D object and icons/ColorGreenGlossy1.png';
import Shape6 from '../../assets/media/3D object and icons/ColorPurpleGlossy2.png';
import Img1 from '../../assets/media/Img/1.jpg';

export default function SectionContent() {
    const [ loader , setLoader ] = useState(true);
    const [ totalPage , setTotalPage ] = useState(1);
    const [ articels , setArticles ] = useState([]);
    const [ count , setCount ] = useState(0);
    const [ next , setNext ] = useState(null);
    const [ prev , setPrev ] = useState(null);
    const [ activePage , setActivePage ] = useState(null);
    const pageNums = [];

    useEffect(() => {
        window.scrollTo(0 , 0);
        axios.get("http://127.0.0.1:8000/api/articles/")
            .then((res) => {
                setLoader(false);
                setTotalPage(res.data.total_pages);
                setArticles(res.data.results);
                setNext(res.data.next);
                setPrev(res.data.previous);
                setCount(res.data.results.length);
                setActivePage(res.data.active_page);
            });
    },[])

    let prevPageHandler = () => {
        setLoader(true);
        axios.get(prev)
            .then((res) => {
                setLoader(false);
                setTotalPage(res.data.total_pages);
                setArticles(res.data.results);
                setNext(res.data.next);
                setPrev(res.data.previous);
                setCount(res.data.results.length);
                setActivePage(res.data.active_page);
            });
    }

    let nextPageHandler = () => {
        setLoader(true);
        axios.get(next)
            .then((res) => {
                setLoader(false);
                setTotalPage(res.data.total_pages);
                setArticles(res.data.results);
                setNext(res.data.next);
                setPrev(res.data.previous);
                setCount(res.data.results.length);
                setActivePage(res.data.active_page);
            });
    }

    let paginationHandler = (e) => {
        setLoader(true);
        axios.get(`http://127.0.0.1:8000/api/articles/?page=${e.target.innerText}`)
        .then((res) => {
            setLoader(false);
            setTotalPage(res.data.total_pages);
            setArticles(res.data.results);
            setNext(res.data.next);
            setPrev(res.data.previous);
            setCount(res.data.results.length);
            setActivePage(res.data.active_page);
        });
    }

    for (let i = 1; i <= totalPage; i++) {
        pageNums.push(i);
    }

    return (
        <>
            <SectionHeader />
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
                                        <ArticleCard key={uuid()} author={article.author.username} img={article.image} title={article.title} content={article.content} day={article.formatted_date.day} month={article.formatted_date.month} year={article.formatted_date.year} id={article.id} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-16">
                        <button className={`text-black px-4 py-2 lg:px-5 lg:py-3 rounded mr-5 ring-1 ring-mainColor text-sm hover:bg-mainColor hover:text-white transition-colors ${prev === null ? "hidden" : "md:block"}`} onClick={prevPageHandler}>Previews</button>
                        <div className="hidden md:flex">
                            {
                                pageNums.map((num) => {
                                    return (
                                        <button key={uuid()} className={`cursor-pointer mr-3 px-4 py-2 lg:px-5 lg:py-3 rounded-full transition-colors ${num === activePage ? "bg-mainColor hover:bg-[#1e7bec] text-white" : "ring-1 ring-mainColor text-sm md:font-black hover:bg-[#eaebec] text-gray-600"}`} onClick={paginationHandler}>{num}</button>
                                    )
                                })
                            }
                        </div>
                        <button className={`text-black px-4 py-2 lg:px-5 lg:py-3 rounded ring-1 ring-mainColor text-sm hover:bg-mainColor hover:text-white transition-colors ${next === null ? "hidden" : "md:block"}`} onClick={nextPageHandler}>Next</button>
                    </div>
                </div>
                <img src={Shape1} className={`hidden absolute animate-[bounce_2s_linear_infinite] w-20 h-20 -z-50 bottom-[42rem] left-8 -rotate-45 ${count > 6 ? "lg:block" : "hidden"}`} />
                <img src={Shape2} className={`hidden absolute animate-[bounce_3s_linear_infinite] w-20 h-20 -z-50 top-[95rem] right-64 -rotate-45 ${count > 6 ? "lg:block" : "hidden"}`} />
                <img src={Shape3} className={`hidden absolute animate-[bounce_1.5s_linear_infinite] w-32 h-32 -z-50 top-[50rem] right-3 blur-sm ${count > 3 ? "lg:block" : "hidden"}`} />
                <img src={Shape4} className={`hidden absolute animate-[bounce_4s_linear_infinite] w-24 h-24 -z-50 right-5 blur-sm bottom-[5rem] ${count > 6 ? "lg:block" : "hidden"}`} />
                <img src={Shape5} className={`hidden absolute animate-[bounce_2s_linear_infinite] w-24 h-24 -z-50 top-72 left-3 ${count > 3 ? "lg:block" : "hidden"}`} />
                <img src={Shape6} className={`hidden absolute animate-[bounce_3s_linear_infinite] w-24 h-24 -z-50 top-[125rem] left-28 ${count > 6 ? "lg:block" : "hidden"}`} />
            </div>
            }
            <Footer />
        </>
    )
}