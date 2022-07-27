import React , { useState } from "react";
import { v1 as uuid } from 'uuid';
import { useAuth } from '../../context/Auth';
import { leaveComment } from "../../services";

// import Components
import Comment from "./Comment";
import Loader from "../Layout/Loader";
import { toast } from "react-toastify";


const Comments = ({ comments , setComments , slug }) => {
    let { user } = useAuth();

    const [ loader , setLoader ] = useState(false);
    const [ text , setText ] = useState('');
    const [ showErr , setShowErr ] = useState(false);

    const createComment = () => {
        setLoader(true);

        if(text.trim()) {
            setShowErr(false);
            
            leaveComment(slug , text , user.token)
                .then((res) => {
                    setComments([...comments , res.data]);
                    setText('');
                })
                .catch(({ response }) => toast.error(response.data))
        } else {
            setShowErr(true);
        }

        setLoader(false);
    }

    return (
        <>
            {
                loader
                ? <Loader />
                : <>
                <div className="flex flex-col justify-center items-center w-full">
                    {
                        comments.length === 0
                        ? <div className="mx-auto">
                            <div className="text-gray-700 my-6 px-8 py-4 backdropCard rounded-md text-center">This article don't have comment</div>
                        </div>
                        : comments.map(comment => {
                            return (
                                <Comment key={uuid()} data={comment} setComments={setComments} slug={slug} />
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="mt-6 text-xl font-black text-gray-700 tracking-tight">Leave A Comment</h1>
                    {
                        user.isAuthenticated
                        ? <div className="mt-4 flex flex-col justify-center items-center">
                            <textarea className="backdropCircle h-32 w-full rounded-md overflow-y-scroll scrollBar ring-mainColor focus:ring-1 border-none outline-none text-gray-600 px-4 py-2 transition-colors" placeholder="Message..." value={text} onChange={e => setText(e.target.value)}></textarea>
                            { showErr && <label className="text-sm text-red-600 my-2">You should complete the form</label> }
                            <button className="text-gray-600 px-4 py-2 font-bold text-sm backdropCard rounded-md my-4 cursor-pointer hover:bg-gray-300 transition-colors" onClick={createComment}>Comment</button>
                        </div>
                        : <div className="text-gray-700 my-6 px-8 py-4 backdropCircle rounded-md text-center">If you like to comment, you must log in</div>
                    }
                </div>
            </>
            }
        </>
    )
}

export default Comments;