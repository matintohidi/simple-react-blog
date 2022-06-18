import React , { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { numToMonth } from '../../hooks/useMonth';
import { weekTrand } from '../../services';

// import components
import { ImageLazy } from '../ImageLazy/ImageLazy';

const TopicArticle = () => {
    const [ data , setData ] = useState({ published:'' , author:{} });
    const [ statusCode , setStatusCode ] = useState(false);

    useEffect(() => {
        weekTrand()
        .then(res => setData(res.data))
        .catch(err => err.response.status === 404 ? setStatusCode(true) : null)
    },[])

    let dateFormat = new Date(data.published);
    
    return (
        <div className={`m-3 md:m-6 lg:m-0 lg:mx-6 lg:mt-10 backdropCard rounded ${statusCode ? 'hidden' : 'lg:flex'}`}>
            <Link to={`/article/${data.slug}`}><ImageLazy src={"http://127.0.0.1:8000" + data.image} className="rounded-t lg:rounded shadow-lg lg:w-[500px] lg:h-[350px] image" /></Link>
            <div className="mx-5 py-3 lg:flex flex-col items-center justify-around w-full">
                <div className="ml-0 mx-auto flex flex-col items-start">
                    <div className="flex justify-between w-full">
                        <p className="text-sm font-medium font-openSansSm">{dateFormat.getDate()} , {numToMonth(dateFormat.getMonth())} , {dateFormat.getFullYear()}</p>
                        <Link to={`/${data.author.username}`} className="text-sm tracking-widest capitalize">{data.author.username}</Link>
                    </div>
                    <Link to={`/article/${data.slug}`}><h1 className="text-2xl my-4 font-black three-points">{data.title}</h1></Link>
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