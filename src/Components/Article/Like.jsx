import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/Auth';
import { toggleLike , isLiked } from '../../services';

const Like = ({ countLike , setLoader , slug }) => {
    let { user  } = useAuth();

    const [ like , setLike ] = useState(false);

    useEffect(() => {
        window.scrollTo(0 , 0);

        isLiked(slug , user.token)
            .then(res => setLike(res.data))
            .catch(err => console.log(err.response))
    },[])

    const likeHandler = () => {
        setLoader(true);

        toggleLike(like ? 'dislike' : 'like' , slug , user.token)
            .then(() => {
                setLoader(false);
                window.location.reload();
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div className="flex justify-center items-center mt-3 md:mt-0">
            <button className="flex justify-center items-center" onClick={likeHandler}>
                <svg viewBox="0 0 18 18" width="27" height="27" className={`fill-transparent stroke-black hover:stroke-red-700 transition-colors ${like ? "fill-red-700 stroke-red-700" : ""}`}>
                    <rect fill="#ff13dc" opacity="0"></rect><path d="M12.182,3.2545A4.00649,4.00649,0,0,0,9,5.1635a4.00649,4.00649,0,0,0-3.182-1.909A3.818,3.818,0,0,0,2,7.0725c0,3.646,7,8.273,7,8.273s7-4.578,7-8.273A3.818,3.818,0,0,0,12.182,3.2545Z"></path>
                </svg>
            </button>
            <span className="text-black ml-1">{countLike}</span>
        </div>
    )
}

export default Like;