import React , { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { numToMonth } from '../../hooks/useMonth';
import { weekTrans } from '../../services';

const TopicArticle = () => {
    const [ data , setData ] = useState({ published:'' , author:{} });

    useEffect(() => {
        weekTrans()
        .then(res => setData(res.data))
        .catch(err => console.log(err.response))
    },[])

    let dateFormat = new Date(data.published);
    
    return (
        <div className="m-3 md:m-6 lg:m-0 lg:mx-6 lg:mt-10 backdropCard rounded lg:flex">
            <img loading="lazy" src={"http://127.0.0.1:8000" + data.image} className="rounded-t lg:rounded shadow-lg lg:w-[400px] lg:h-[320px]" />
            <div className="mx-5 py-3 lg:flex flex-col items-center justify-around w-full">
                <div className="ml-0 mx-auto w-full">
                    <div className="flex justify-between">
                        <p className="text-sm font-medium font-openSansSm">{dateFormat.getDate()} , {numToMonth(dateFormat.getMonth())} , {dateFormat.getFullYear()}</p>
                        <Link to={`/${data.author.username}`} className="text-sm tracking-widest capitalize">{data.author.username}</Link>
                    </div>
                    <h1 className="text-2xl my-4 font-black three-points">{data.title}</h1>
                    <p className="text-sm font-medium font-openSansSm break-all three-points-topic">{data.content}</p>
                </div>
                <div className="flex ml-0 mx-auto">
                    <Link to={`/article/${data.slug}`} className="text-gray-600 text-sm font-black h-12 flex justify-start px-6 items-center backdropCard hover:bg-[#d1d3d6] transition-colors mt-3 rounded cursor-pointer">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopicArticle;