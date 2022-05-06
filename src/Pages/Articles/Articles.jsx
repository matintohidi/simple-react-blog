import React , { useState , useEffect } from 'react';
import { Link , useParams , useNavigate } from 'react-router-dom';
import { v1 as uuid } from 'uuid';
import { getArticles } from '../../services';

// import Components
import ArticleCard from '../../Components/Home/ArticleCard';
import Footer from '../../Components/Layout/Footer';
import Loader from '../../Components/Layout/Loader';
import Shape from '../../Components/Layout/Shape';

const Articles = () => {
    const navigate = useNavigate();
    const { page } = useParams();

    const [ loader , setLoader ] = useState(true);
    const [ articels , setArticles ] = useState([]);
    const [ count , setCount ] = useState(0);
    const [ next , setNext ] = useState(null);
    const [ prev , setPrev ] = useState(null);
    const [ activePage , setActivePage ] = useState(null);

    useEffect(() => {
        window.scrollTo(0 , 0);
        getArticles(page)
            .then((res) => {
                setLoader(false);
                setArticles(res.data.results);
                setNext(res.data.next);
                setPrev(res.data.previous);
                setCount(res.data.results.length);
                setActivePage(res.data.active_page);
            })
            .catch(err => err.response.status === 404 && navigate('/not-found'));
    },[page])

    return (
        <>
            {
                loader ? <Loader /> : <div className="relative mb-5">
                <div className="backdropCircle rounded mx-4 md:mx-12 lg:mx-20 mt-16 shadow-md z-10">
                    <div className="mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            {
                                articels.map((article) => {
                                    return (
                                        <ArticleCard key={uuid()} author={article.author.username} img={article.image} title={article.title} content={article.content} day={article.formatted_date.day} month={article.formatted_date.month} year={article.formatted_date.year} slug={article.slug} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-16">
                        <Link to={`/articles/page/${activePage - 1}`} className={`text-mainColor px-5 py-3 rounded mr-5 ring-1 ring-mainColor text-sm hover:bg-mainColor hover:text-white transition-colors ${prev === null ? "hidden" : "block"}`}>Previews</Link>
                        <p className="px-5 py-3 rounded-full mr-5 ring-1 ring-mainColor text-sm bg-mainColor text-white transition-colors">{activePage}</p>
                        <Link to={`/articles/page/${activePage + 1}`} className={`text-mainColor px-5 py-3 rounded ring-1 ring-mainColor text-sm hover:bg-mainColor hover:text-white transition-colors ${next === null ? "hidden" : "block"}`}>Next</Link>
                    </div>
                </div>
                <Shape count={count} shapeDisplay={false} />
            </div>
            }
        </>
    )
}

export default Articles