import React , { useEffect , useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { getAricle , getArticleComments , putArticle } from '../../services';
import { toast } from 'react-toastify';
import ReactMarkdown from 'react-markdown';
import { useAuth } from '../../context/Auth';

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
    const { userData , user } = useAuth();

    const [ lodaer , setLoader ] = useState(true);
    const [ data , setData ] = useState({ tags:[] , author: { socials:[] } });
    const [ comments , setComments ] = useState([]);
    const [ edit , setEdit ] = useState(false);
    const [ title , setTitle ] = useState('');
    const [ content , setContent ] = useState('');
    const [ check , setCheck ] = useState(true);
    
    useEffect(() => {
        window.scrollTo(0 , 0);
        
        getAricle(slug)
            .then(res => {
                setData(res.data);
                setTitle(res.data.title);
                setContent(res.data.content);
                setCheck(res.data.status);
            })
            .catch(err => err.response.status === 404 && navigate('/not-found'))

        getArticleComments(slug)
            .then(res => setComments(res.data))
            .catch(() => toast.error('Articles could not be downloaded'))

        setLoader(false);
    },[])

    const editHandler = (e) => {
        setLoader(true);
        e.preventDefault();
        let form = new FormData(e.target);

        form.append('status' , check);

        if(!form.get('image').name) {
            form.delete('image');
        }

        putArticle(slug , form , user.token)
            .then(res => {
                setData(res.data);
                setTitle(res.data.title);
                setContent(res.data.content);
                setCheck(res.data.status);
            })
            .catch(err => console.log(err))

        setLoader(false);
        setEdit(false);
    }

    return (
        <>
            {
                lodaer
                ? <Loader />
                : <>
                    <div className="relative mx-5 lg:mt-36">
                        <form onSubmit={e => editHandler(e)} className="mx-4 backdropArticle rounded my-8 sm:shadow-md sm:mx-12 lg:mx-16 xl:mx-16 z-10 p-4">
                            {
                                userData.id === data.author.id &&
                                <div className="flex justify-between mb-4">
                                    <button type="button" onClick={() => setEdit(!edit)} className="flex items-center gap-x-1 text-gray-700 hover:text-gray-500">
                                        <ion-icon name="create-outline" class="text-xl"></ion-icon>
                                        <p className="font-PlusJakarta text-lg">Edit</p>
                                    </button>
                                    {
                                        edit && <button type="submit" className="px-4 py-1 bg-mainColor text-white rounded-md">Save</button>
                                    }
                                </div>
                            }
                            <div className="mx-4 md:mx-20 lg:mx-24 flex flex-col items-center">
                                {
                                    edit
                                    ? <input type="text" name="title" className="p-2 border-2 border-gray-300 rounded-lg outline-none focus:border-mainColor transition text-center text-xl" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    : <h1 className="mx-4 text-2xl font-black text-gray-700">{data.title}</h1>
                                }
                                <div className="flex justify-center mt-6">
                                    {
                                        edit
                                        ? <div className="w-64 flex flex-col items-center px-4 py-6 bg-white text-gray-400 rounded-lg tracking-wide uppercase border border-gray-400 cursor-pointer hover:bg-mainColor hover:border-white hover:text-white transition-all">
                                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                            </svg>
                                            <label className="mt-2 text-base leading-normal">Image</label>
                                            <input type="file" name="image" className="absolute w-60 px-4 py-6 opacity-0" />
                                        </div>
                                        : <ImageLazy src={data.image} className="rounded image" alt={data.title} />
                                    }
                                </div>
                                <div className="xl:mx-20">
                                    <div className={`mt-4 mx-3 ${edit ? 'mb-3' : 'border-b-2 pb-8'}`}>
                                        {
                                            edit
                                            ? <textarea type="text" name="content" className="overflow-y-scroll scrollBar w-full h-[200px] text-sm bg-white py-2 px-5 border-2 border-gray-300 rounded-lg outline-none focus:border-mainColor transition" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                                            : <ReactMarkdown className="text-sm break-all">{data.content}</ReactMarkdown>
                                        }
                                    </div>
                                    {
                                        edit &&
                                        <label className="relative flex justify-between items-center group p-2 text-md border-b-2 pb-8">
                                            Release status
                                            <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full peer appearance-none rounded-md" checked={check} onChange={() => setCheck(!check)} />
                                            <span className="ring-1 ring-mainColor w-14 h-8 flex items-center flex-shrink-0 ml-4 p-1 bg-white rounded-full duration-300 ease-in-out peer-checked:bg-mainColor after:w-6 after:h-6 after:bg-mainColor peer-checked:after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
                                        </label>
                                    }
                                    <AboutArticle comments={comments} setComments={setComments} setData={setData} data={data} slug={slug} />
                                </div>
                            </div>
                        </form>
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