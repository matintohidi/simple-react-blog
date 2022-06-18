import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../../context/context';

const Sort = () => {
    const navigate = useNavigate();

    const { articlesStat , setArticlesStat } = useBlog();
    const [ openSort , setOpenSort ] = useState(false);

    const sortHandler = (sort) => {
        setArticlesStat(sort);
        navigate('/articles/page/1');
        setOpenSort(false);
    }

    return (
        <div className="flex flex-col items-end mb-4">
            <button className={`flex items-center cursor-pointer ${openSort ? '-translate-x-16 transition duration-200' : 'transition duration-200'}`} onClick={() => setOpenSort(!openSort)}>
                <h2 className="text-gray-600">Sort by</h2>
                <svg fill="currentColor" viewBox="0 0 20 20" className={`w-4 h-4 transition-transform duration-200 transform text-gray-600 ${openSort ? 'rotate-180' : 'rotate-0'}`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <ul className={`bg-white border rounded px-3 py-2 text-sm absolute top-8 z-50 ${openSort === false && 'hidden'}`}>
                <li className={`p-2 hover:bg-mainColor hover:text-white rounded cursor-pointer transition duration-75 ${articlesStat === 'published' ? 'bg-mainColor text-white' : ''}`} onClick={() => sortHandler('published')}>Published Time</li>
                <li className={`p-2 my-1 hover:bg-mainColor hover:text-white rounded cursor-pointer transition duration-75 ${articlesStat === 'like' ? 'bg-mainColor text-white' : ''}`} onClick={() => sortHandler('like')}>Like</li>
                <li className={`p-2 hover:bg-mainColor hover:text-white rounded cursor-pointer transition duration-75 ${articlesStat === 'hits' ? 'bg-mainColor text-white' : ''}`} onClick={() => sortHandler('hits')}>View</li>
            </ul>
        </div>
    )
}

export default Sort;