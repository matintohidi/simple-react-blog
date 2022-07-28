import React , { useEffect } from 'react';
import { useBlog } from '../../context/context';

// import components
import FilterBox from '../../Components/Blog/FilterBox';
import Articles from '../../Components/Blog/Articles';

const Blog = () => {
    let { setFilterArticle , setFilterTag } = useBlog();

    useEffect(() => {
        window.scrollTo(0 , 0);

        return () => {
            setFilterArticle({ results : [] });
            setFilterTag('');
        }
    },[])

    return (
        <>
            <div className="flex flex-col justify-center items-center py-6">
                <h1 className="font-TheBrown text-gray-600 mt-4 text-xl sm:text-2xl lg:text-3xl text-center">Search your Article</h1>
                <FilterBox />
                <Articles />
            </div>
        </>
    )
}

export default Blog;