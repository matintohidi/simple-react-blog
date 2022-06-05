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
import Like from '../../Components/Article/Like';
import Author from '../../Components/Article/Author';

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
                                <div>
                                    <p className="text-lg font-black text-gray-600 mt-4">{dateFormat.getDate()} , {numToMonth(dateFormat.getMonth())} , {dateFormat.getFullYear()}</p>
                                    <p className="font-thin text-sm mt-4 font-openSansSm break-all">{data.content}</p>
                                </div>
                                <div className={`flex justify-start items-center ${data.tags.length !== 0 && "my-8"} flex-wrap gap-y-2 gap-x-3`}>
                                    {
                                        data.tags.map((tag) => {
                                            return <div key={uuid()} className="rounded-md text-center text-gray-600 px-4 py-2 bg backdropCard text-sm cursor-pointer">{tag.name}</div>
                                        })
                                    }
                                </div>
                                <div className="flex mt-12 mb-4 justify-between flex-col md:flex-row">
                                    <Tooltip content="Copy short Link" radius={5} padding={13} background="#2084FF" border="transparent" fadeDuration={100}>
                                        <button className="hidden border border-black rounded-full cursor-pointer px-3 py-1 md:flex items-center justify-center" onClick={CopyShotLink}>
                                            <p className="text-sm" id="textShortLink">{data.full_short_link}</p>
                                        </button>
                                    </Tooltip>
                                    <Like countLike={data.like} setLoader={setLoader} slug={slug} />
                                </div>
                                <Author author={data.author} />
                                <h1 className="mt-6 text-2xl font-black text-gray-700">Comments</h1>
                                <div>
                                    <Comments comments={comments} slug={data.slug} />
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