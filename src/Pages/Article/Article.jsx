import React , { useEffect , useState } from 'react';
import { useParams , useNavigate , Link } from 'react-router-dom';
import { v1 as uuid } from 'uuid';
import Tooltip from "react-simple-tooltip";
import { getAricle , getArticleComments } from '../../services';
import { numToMonth } from '../../hooks/useMonth';
import { toast } from 'react-toastify';

// import Media
import Shape1 from '../../assets/media/3D object and icons/ColorGreenGlossy.png';
import Shape2 from '../../assets/media/3D object and icons/ColorGreenGlossy1.png';
import Shape3 from '../../assets/media/3D object and icons/ColorBlueGlossy1.png';
import Shape4 from '../../assets/media/3D object and icons/ColorBlueGlossy2.png';
import Shape7 from '../../assets/media/3D object and icons/ColorGreenGlossy2.png';
import Shape8 from '../../assets/media/3D object and icons/ColorBlueGlossy.png';

// import Components
import Comments from '../../Components/Article/Comments';
import Loader from '../../Components/Layout/Loader';
import Author from '../../Components/Article/Author';
import LikeAndSave from '../../Components/Article/LikeAndSave';

const Article = () => {
    const navigate = useNavigate();
    let { slug } = useParams();

    const [ lodaer , setLoader ] = useState(true);
    const [ data , setData ] = useState({ tags:[] , author: { socials:[] } });
    const [ comments , setComments ] = useState([]);

    let dateFormat = new Date(data.published);
    
    useEffect(() => {
        window.scrollTo(0 , 0);
        getAricle(slug)
            .then(res => {
                setLoader(false);
                setData(res.data);
            })
            .catch(err => err.response.status === 404 && navigate('/not-found'))

        getArticleComments(slug)
            .then(res => setComments(res.data))
            .catch(() => toast.error('Articles could not be downloaded'))
    },[])

    const CopyShotLink = () => {
        const textShortLink = document.getElementById("textShortLink");
        navigator.clipboard.writeText(textShortLink.innerText);
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
                                <div className="mt-4 border-b-2 pb-8 px-3">
                                    <p className="font-thin text-sm font-openSansSm break-all">{data.content}</p>
                                </div>
                                <div>
                                    <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
                                        <div className={`flex justify-start items-center ${data.tags.length !== 0 ? "my-4 sm:my-8" : ""} flex-wrap gap-y-2 gap-x-3`}>
                                            {
                                                data.tags.map((tag) => {
                                                    return <div key={uuid()} className="rounded-md text-center text-gray-600 px-3 py-1 backdropCard text-sm cursor-pointer">#{tag.name}</div>
                                                })
                                            }
                                        </div>
                                        <h2 className="text-lg mt-4 sm:mt-0 font-black text-gray-600">{dateFormat.getDate()} , {numToMonth(dateFormat.getMonth())} , {dateFormat.getFullYear()}</h2>
                                    </div>
                                    <div className="flex gap-y-4 mt-3 sm:mt-6 mb-4 justify-between sm:items-center  flex-col-reverse sm:flex-row">
                                        <Tooltip content="Copy short Link" radius={5} padding={11} background="#2084FF" border="transparent" fadeDuration={100}>
                                            <button className="flex w-full border border-gray-400 rounded-full cursor-pointer px-3 py-1 items-center justify-center" onClick={CopyShotLink}>
                                                <svg width="20" height="20" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.1251 9.37753C11.1735 9.03246 11.2048 8.65154 11.2224 8.23142C11.342 8.16599 11.4325 8.09594 11.5044 8.02404C11.6726 7.85578 11.8308 7.58558 11.9433 7.07954C12.0583 6.56181 12.1108 5.86547 12.1108 4.91155C12.1108 3.00521 11.8476 2.22592 11.4625 1.84091C11.0775 1.45589 10.2983 1.19269 8.3919 1.19269C7.43799 1.19269 6.74164 1.24514 6.22392 1.3602C5.71788 1.47266 5.44768 1.63081 5.27942 1.79907C5.20752 1.87097 5.13746 1.96148 5.07203 2.08106C5.36761 2.06867 5.68259 2.06306 6.01814 2.06306C10.3187 2.06306 11.2404 2.98479 11.2404 7.2853C11.2404 11.5858 10.3187 12.5075 6.01814 12.5075C1.71762 12.5075 0.795898 11.5858 0.795898 7.2853C0.795898 3.79726 1.40225 2.53194 3.92593 2.17833C4.4152 0.577466 5.64584 0.164062 8.3919 0.164062C12.1899 0.164062 13.1394 1.11356 13.1394 4.91155C13.1394 7.65762 12.726 8.88826 11.1251 9.37753Z" fill="currentColor" fillOpacity="0.56"></path>
                                                </svg>
                                                <h2 className="text-xs ml-2 overflow-x-scroll sm:overflow-x-hidden" id="textShortLink">{data.full_short_link}</h2>
                                            </button>
                                        </Tooltip>
                                        <LikeAndSave countLikes={data.like} setLoader={setLoader} slug={slug} />
                                    </div>
                                    <Author author={data.author} />
                                    <h1 className="mt-6 text-2xl font-black text-gray-700" id="comments">Comments</h1>
                                    <div>
                                        <Comments comments={comments} slug={data.slug} />
                                    </div>
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
        </>
    )
}

export default Article;