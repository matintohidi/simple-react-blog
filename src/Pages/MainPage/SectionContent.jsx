import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    const [ totalPage , setTotalPage ] = useState(1);
    const [ articels , setArticles ] = useState([]);
    const [ next , setNext ] = useState();
    const [ prev , setPrev ] = useState();
    const [ count , setCount ] = useState(0);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/articles/")
            .then((res) => {
                setTotalPage(res.data.total_pages);
                setArticles(res.data.results);
                setNext(res.data.next);
                setPrev(res.data.previous);
                setCount(res.data.count);
            })
            .catch(err => console.log(err));
    },[])

    return (
        <>
            <SectionHeader />
            <div className="relative mb-5">
                <div className="backdropCircle rounded mx-4 md:mx-12 lg:mx-20 mt-16 shadow-md z-10">
                    <div className="m-3 md:m-12 lg:m-0 lg:mx-6 lg:mt-10 backdropCard rounded lg:flex">
                        <img loading="lazy" src={Img1} className="rounded-t lg:rounded shadow-lg lg:w-80 lg:h-80" />
                        <div className="mx-5 py-3 lg:flex flex-col items-center justify-around">
                            <div>
                                <p className="text-sm font-medium font-openSansSm">12 January, 2021</p>
                                <h2 className="text-2xl font-black">The Master Of Disaster</h2>
                                <p className="text-sm font-medium font-openSansSm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet </p>
                            </div>
                            <div className="flex ml-0 mx-auto">
                                <div className="w-auto h-12 flex justify-start px-6 items-center backdropCard hover:bg-[#d1d3d6] transition-colors mt-3 rounded cursor-pointer">
                                    <Link to="/" className="text-gray-600 text-sm font-black">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {
                                articels.map((article) => {
                                    return (
                                        <ArticleCard key={article.id} title={article.title} content={article.content} day={article.formatted_date.day} month={article.formatted_date.month} year={article.formatted_date.year} id={article.id} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-16">
                        <button className="text-gray-600 px-4 py-2 rounded bg-[#E4E7EC] text-sm md:font-black hidden md:block hover:bg-[#e0e2e6] transition-colors">Previews</button>
                        <div className="flex mx-4">
                            <div className="text-gray-600 cursor-pointer px-4 py-2 rounded bg-[#E4E7EC] text-sm md:font-black hover:bg-[#e0e2e6] transition-colors">1</div>
                            <div className="text-white cursor-pointer px-4 py-2 rounded bg-mainColor shadow-md text-sm hover:bg-[#1e7bec] transition-colors shadow-mainColor mx-4 md:font-black">2</div>
                        </div>
                        <button className="text-gray-600 px-4 py-2 rounded bg-[#E4E7EC] text-sm md:font-black hidden md:block hover:bg-[#e0e2e6] transition-colors">Next</button>
                    </div>
                </div>
                {/* <img src={Shape1} className={`absolute w-20 h-20 -z-50 bottom-[42rem] left-8 -rotate-45 hidden lg:block`} />
                <img src={Shape2} className={`absolute w-20 h-20 -z-50 top-[75rem] right-64 -rotate-45 hidden lg:block`} />
                <img src={Shape3} className={`absolute w-32 h-32 -z-50 top-[50rem] right-3 hidden lg:block blur-sm`} />
                <img src={Shape4} className={`absolute w-24 h-24 -z-50 hidden lg:block`} />
                <img src={Shape5} className={`absolute w-24 h-24 -z-50 top-72 left-3 hidden lg:block`} />
                <img src={Shape6} className={`absolute w-24 h-24 -z-50 top-[125rem] left-28 hidden lg:block`} /> */}
            </div>
            <Footer />
        </>
    )
}