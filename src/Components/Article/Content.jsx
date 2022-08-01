import React from 'react';
import ReactMarkdown from 'react-markdown';

// import components
import { ImageLazy } from '../ImageLazy/ImageLazy';
import AboutArticle from './AboutArticle';

const Content = ({ data , setData , slug , setComments , comments }) => {
    return (
        <div className="mx-4 md:mx-20 lg:mx-24">
            <h1 className="mx-4 text-2xl font-black text-center mt-8 text-gray-700">{data.title}</h1>
            <div className="flex justify-center">
                <ImageLazy src={data.image} className="rounded mt-6 image" alt={data.title} />
            </div>
            <div className="xl:mx-20">
                <div className="mt-4 border-b-2 pb-8 px-3">
                    <ReactMarkdown className="font-thin text-sm font-openSansSm break-all">{data.content}</ReactMarkdown>
                </div>
                <AboutArticle comments={comments} setComments={setComments} setData={setData} data={data} slug={slug} />
            </div>
        </div>
    )
}

export default Content;