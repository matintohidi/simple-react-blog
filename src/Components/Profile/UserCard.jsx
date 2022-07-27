import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-nice-avatar';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/Auth';
import { toggleFollow , isFollowed } from '../../services';

// import components
import { ImageLazy } from '../ImageLazy/ImageLazy';

const UserCard = ({ data }) => {
    const { id , username , profile ,get_full_name } = data;
    const { user , authorData } = useAuth();
    const [ followStat , setFollowStat ] = useState(false);

    useEffect(() => {
        isFollowed(id , user.token)
            .then(res => setFollowStat(res.data))
            .catch(err => console.log(err.response))
    },[])

    const config = {
        "sex": "man",
        "faceColor": "#F9C9B6",
        "earSize": "small",
        "eyeStyle": "oval",
        "noseStyle": "round",
        "mouthStyle": "smile",
        "shirtStyle": "hoody",
        "glassesStyle": "none",
        "hairColor": "#000",
        "hairStyle": "thick",
        "hatStyle": "none",
        "hatColor": "#F48150",
        "eyeBrowStyle": "up",
        "shirtColor": "#FC909F",
        "bgColor": "linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)"
    }

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
                  {
                    profile === null ? <Avatar className="transition duration-200 transform group-hover:scale-110 w-full h-full" { ...config } /> : <ImageLazy src={profile} className="transition duration-200 transform group-hover:scale-110 w-full h-full" alt="Profile Image" />
                  }
                </Link>
                <div className={`flex flex-col ${get_full_name !== '' ? 'justify-between' : 'justify-center'} py-1 ml-2`}>
                    <Link to={`/${username}`} className="font-MontBold text-gray-700 break-all w-fit">{username}</Link>
                    <p className="break-all">{get_full_name}</p>
                </div>
            </div>
            <button onClick={(e) => followHandler(e)} type="button" className={`px-6 sm:px-10 py-1.5 text-center bg-mainColor text-white font-Mont rounded text-sm ${authorData.id === data.id ? 'hidden' : ''}`}>{ followStat ? 'Unfollow' : 'Follow' }</button>
        </div>
    )
}

export default UserCard;