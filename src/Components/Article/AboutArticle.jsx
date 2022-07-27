import React from 'react';
import { useNavigate } from 'react-router-dom';
import { numToMonth } from '../../hooks/useMonth';
import { v1 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import { useBlog } from '../../context/context';

//import components
import Comments from './Comments';
import Author from './Author';
import Reactions from './Reactions';

const AboutArticle = ({ comments , setComments , data , slug , setData }) => {
    const navigate = useNavigate();

    let { setFilterTag } = useBlog();

    let dateFormat = new Date(data.published);

    const copyHandler = () => {
        const textShortLink = document.getElementById("textShortLink");
        navigator.clipboard.writeText(textShortLink.innerText);
        toast.success('The short link is copid');
    }

    const tagHandler = (tag) => {
        setFilterTag(tag);
        navigate('/blog');
    }

    return (
        <>
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center my-4 sm:my-8">
                <div className="flex justify-start items-center flex-wrap gap-y-2 gap-x-3">
                    {
                        data.tags.map(tag => {
                            return <button key={uuid()} className="rounded-md text-center text-gray-600 px-3 py-1 backdropCard text-sm cursor-pointer" onClick={() => tagHandler(tag)}>#{tag}</button>
                        })
                    }
                </div>
                <h2 className="text-lg mt-4 sm:mt-0 font-black text-gray-600">{dateFormat.getDate()} , {numToMonth(dateFormat.getMonth())} , {dateFormat.getFullYear()}</h2>
            </div>
            <div className="flex gap-y-4 mt-3 sm:mt-6 mb-4 justify-between sm:items-center flex-col-reverse sm:flex-row">
                <button className="flex border border-gray-400 rounded-full cursor-pointer px-3 py-1 items-center justify-center hover:border-mainColor hover:text-mainColor transition" onClick={copyHandler}>
                    <svg width="20" height="20" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1251 9.37753C11.1735 9.03246 11.2048 8.65154 11.2224 8.23142C11.342 8.16599 11.4325 8.09594 11.5044 8.02404C11.6726 7.85578 11.8308 7.58558 11.9433 7.07954C12.0583 6.56181 12.1108 5.86547 12.1108 4.91155C12.1108 3.00521 11.8476 2.22592 11.4625 1.84091C11.0775 1.45589 10.2983 1.19269 8.3919 1.19269C7.43799 1.19269 6.74164 1.24514 6.22392 1.3602C5.71788 1.47266 5.44768 1.63081 5.27942 1.79907C5.20752 1.87097 5.13746 1.96148 5.07203 2.08106C5.36761 2.06867 5.68259 2.06306 6.01814 2.06306C10.3187 2.06306 11.2404 2.98479 11.2404 7.2853C11.2404 11.5858 10.3187 12.5075 6.01814 12.5075C1.71762 12.5075 0.795898 11.5858 0.795898 7.2853C0.795898 3.79726 1.40225 2.53194 3.92593 2.17833C4.4152 0.577466 5.64584 0.164062 8.3919 0.164062C12.1899 0.164062 13.1394 1.11356 13.1394 4.91155C13.1394 7.65762 12.726 8.88826 11.1251 9.37753Z" fill="currentColor" fillOpacity="0.56"></path>
                    </svg>
                    <h2 className="text-xs ml-2 overflow-x-scroll sm:overflow-x-hidden" id="textShortLink">{data.full_short_link}</h2>
                </button>
                <Reactions countLikes={data.like} setData={setData} slug={slug} />
            </div>
            <Author author={data.author} />
            <h1 className="mt-6 text-2xl font-black text-gray-700" id="comments">Comments</h1>
            <div>
                <Comments comments={comments} setComments={setComments} slug={data.slug} />
            </div>
        </>
    )
}

export default AboutArticle;