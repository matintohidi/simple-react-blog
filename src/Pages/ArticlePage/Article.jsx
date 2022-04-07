import React , { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

// import Media
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

    const [ lodaer , setLoader ] = useState(true);
    const [ dataContent , setDataContent ] = useState({});
    const [ author , setAuthor ] = useState({});
    const [ date , setDate ] = useState({});
    const [ tags , setTags ] = useState([]);
    
    useEffect(() => {
        window.scrollTo(0 , 0);
        axios.get(`http://127.0.0.1:8000/api/articles/${id}/`)
            .then(res => {
                setLoader(false);
                setDataContent({
                    title: res.data.title,
                    content: res.data.content,
                    image: res.data.image,
                    like: res.data.like,
                    shortLink: res.data.full_short_link
                })
                setAuthor(res.data.author);
                setTags(res.data.tags);
                setDate({
                    day: res.data.formatted_date.day,
                    month: res.data.formatted_date.month,
                    year: res.data.formatted_date.year
                });
            })
    },[])

    const monthOfYear = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

    switch (date.month) {
        case 1 :
            setDate({...date , month:monthOfYear[0]});
            break;
        case 2 :
            setDate({...date , month:monthOfYear[1]});
            break;
        case 3 :
            setDate({...date , month:monthOfYear[2]});
            break;
        case 4 :
            setDate({...date , month:monthOfYear[3]});
            break;
        case 5 :
            setDate({...date , month:monthOfYear[4]});
            break;
        case 6 :
            setDate({...date , month:monthOfYear[5]});
            break;
        case 7 :
            setDate({...date , month:monthOfYear[6]});
            break;
        case 8 :
            setDate({...date , month:monthOfYear[7]});
            break;
        case 9 :
            setDate({...date , month:monthOfYear[8]});
            break;
        case 10 :
            setDate({...date , month:monthOfYear[9]});
            break;
        case 11 :
            setDate({...date , month:monthOfYear[10]});
            break;
        case 12 :
            setDate({...date , month:monthOfYear[11]});
            break;
        default:
            break;
    }

    return (
        <>
            {
                lodaer ? <div className="flex justify-center h-screen items-center">
                    <svg role="status" className="mr-2 w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div> : <>
                <div className="relative mx-5 lg:mt-36">
                    <div className="mx-4 backdropCircle rounded mt-16 mb-8 shadow-md sm:mx-12 lg:mx-16 xl:mx-16 z-10">
                        <div className="mx-4 md:mx-20 lg:mx-24">
                            <h1 className="mx-4 text-2xl font-black text-center mt-8 text-gray-700">{dataContent.title}</h1>
                            <img src={dataContent.image} className="rounded mt-6 h-fit w-full" alt="Article Image" />
                            <div className="xl:mx-20">
                                <div>
                                    <p className="text-lg font-black text-gray-600 mt-4">{date.day} , {date.month} , {date.year}</p>
                                    <p className="font-thin text-sm mt-4 font-openSansSm">{dataContent.content}</p>
                                </div>
                                <div className="flex justify-start items-center my-8 flex-wrap gap-y-2 gap-x-3">
                                    {
                                        tags.map((tag) => {
                                            return <div key={uuid()} className="rounded-md text-center text-gray-600 px-4 py-2 bg backdropCard text-sm cursor-pointer">{tag.name}</div>
                                        })
                                    }
                                </div>
                                <div className="flex flex-col justify-center items-center backdropCard rounded-md">
                                    <img src={author.profile} className={`rounded-full mt-5 mb-2 w-28 h-28 lg:my-4 lg:w-32 lg:h-32 xl:w-40 xl:h-40 ${author.profile == undefined ? "hidden" : ""}`} alt="Profile Image" />
                                    <div>
                                        <h1 className="text-xl font-black text-gray-800 text-center xl:text-2xl">{author.username}</h1>
                                        <p className="text-sm font-light font-openSansSm mx-2 text-center mb-5 xl:text-base">{author.about}</p>
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
            </>
            }
            <Footer />
        </>
    )
}