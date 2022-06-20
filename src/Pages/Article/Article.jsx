import React , { useEffect , useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { getAricle , getArticleComments } from '../../services';
import { toast } from 'react-toastify';
import ReactMarkdown from 'react-markdown'

// import Media
import Shape1 from '../../assets/media/3D object and icons/ColorGreenGlossy.png';
import Shape2 from '../../assets/media/3D object and icons/ColorGreenGlossy1.png';
import Shape3 from '../../assets/media/3D object and icons/ColorBlueGlossy1.png';
import Shape4 from '../../assets/media/3D object and icons/ColorBlueGlossy2.png';
import Shape7 from '../../assets/media/3D object and icons/ColorGreenGlossy2.png';
import Shape8 from '../../assets/media/3D object and icons/ColorBlueGlossy.png';

// import Components
import Loader from '../../Components/Layout/Loader';
import AboutArticle from '../../Components/Article/AboutArticle';
import { ImageLazy } from '../../Components/ImageLazy/ImageLazy';

const Article = () => {
    const navigate = useNavigate();
    let { slug } = useParams();

    const [ lodaer , setLoader ] = useState(true);
    const [ data , setData ] = useState({ tags:[] , author: { socials:[] } });
    const [ comments , setComments ] = useState([]);

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

    return (
        <>
            {
                lodaer ? <Loader /> : <>
                <div className="relative mx-5 lg:mt-36">
                    <div className="mx-4 backdropCircle rounded mt-16 mb-8 shadow-md sm:mx-12 lg:mx-16 xl:mx-16 z-10">
                        <div className="mx-4 md:mx-20 lg:mx-24">
                            <h1 className="mx-4 text-2xl font-black text-center mt-8 text-gray-700">{data.title}</h1>
                            <div className="flex justify-center">
                                <ImageLazy src={data.image} className="rounded mt-6 image" alt={data.title} />
                            </div>
                            <div className="xl:mx-20">
                                <div className="mt-4 border-b-2 pb-8 px-3">
                                    <ReactMarkdown className="font-thin text-sm font-openSansSm break-all">{data.content}</ReactMarkdown>
                                </div>
                                <AboutArticle comments={comments} data={data} slug={slug} />
                            </div>
                        </div>
                    </div>
                    <ImageLazy src={Shape1} className="hidden animate-[bounce_5s_linear_infinite] lg:block absolute top-24 w-14 h-16 -z-10 right-0 -rotate-45 blur-md" />
                    <ImageLazy src={Shape2} className="hidden animate-[bounce_7s_linear_infinite] lg:block absolute -z-10 top-60 w-24 h-24 left-0" />
                    <ImageLazy src={Shape3} className="hidden animate-[bounce_9s_linear_infinite] lg:block absolute -z-10 -top-7 right-1/2 w-14 h-14 blur-sm" />
                    <ImageLazy src={Shape4} className="hidden animate-[bounce_7s_linear_infinite] lg:block absolute -z-10 top-[500px] blur-sm right-0 w-32 h-32" />
                    <ImageLazy src={Shape7} className="hidden animate-[bounce_8s_linear_infinite] lg:block absolute -z-10 w-24 h-24 top-[1700px] xl:top-[1400px] blur-sm right-0" />
                    <ImageLazy src={Shape8} className="hidden animate-[bounce_3s_linear_infinite] lg:block absolute -z-10 bottom-[400px] left-0 w-24 h-24" />
                </div>
            </>
            }
        </>
    )
}

export default Article;