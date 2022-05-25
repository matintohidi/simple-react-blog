import React , { useState , useEffect } from 'react';
import { Link , useParams , useNavigate } from 'react-router-dom';
import { v1 as uuid } from 'uuid';
import { getArticles } from '../../services';
import { useBlog } from '../../context/context';

// import Components
import ArticleCard from '../../Components/Home/ArticleCard';
import Loader from '../../Components/Layout/Loader';
import Shape from '../../Components/Layout/Shape';

const Articles = () => {
    const listItemSort = 'p-2 hover:bg-blue-500 hover:text-white rounded cursor-pointer transition duration-100';

    const navigate = useNavigate();
    const { page } = useParams();

    const { articlesStat , setArticlesStat } = useBlog();

    const [ loader , setLoader ] = useState(true);
    const [ articles , setArticles ] = useState([]);
    const [ count , setCount ] = useState(0);
    const [ next , setNext ] = useState(null);
    const [ prev , setPrev ] = useState(null);
    const [ activePage , setActivePage ] = useState(null);
    const [ openSort , setOpenSort ] = useState(false);

    useEffect(() => {
        window.scrollTo(0 , 0);
        getArticles(page , articlesStat)
            .then((res) => {
                setLoader(false);
                setArticles(res.data.results);
                setNext(res.data.next);
                setPrev(res.data.previous);
                setCount(res.data.results.length);
                setActivePage(res.data.active_page);
            })
            .catch(err => err.response.status === 404 && navigate('/not-found'));

            setOpenSort(false);
    },[page]);

    useEffect(() => {
        getArticles(page , articlesStat)
            .then((res) => {
                setLoader(false);
                setArticles(res.data.results);
                setNext(res.data.next);
                setPrev(res.data.previous);
                setCount(res.data.results.length);
                setActivePage(res.data.active_page);
            })
            .catch(err => err.response.status === 404 && navigate('/not-found'));
    },[articlesStat]);

    const sortHandler = (sort) => {
        setArticlesStat(sort);
        navigate('/articles/page');
    }

    return (
        <>
            {
                loader ? <Loader /> : <div className="relative mb-5">
                <div className="mx-4 md:mx-12 lg:mx-20 mt-16 z-10">
                    <div className="flex flex-col items-end mb-4">
                        <button className={`flex items-center cursor-pointer ${openSort ? '-translate-x-16 transition duration-200' : 'transition duration-200'}`} onClick={() => setOpenSort(!openSort)}>
                            <h2 className="text-gray-600">Sort by</h2>
                            <svg fill="currentColor" viewBox="0 0 20 20" className={`w-4 h-4 transition-transform duration-200 transform text-gray-600 ${openSort ? 'rotate-180' : 'rotate-0'}`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <ul className={`bg-white border rounded px-3 py-2 text-sm absolute top-8 z-50 ${openSort === false && 'hidden'}`}>
                            <li className={listItemSort} onClick={() => sortHandler('published')}>Published Time</li>
                            <li className={listItemSort} onClick={() => sortHandler('like')}>Like</li>
                            <li className={listItemSort} onClick={() => sortHandler('hits')}>View</li>
                        </ul>
                    </div>
                    <div className="backdropCircle rounded shadow-md">
                        <div className="mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                {
                                    articles.map((article) => {
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
                </div>
                <Shape count={count} shapeDisplay={false} />
            </div>
            }
        </>
    )
}

export default Articles;