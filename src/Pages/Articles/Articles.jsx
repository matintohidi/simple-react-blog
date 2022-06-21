import React , { useState , useEffect } from 'react';
import { useNavigate , useSearchParams } from 'react-router-dom';
import { v1 as uuid } from 'uuid';
import { sortArticles } from '../../services';

// import Components
import ArticleCard from '../../Components/ArticleCard/ArticleCard';
import Loader from '../../Components/Layout/Loader';
import Shape from '../../Components/Layout/Shape';
import Sort from '../../Components/Articles/Sort';
import Pagination from '../../Components/Articles/Pagination';

const Articles = () => {
    const navigate = useNavigate();
    const [ searchParams , setSearchParams ] = useSearchParams();

    const [ loader , setLoader ] = useState(true);
    const [ data , setData ] = useState({ results: [] });
    const [ page , setPage ] = useState(searchParams.get('page') || 1);
    const [ ordering , setOrdering ] = useState(searchParams.get('ordering') || '-published');

    useEffect(() => window.scrollTo(0 , 0));

    useEffect(() => {
        window.scrollTo(0 , 0);

        sortArticles(ordering , page)
            .then(res => {
                setLoader(false);
                setData(res.data);
                console.log(res.data)
            })
            .catch(err => err.response.status === 404 && navigate('/not-found'));
    },[page , ordering]);

    return (
        <>
            {
                loader ? <Loader /> : <div className="relative mb-5">
                <div className="mx-4 md:mx-12 lg:mx-20 mt-16 z-10">
                    <Sort ordering={ordering} setOrdering={setOrdering} setSearchParams={setSearchParams} searchParams={searchParams} /> 
                    <div className="backdropCircle rounded shadow-md">
                        <div className="mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                {
                                    data.results.map((data) => {
                                        return (
                                            <ArticleCard key={uuid()} data={data} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <Pagination setSearchParams={setSearchParams} ordering={ordering} page={page} setPage={setPage} next={data.next} prev={data.previous} pageCount={data.total_pages} />
                    </div>
                </div>
                <Shape count={data.results.length} shapeDisplay={false} />
            </div>
            }
        </>
    )
}

export default Articles;