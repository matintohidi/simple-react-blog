import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/Auth';
import { toggleLike , toggleSave , isLiked , isSaved } from '../../services';
import { toast } from 'react-toastify';

const Reactions = ({ countLikes , slug , setData }) => {
    let { user  } = useAuth();

    const [ like , setLike ] = useState(false);
    const [ save , setSaeve ] = useState(false);

    useEffect(() => {
        window.scrollTo(0 , 0);

        isLiked(slug , user.token)
            .then(res => setLike(res.data))
            .catch(err => err.response.status === 401 && setLike(false))

        isSaved(slug , user.token)
            .then(res => setSaeve(res.data))
            .catch(err => err.response.status === 401 && setLike(false))
    },[])

    const likeHandler = () => {
        if(user.isAuthenticated) {
            toggleLike(like ? 'dislike' : 'like' , slug , user.token)
                .then(res => {
                    setData(prev => ({ ...prev , like: res.data }));
                    isLiked(slug , user.token)
                        .then(res => setLike(res.data))
                        .catch(err => err.response.status === 401 && setLike(false))
                })
                .catch(err => console.log(err.response))
        } else toast.error('You must sign in to like articles');
    }

    const saveHandler = () => {
        if(user.isAuthenticated) {
            toggleSave(save ? 'unsave' : 'save' , slug , user.token)
                .then(() => {
                    isSaved(slug , user.token)
                        .then(res => setSaeve(res.data))
                        .catch(err => err.response.status === 401 && setLike(false))
                })
                .catch(err => console.log(err.response))
        } else toast.error('You must sign in to save articles');
    }

    return (
        <div className="flex items-center justify-center gap-x-8">
            <div>
                <button className="flex justify-center items-center" onClick={saveHandler}>
                    <svg width="20" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-transparent transition-colors group ${save ? "fill-mainColor stroke-mainColor" : "stroke-gray-500"}`}>
                        <path className="stroke-inherit group-hover:stroke-mainColor transition-colors" d="M4.23184 22.6504L4.2318 22.6503L4.22199 22.6572C3.04557 23.4827 1.42138 22.7355 1.30875 21.2832C1.17635 19.576 0.999972 16.4481 1 11.8995V11.8175V11.8174C0.999969 10.0118 1.00095 8.43863 1.12977 7.12592C1.26037 5.79506 1.53145 4.60334 2.16086 3.63263C3.47704 1.60273 6.01221 1.01675 9.99537 1.00034C13.9832 0.983922 16.5219 1.56713 17.8395 3.6099C18.468 4.58436 18.7388 5.78163 18.8693 7.11699C18.9981 8.43473 18.9991 10.012 18.999 11.8183V11.8995C18.999 16.4481 18.8226 19.576 18.6902 21.2832C18.5776 22.7355 16.9534 23.4827 15.777 22.6572L15.7771 22.6571L15.7672 22.6504C14.7352 21.9445 13.7802 21.1846 13.036 20.5921L13.0227 20.5815C12.6844 20.3122 12.3775 20.0678 12.1367 19.8893C11.6849 19.5545 11.3077 19.3258 10.9582 19.185C10.5777 19.0318 10.2705 18.999 9.99952 18.999C9.72852 18.999 9.4213 19.0318 9.04088 19.185C8.69134 19.3258 8.31411 19.5545 7.86233 19.8893C7.62156 20.0678 7.3145 20.3123 6.97629 20.5815L6.96307 20.5921C6.21886 21.1846 5.26383 21.9445 4.23184 22.6504Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path className="stroke-inherit group-hover:stroke-mainColor transition-colors" d="M11.999 5.00391C12.999 5.00391 13.499 5.00011 14.2489 5.74813C14.9989 6.49615 14.9989 8.99982 14.9989 9.99976" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>
            <button className="flex justify-center items-center group transition-colors" onClick={likeHandler}>
                <div className="flex justify-center items-center">
                    <svg width="21" height="21" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={`fill-transparent transition-colors ${like ? "fill-red-700 stroke-red-700" : "stroke-gray-500 group-hover:stroke-red-700"}`} d="M8.44863 1C10.139 1 11.681 1.84142 12.8486 2.8C14.0163 1.84142 15.5583 1 17.2486 1C20.8937 1 23.8486 3.71049 23.8486 7.05386C23.8486 13.795 16.1761 17.721 13.6467 18.8321C13.1372 19.056 12.5601 19.056 12.0506 18.8321C9.52122 17.721 1.84863 13.7948 1.84863 7.0537C1.84863 3.71033 4.80355 1 8.44863 1Z" strokeWidth="2"></path>
                    </svg>
                </div>
                <span className={`ml-1 group-hover:text-red-700 ${like ? "text-red-700" : "text-gray-500"}`}>{countLikes}</span>
            </button>
            <div>
                <a href="#comments">
                    <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-transparent transition-colors stroke-gray-500 hover:stroke-gray-700">
                        <path d="M12.877 1C15.3295 1 17.2387 1.11137 18.732 1.39866C20.2202 1.68498 21.2207 2.13251 21.9215 2.75018C23.3136 3.97734 23.877 6.19513 23.877 10.6667C23.877 13.5482 23.6182 15.6685 22.9217 17.0498C22.5874 17.7127 22.164 18.1797 21.6313 18.4903C21.0928 18.8042 20.371 19 19.3772 19C18.096 19 17.1345 19.2877 16.3825 19.7971C15.6486 20.2944 15.2059 20.9455 14.8766 21.4637C14.8268 21.542 14.7802 21.6161 14.736 21.6862C14.4599 22.1245 14.2813 22.4082 14.0332 22.6307C13.8121 22.8291 13.5032 23 12.8772 23C12.2513 23 11.9424 22.8291 11.7213 22.6307C11.4732 22.4081 11.2946 22.1245 11.0185 21.6862C10.9743 21.6161 10.9277 21.542 10.8778 21.4636C10.5485 20.9454 10.1058 20.2944 9.37185 19.7971C8.61993 19.2877 7.65835 19 6.3772 19C5.3887 19 4.66913 18.7993 4.13083 18.4789C3.59659 18.1609 3.17049 17.6832 2.83402 17.0102C2.13502 15.612 1.87695 13.488 1.87695 10.6667C1.87695 6.25195 2.4387 4.02841 3.83557 2.78674C4.53837 2.16203 5.54048 1.70608 7.02679 1.41246C8.5185 1.11777 10.4265 1 12.877 1Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M13.877 9H17.877" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M7.87598 13H17.876" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Reactions;