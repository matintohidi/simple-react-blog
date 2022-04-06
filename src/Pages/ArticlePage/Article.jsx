import React , { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// import Media
import Img1 from '../../assets/media/Img/1.jpg';
import Img2 from '../../assets/media/Img/2.jpg';
import Shape1 from '../../assets/media/3D object and icons/ColorGreenGlossy.png';
import Shape2 from '../../assets/media/3D object and icons/ColorGreenGlossy1.png';
import Shape3 from '../../assets/media/3D object and icons/ColorBlueGlossy1.png';
import Shape4 from '../../assets/media/3D object and icons/ColorBlueGlossy2.png';
import Shape5 from '../../assets/media/3D object and icons/ColorPurpleGlossy1.png';
import Shape6 from '../../assets/media/3D object and icons/ColorWhiteMatte2.png';
import Shape7 from '../../assets/media/3D object and icons/ColorGreenGlossy2.png';
import Shape8 from '../../assets/media/3D object and icons/ColorBlueGlossy.png';
import Shape9 from '../../assets/media/3D object and icons/ColorWhiteGlossy.png';

// import Components
import Comments from './Comments';
import Footer from '../../Components/Layout/Footer';

export default function ArticleContnet() {
    const { id } = useParams();

    const [ data , setData ] = useState({});
    
    useEffect(() => {
        window.scrollTo(0 , 0);
        axios.get(`http://127.0.0.1:8000/api/articles/${id}/`)
            .then(res => setData(res.data))
    },[])

    return (
        <>
            <div className="relative mx-5 lg:mt-36">
                <div className="mx-4 backdropCircle rounded mt-16 mb-8 shadow-md sm:mx-12 lg:mx-16 xl:mx-16 z-10">
                    <div className="mx-4 md:mx-20 lg:mx-24">
                        <h1 className="mx-4 text-2xl font-black text-center mt-8 text-gray-700">{data.title}</h1>
                        <img src={data.image} className="rounded mt-6 h-fit w-full" />
                        <div className="xl:mx-20">
                            <div>
                                <p className="text-lg font-black text-gray-600 mt-4">12 January, 2021</p>
                                <p className="font-thin text-sm mt-4 font-openSansSm">{data.content}</p>
                            </div>
                            <div className="flex justify-start items-center my-8 flex-wrap gap-y-2 gap-x-3">
                                <div className="rounded-md text-center text-gray-600 px-4 py-2 bg backdropCard text-sm cursor-pointer">Self</div>
                                <div className="rounded-md text-center text-gray-600 px-4 py-2 bg backdropCard text-sm cursor-pointer">Programmer</div>
                                <div className="rounded-md text-center text-gray-600 px-4 py-2 bg backdropCard text-sm cursor-pointer">Ego</div>
                                <div className="rounded-md text-center text-gray-600 px-4 py-2 bg backdropCard text-sm cursor-pointer">Developer</div>
                            </div>
                            <div className="flex flex-col justify-center items-center backdropCard rounded-md">
                                <img src={Img2} className="rounded-full mt-5 mb-2 w-28 h-28 lg:my-4 lg:w-32 lg:h-32 xl:w-40 xl:h-40" />
                                <div>
                                    <h1 className="text-xl font-black text-gray-800 text-center xl:text-2xl">Matin Tohidi</h1>
                                    <p className="text-sm font-light font-openSansSm mx-2 text-center mb-5 xl:text-base">Hello guys, My name is Matin Tohidi and i living Iran , My favorite job is Programming , Lorem ipsum dolor sit amet consectetur adipisicing elit <br/>Hello guys, My name is Matin Tohidi</p>
                                </div>
                            </div>
                            <h1 className="mt-6 text-3xl font-black text-gray-700">Comments</h1>
                            <div>
                                <Comments />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Shape1} className="hidden lg:block absolute top-24 w-14 h-16 -z-10 right-0 -rotate-45 blur-md" />
                <img src={Shape2} className="hidden lg:block absolute -z-10 top-60 w-24 h-24 left-0" />
                <img src={Shape3} className="hidden lg:block absolute -z-10 -top-7 right-1/2 w-14 h-14 blur-sm" />
                <img src={Shape4} className="hidden lg:block absolute -z-10 top-[500px] blur-sm right-0 w-32 h-32" />
                <img src={Shape5} className="hidden lg:block absolute -z-10 bottom-[1300px] left-20 -rotate-45 w-16 h-16" />
                <img src={Shape6} className="hidden lg:block absolute -z-10 top-[1000px] left-10 w-16 h-16 rotate-45" />
                <img src={Shape7} className="hidden lg:block absolute -z-10 w-24 h-24 top-[1700px] xl:top-[1400px] blur-sm right-0" />
                <img src={Shape8} className="hidden lg:block absolute -z-10 bottom-[400px] left-0 w-24 h-24" />
                <img src={Shape9} className="hidden lg:block absolute -z-10 bottom-[800px] right-0 w-24 h-36" />
            </div>
            <Footer />
        </>
    )
}