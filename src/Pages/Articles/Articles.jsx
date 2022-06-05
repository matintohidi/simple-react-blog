import React , { useState , useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { v1 as uuid } from 'uuid';
import { getArticles } from '../../services';
import { useBlog } from '../../context/context';

// import Components
import ArticleCard from '../../Components/ArticleCard/ArticleCard';
import Loader from '../../Components/Layout/Loader';
import Shape from '../../Components/Layout/Shape';
import Sort from '../../Components/Articles/Sort';
import Pagination from '../../Components/Articles/Pagination';

const Articles = () => {
    const navigate = useNavigate();
    const { page } = useParams();

    const { articlesStat } = useBlog();

    const [ loader , setLoader ] = useState(true);
    const [ articles , setArticles ] = useState([]);
    const [ count , setCount ] = useState(0);
    const [ pageCount , setPageCount ] = useState(1);

    useEffect(() => {
        window.scrollTo(0 , 0);

        getArticles(page , articlesStat)
            .then((res) => {
                setLoader(false);
                setArticles(res.data.results);
                setCount(res.data.results.length);
                setPageCount(res.data.total_pages);
            })
            .catch(err => err.response.status === 404 && navigate('/not-found'));
    },[page]);

    useEffect(() => {
        getArticles(page , articlesStat)
            .then((res) => {
                setLoader(false);
                setArticles(res.data.results);
                setCount(res.data.results.length);
                setPageCount(res.data.total_pages);
            })
            .catch(err => err.response.status === 404 && navigate('/not-found'));
    },[articlesStat]);

    return (
        <>
            {
                loader ? <Loader /> : <div className="relative mb-5">
                <div className="mx-4 md:mx-12 lg:mx-20 mt-16 z-10">
                    <Sort /> 
                    <div className="backdropCircle rounded shadow-md">
                        <div className="mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                {
                                    articles.map((data) => {
                                        return (
                                            <ArticleCard key={uuid()} data={data} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <Pagination page={page} pageCount={pageCount} />
                    </div>
                </div>
                <Shape count={count} shapeDisplay={false} />
            </div>
            }
        </>
    )
}

export default Articles;