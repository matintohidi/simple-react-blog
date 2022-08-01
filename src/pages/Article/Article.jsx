import React , { useEffect , useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { getAricle , getArticleComments } from '../../services';
import { toast } from 'react-toastify';
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
import { ImageLazy } from '../../Components/ImageLazy/ImageLazy';
import Edit from '../../Components/Article/Edit';
import Content from '../../Components/Article/Content';

const Article = () => {
    const navigate = useNavigate();
    let { slug } = useParams();
    const { userData } = useAuth();

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

    return (
        <>
            {
                lodaer
                ? <Loader />
                : <>
                    <div className="relative sm:mx-5 lg:mt-16">
                        <div className="sm:mx-4 backdropArticle rounded my-8 sm:shadow-md lg:mx-16 xl:mx-16 z-10 p-4">
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
                            {
                                edit
                                ? <Edit setEdit={setEdit} setLoader={setLoader} setData={setData} slug={slug} title={title} setTitle={setTitle} content={content} setContent={setContent} check={check} setCheck={setCheck} tags={data.tags} />
                                : <Content data={data} setData={setData} slug={slug} setComments={setComments} comments={comments} />
                            }
                        </div>
                        {
                            !edit
                            && <>
                                <ImageLazy src={Shape1} className="hidden animate-[bounce_5s_linear_infinite] lg:block absolute top-24 w-14 h-16 -z-10 right-0 -rotate-45 blur-md" />
                                <ImageLazy src={Shape2} className="hidden animate-[bounce_7s_linear_infinite] lg:block absolute -z-10 top-60 w-24 h-24 left-0" />
                                <ImageLazy src={Shape3} className="hidden animate-[bounce_9s_linear_infinite] lg:block absolute -z-10 -top-7 right-1/2 w-14 h-14 blur-sm" />
                                <ImageLazy src={Shape4} className="hidden animate-[bounce_7s_linear_infinite] lg:block absolute -z-10 top-[500px] blur-sm right-0 w-32 h-32" />
                                <ImageLazy src={Shape7} className="hidden animate-[bounce_8s_linear_infinite] lg:block absolute -z-10 w-24 h-24 top-[1700px] xl:top-[1400px] blur-sm right-0" />
                                <ImageLazy src={Shape8} className="hidden animate-[bounce_3s_linear_infinite] lg:block absolute -z-10 bottom-[400px] left-0 w-24 h-24" />
                            </>
                        }
                    </div>
                </>
            }
        </>
    )
}

export default Article;