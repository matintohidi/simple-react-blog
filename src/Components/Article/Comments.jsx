import React , { useState } from "react";
import { v1 as uuid } from 'uuid';
import { useAuth } from '../../context/Auth';
import { useForm } from 'react-hook-form';
import { leaveComment } from "../../services";

// import Components
import Comment from "./Comment";
import Loader from "../Layout/Loader";
import { toast } from "react-toastify";


const Comments = ({ comments , slug }) => {
    const { register , handleSubmit , formState: { errors } } = useForm();

    let { user } = useAuth();

    const [ loader , setLoader ] = useState(false);

    const createComment = (data) => {
        setLoader(true);

        leaveComment(slug , data.content , user.token)
            .then(() => window.location.reload())
            .catch((err) => toast.error(err.response.statusText))

        setLoader(false);
    }

    return (
        <>
            {
                loader ? <Loader /> : <>
                <div className="flex flex-col justify-center items-end">
                    {
                        comments.length === 0 ? <div className="mx-auto">
                            <div className="text-gray-700 my-6 px-8 py-4 backdropCard rounded-md text-center">This article don't have comment</div>
                        </div> : comments.map(comment => {
                            return (
                                <Comment key={uuid()} data={comment} slug={slug} />
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="mt-6 text-xl font-black text-gray-700 tracking-tight">Leave A Comment</h1>
                    {
                        user.isAuthenticated
                        ? <form onSubmit={handleSubmit(createComment)} className="mt-4 flex flex-col justify-center items-center">
                            <textarea { ...register('content' , { required: 'You must complete this form' }) } className="backdropCircle h-32 w-full rounded-md overflow-y-scroll scrollBar ring-mainColor focus:ring-1 border-none outline-none text-gray-600 px-4 py-2 transition-colors" placeholder="Message..."></textarea>
                            { errors.content && <label className="text-sm text-red-600 my-2">{errors.content.message}</label> }
                            <button className="text-gray-600 px-4 py-2 font-bold text-sm backdropCard rounded-md my-4 cursor-pointer hover:bg-gray-300 transition-colors">Comment</button>
                        </form>
                        : <div className="text-gray-700 my-6 px-8 py-4 backdropCircle rounded-md text-center">If you like to comment, you must log in</div>
                    }
                </div>
            </>
            }
        </>
    )
}

export default Comments;