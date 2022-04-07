import React , { useState , useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

// import Components
import SectionHeader from './SectionHeader';
import ArticleCard from '../../Components/MainPage/ArticleCard';
import Footer from '../../Components/Layout/Footer';

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

    return (
        <>
            <SectionHeader />
            {
                loader ? <div className="flex justify-center h-screen items-center">
                        <svg role="status" className="mr-2 w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div> : <div className="relative mb-5">
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
                        <button className={`text-gray-600 px-4 py-2 lg:px-5 lg:py-3 rounded mr-5 ring-1 ring-mainColor text-sm md:font-black hover:bg-mainColor hover:text-white transition-colors ${prev === null ? "hidden" : "md:block"}`} onClick={prevPageHandler}>Previews</button>
                        <div className="hidden md:flex">
                            {
                                next !== null ? <>
                                <button className={`cursor-pointer mr-3 px-4 py-2 lg:px-5 lg:py-3 rounded-full transition-colors ${activePage === activePage ? "bg-mainColor hover:bg-[#1e7bec] text-white" : "ring-1 ring-mainColor text-sm md:font-black hover:bg-[#eaebec] text-gray-600"}`} onClick={paginationHandler}>{activePage}</button>
                                <button className={`cursor-pointer mr-3 px-4 py-2 lg:px-5 lg:py-3 rounded-full transition-colors ${activePage + 1 === activePage ? "bg-mainColor hover:bg-[#1e7bec] text-white" : "ring-1 ring-mainColor text-sm md:font-black hover:bg-[#eaebec] text-gray-600"} ${activePage + 1 > totalPage ? "hidden" : ""}`} onClick={paginationHandler}>{activePage + 1}</button>
                                <button className={`cursor-pointer mr-3 px-4 py-2 lg:px-5 lg:py-3 rounded-full transition-colors ${activePage + 2 === activePage ? "bg-mainColor hover:bg-[#1e7bec] text-white" : "ring-1 ring-mainColor text-sm md:font-black hover:bg-[#eaebec] text-gray-600"} ${activePage + 2 > totalPage ? "hidden" : ""}`} onClick={paginationHandler}>{activePage + 2}</button>
                                </> : <button className={`cursor-pointer mr-3 px-4 py-2 lg:px-5 lg:py-3 rounded-full transition-colors ${activePage === activePage ? "bg-mainColor hover:bg-[#1e7bec] text-white" : "ring-1 ring-mainColor text-sm md:font-black hover:bg-[#eaebec] text-gray-600"}`} onClick={paginationHandler}>{activePage}</button>
                            }
                        </div>
                        <button className={`text-gray-600 px-4 py-2 lg:px-5 lg:py-3 rounded ring-1 ring-mainColor text-sm md:font-black hover:bg-mainColor hover:text-white transition-colors ${next === null ? "hidden" : "md:block"}`} onClick={nextPageHandler}>Next</button>
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