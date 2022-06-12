import React from 'react';
import { numToMonth } from '../../hooks/useMonth';
import Tooltip from "react-simple-tooltip";
import { v1 as uuid } from 'uuid';

//import components
import Comments from './Comments';
import Author from './Author';
import LikeAndSave from './LikeAndSave';

const AboutArticle = ({ comments , data , slug , setLoader }) => {
    let dateFormat = new Date(data.published);

    const CopyShotLink = () => {
        const textShortLink = document.getElementById("textShortLink");
        navigator.clipboard.writeText(textShortLink.innerText);
    }

    console.log(data.tags)

    return (
        <>
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center my-4 sm:my-8">
                <div className="flex justify-start items-center flex-wrap gap-y-2 gap-x-3">
                    {
                        data.tags.map(tag => {
                            return <div key={uuid()} className="rounded-md text-center text-gray-600 px-3 py-1 backdropCard text-sm cursor-pointer">#{tag}</div>
                        })
                    }
                </div>
                <h2 className="text-lg mt-4 sm:mt-0 font-black text-gray-600">{dateFormat.getDate()} , {numToMonth(dateFormat.getMonth())} , {dateFormat.getFullYear()}</h2>
            </div>
            <div className="flex gap-y-4 mt-3 sm:mt-6 mb-4 justify-between sm:items-center  flex-col-reverse sm:flex-row">
                <Tooltip content="Copy short Link" radius={5} padding={11} background="#2084FF" border="transparent" fadeDuration={100}>
                    <button className="flex w-full border border-gray-400 rounded-full cursor-pointer px-3 py-1 items-center justify-center" onClick={CopyShotLink}>
                        <svg width="20" height="20" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1251 9.37753C11.1735 9.03246 11.2048 8.65154 11.2224 8.23142C11.342 8.16599 11.4325 8.09594 11.5044 8.02404C11.6726 7.85578 11.8308 7.58558 11.9433 7.07954C12.0583 6.56181 12.1108 5.86547 12.1108 4.91155C12.1108 3.00521 11.8476 2.22592 11.4625 1.84091C11.0775 1.45589 10.2983 1.19269 8.3919 1.19269C7.43799 1.19269 6.74164 1.24514 6.22392 1.3602C5.71788 1.47266 5.44768 1.63081 5.27942 1.79907C5.20752 1.87097 5.13746 1.96148 5.07203 2.08106C5.36761 2.06867 5.68259 2.06306 6.01814 2.06306C10.3187 2.06306 11.2404 2.98479 11.2404 7.2853C11.2404 11.5858 10.3187 12.5075 6.01814 12.5075C1.71762 12.5075 0.795898 11.5858 0.795898 7.2853C0.795898 3.79726 1.40225 2.53194 3.92593 2.17833C4.4152 0.577466 5.64584 0.164062 8.3919 0.164062C12.1899 0.164062 13.1394 1.11356 13.1394 4.91155C13.1394 7.65762 12.726 8.88826 11.1251 9.37753Z" fill="currentColor" fillOpacity="0.56"></path>
                        </svg>
                        <h2 className="text-xs ml-2 overflow-x-scroll sm:overflow-x-hidden" id="textShortLink">{data.full_short_link}</h2>
                    </button>
                </Tooltip>
                <LikeAndSave countLikes={data.like} setLoader={setLoader} slug={slug} />
            </div>
            <Author author={data.author} />
            <h1 className="mt-6 text-2xl font-black text-gray-700" id="comments">Comments</h1>
            <div>
                <Comments comments={comments} slug={data.slug} />
            </div>
        </>
    )
}

export default AboutArticle;