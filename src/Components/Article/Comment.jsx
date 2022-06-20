import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { v1 as uuid } from 'uuid';
import { useAuth } from '../../context/Auth';
import { replyComment } from '../../services';
import { useForm } from 'react-hook-form';

// import compoenents
import Loader from "../Layout/Loader";;

const Comment = ({ data , slug , child }) => {
    const { register , handleSubmit , formState: { errors } } = useForm();

    let { user } = useAuth();

    let { id , created , author , content , children } = data;

    let dateFormat = new Date(created);
    
    const [ loader , setLoader ] = useState(false);
    const [ reply , setReply ] = useState(false);

    const replyHandler = (data) => {
        setLoader(true);
        
        replyComment(slug , id , data.content , user.token)
            .then(() => window.location.reload())
            .catch(err => console.log(err.response))

        setLoader(false);
    }

    return (
        <>
            {
                loader ? <Loader /> : <>
                <div className={`my-2 backdropCircle rounded-md w-fit ${child ? 'mr-12' : ''}`}>
                    <div className="mx-4 py-5 flex flex-col sm:flex-row sm:justify-between">
                        <div>
                            <Link to={"/" + author.username}>
                                <img src={'http://127.0.0.1:8000' + author.profile} alt={author.username + " Profile image"} className="w-20 h-20 rounded-full sm:w-24 sm:h-24 md:w-28 md:h-28"/>
                            </Link>
                            <div className="mt-4">
                                <h1 className="text-lg font-black text-gray-800">{author.username}</h1>
                                <p className="text-base font-light font-openSansSm">{content}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start sm:flex-row-reverse">
                            <button onClick={() => setReply(!reply)} className="text-gray-600 px-4 py-2 font-bold text-sm backdropCard rounded-md mt-8 sm:mt-0 cursor-pointer hover:bg-gray-300">Reply</button>
                            <p className="text-sm font-thin font-openSansSm mt-3 sm:mt-2 ml-1 sm:mr-3 truncate">{dateFormat.getFullYear()}/{dateFormat.getMonth()}/{dateFormat.getDate()},{dateFormat.getHours() + 1}:{dateFormat.getMinutes() + 1}</p>
                        </div>
                    </div>
                </div>
                {
                    user.isAuthenticated && reply
                    ? <form onSubmit={handleSubmit(replyHandler)} className="mt-4 flex flex-col justify-center items-center w-full">
                        <textarea { ...register('content' , { required: 'You must complete this form' }) } className="backdropCircle h-32 w-full rounded-md overflow-y-scroll scrollBar ring-mainColor focus:ring-1 border-none outline-none text-gray-600 px-4 py-2 transition-colors" placeholder="Message..."></textarea>
                        { errors.content && <label className="text-sm text-red-600 my-2">{errors.content.message}</label> }
                        <button className="text-gray-600 px-4 py-2 font-bold text-sm backdropCard rounded-md my-4 cursor-pointer hover:bg-gray-300 transition-colors">Comment</button>
                    </form>
                    : null
                }
                {
                    children.map(child => {
                        return (
                            <Comment key={uuid()} data={child} slug={slug} child />
                        )
                    })
                }
            </>
            }
        </>
    )
}

export default Comment;