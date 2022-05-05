import React , { useEffect , useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { v1 as uuid } from 'uuid';
import Tooltip from "react-simple-tooltip";
import Avatar from 'react-nice-avatar';
import { getAricle , getArticleComments } from '../../services';
import { numToMonth } from '../../hooks/useMonth';

// import Media
import Shape1 from '../../assets/media/3D object and icons/ColorGreenGlossy.png';
import Shape2 from '../../assets/media/3D object and icons/ColorGreenGlossy1.png';
import Shape3 from '../../assets/media/3D object and icons/ColorBlueGlossy1.png';
import Shape4 from '../../assets/media/3D object and icons/ColorBlueGlossy2.png';
import Shape7 from '../../assets/media/3D object and icons/ColorGreenGlossy2.png';
import Shape8 from '../../assets/media/3D object and icons/ColorBlueGlossy.png';

// import Components
import Comments from '../../Components/Article/Comments';
import Footer from '../../Components/Layout/Footer';
import Loader from '../../Components/Layout/Loader';

export default function ArticleContnet() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const config = {
        "sex": "man",
        "faceColor": "#F9C9B6",
        "earSize": "small",
        "eyeStyle": "oval",
        "noseStyle": "round",
        "mouthStyle": "smile",
        "shirtStyle": "hoody",
        "glassesStyle": "none",
        "hairColor": "#000",
        "hairStyle": "thick",
        "hatStyle": "none",
        "hatColor": "#F48150",
        "eyeBrowStyle": "up",
        "shirtColor": "#FC909F",
        "bgColor": "linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)"
    }

    const [ lodaer , setLoader ] = useState(true);
    const [ data , setData ] = useState({
        title: '',
        content: '',
        image: null,
        like: 0,
        shortLink: '',
        author: '',
        tags: [],
        date: {
            day: 0,
            month: 0,
            year: 0
        }
    });
    const [ like , setLike ] = useState(false);
    const [ comments , setComments ] = useState([]);
    
    useEffect(() => {
        window.scrollTo(0 , 0);
        getAricle(slug)
            .then(res => {
                setLoader(false);
                setData({
                    title: res.data.title,
                    content: res.data.content,
                    image: res.data.image,
                    like: res.data.like,
                    shortLink: res.data.full_short_link,
                    author: res.data.author,
                    tags: res.data.tags,
                    date: {
                        day: res.data.formatted_date.day,
                        month: res.data.formatted_date.month,
                        year: res.data.formatted_date.year
                    }
                })
            })
            .catch(err => err.response.status === 404 && navigate('/not-found'))
        getArticleComments(slug)
            .then(res => setComments(res.data))
    },[])

    let CopyShotLink = () => {
        const textShortLink = document.getElementById("textShortLink");
        navigator.clipboard.writeText(textShortLink.innerText);
    }

    let likeHandler = () => {
        setLike(!like);
    }

    return (
        <>
            {
                lodaer ? <Loader /> : <>
                <div className="relative mx-5 lg:mt-36">
                    <div className="mx-4 backdropCircle rounded mt-16 mb-8 shadow-md sm:mx-12 lg:mx-16 xl:mx-16 z-10">
                        <div className="mx-4 md:mx-20 lg:mx-24">
                            <h1 className="mx-4 text-2xl font-black text-center mt-8 text-gray-700">{data.title}</h1>
                            <div className="flex justify-center">
                                <img src={data.image} className="rounded mt-6 image" alt="Article Image" />
                            </div>
                            <div className="xl:mx-20">
                                <div>
                                    <p className="text-lg font-black text-gray-600 mt-4">{data.date.day} , {numToMonth(data.date.month)} , {data.date.year}</p>
                                    <p className="font-thin text-sm mt-4 font-openSansSm">{data.content}</p>
                                </div>
                                <div className={`flex justify-start items-center ${data.tags.length !== 0 && "my-8"} flex-wrap gap-y-2 gap-x-3`}>
                                    {
                                        data.tags.map((tag) => {
                                            return <div key={uuid()} className="rounded-md text-center text-gray-600 px-4 py-2 bg backdropCard text-sm cursor-pointer">{tag.name}</div>
                                        })
                                    }
                                </div>
                                <div className="flex mt-12 mb-4 justify-between">
                                    <Tooltip content="Copy short Link" radius={5} padding={13} background="#2084FF" border="transparent" fadeDuration={100}>
                                        <button className="border border-black rounded-full cursor-pointer px-3 py-1 flex items-center justify-center" onClick={CopyShotLink}>
                                            <svg width="18" height="18" viewBox="0 0 24 24">
                                                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                                            </svg>
                                            <p className="text-sm font-thin" id="textShortLink">{data.shortLink}</p>
                                        </button>
                                    </Tooltip>
                                    <div className="flex justify-center items-center">
                                        <button className="flex justify-center items-center" onClick={likeHandler}>
                                            <svg viewBox="0 0 18 18" width="27" height="27" className={`fill-transparent stroke-black hover:stroke-red-700 transition-colors ${like ? "fill-red-700 stroke-red-700" : ""}`}>
                                                <rect fill="#ff13dc" opacity="0"></rect><path d="M12.182,3.2545A4.00649,4.00649,0,0,0,9,5.1635a4.00649,4.00649,0,0,0-3.182-1.909A3.818,3.818,0,0,0,2,7.0725c0,3.646,7,8.273,7,8.273s7-4.578,7-8.273A3.818,3.818,0,0,0,12.182,3.2545Z"></path>
                                            </svg>
                                        </button>
                                        <span className="text-black ml-1">{data.like}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center backdropCard rounded-md">
                                    {
                                        data.author.profile === null ? <Avatar className="rounded-full mt-5 mb-2 w-28 h-28 lg:my-4 lg:w-32 lg:h-32 xl:w-40 xl:h-40" { ...config } /> : <img src={data.author.profile} className={'rounded-full mt-5 mb-2 w-28 h-28 lg:my-4 lg:w-32 lg:h-32 xl:w-40 xl:h-40'} alt="Profile Image" />
                                    }
                                    <div>
                                        <h1 className="text-xl font-black text-gray-800 text-center xl:text-2xl">{data.author.username}</h1>
                                        <p className="text-sm font-light font-openSansSm mx-2 text-center mb-5 xl:text-base">{data.author.about}</p>
                                    </div>
                                </div>
                                <h1 className="mt-6 text-2xl font-black text-gray-700">Comments</h1>
                                <div>
                                    <Comments comments={comments} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={Shape1} className="hidden animate-[bounce_5s_linear_infinite] lg:block absolute top-24 w-14 h-16 -z-10 right-0 -rotate-45 blur-md" />
                    <img src={Shape2} className="hidden animate-[bounce_7s_linear_infinite] lg:block absolute -z-10 top-60 w-24 h-24 left-0" />
                    <img src={Shape3} className="hidden animate-[bounce_9s_linear_infinite] lg:block absolute -z-10 -top-7 right-1/2 w-14 h-14 blur-sm" />
                    <img src={Shape4} className="hidden animate-[bounce_7s_linear_infinite] lg:block absolute -z-10 top-[500px] blur-sm right-0 w-32 h-32" />
                    <img src={Shape7} className="hidden animate-[bounce_8s_linear_infinite] lg:block absolute -z-10 w-24 h-24 top-[1700px] xl:top-[1400px] blur-sm right-0" />
                    <img src={Shape8} className="hidden animate-[bounce_3s_linear_infinite] lg:block absolute -z-10 bottom-[400px] left-0 w-24 h-24" />
                </div>
            </>
            }
            <Footer />
        </>
    )
}