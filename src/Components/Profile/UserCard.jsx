import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/Auth';
import { toggleFollow , isFollowed } from '../../services';

// import components
import { ImageLazy } from '../ImageLazy/ImageLazy';

const UserCard = ({ data }) => {
    const { id , username , profile ,get_full_name } = data;
    const { user , userData } = useAuth();
    const [ followStat , setFollowStat ] = useState(false);

    useEffect(() => {
        isFollowed(id , user.token)
            .then(res => setFollowStat(res.data))
            .catch(err => console.log(err.response))
    },[])

    const followHandler = (e) => {
        toggleFollow(followStat ? 'unfollow' : 'follow' , id , user.token)
            .then(() => {
                e.target.innerText = followStat ? 'Follow' : 'Unfollow';
                setFollowStat(!followStat);
            })
            .catch(({ response }) => toast.error(response.data.message))
    }

    return (
        <div className="flex justify-between items-center">
            <div className="flex">
                <Link to={`/${username}`} className="md:w-16 md:h-16 w-14 h-14 rounded-full md:border-4 border-2 border-mainColor object-cover group overflow-hidden">
                    <ImageLazy src={profile} className="transition duration-200 transform group-hover:scale-105 w-full h-full object-cover" alt="Profile Image" />
                </Link>
                <div className={`flex flex-col ${get_full_name !== '' ? 'justify-between' : 'justify-center'} py-1 ml-2`}>
                    <Link to={`/${username}`} className="font-MontBold text-gray-700 break-all w-fit">{username}</Link>
                    <p className="break-all">{get_full_name}</p>
                </div>
            </div>
            <button onClick={(e) => followHandler(e)} type="button" className={`px-6 sm:px-10 py-1.5 text-center bg-mainColor text-white font-Mont rounded text-sm ${userData.id === data.id ? 'hidden' : ''}`}>{ followStat ? 'Unfollow' : 'Follow' }</button>
        </div>
    )
}

export default UserCard;