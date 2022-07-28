import React , { useEffect , useState } from 'react';
import { useParams , useNavigate , useLocation } from 'react-router-dom';
import { v1 as uuid } from 'uuid';
import { useAuth } from '../../context/Auth';
import { getUser , toggleFollow , isFollowed } from '../../services';

//import Components
import Loader from '../../Components/Layout/Loader';
import Socials from '../../Components/Socials/Socials';
import { ImageLazy } from '../../Components/ImageLazy/ImageLazy';

//import Media
import DefaultBanner from '../../assets/media/Img/profile_header_default.webp';
import UserCard from '../../Components/Profile/UserCard';
import { toast } from 'react-toastify';

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = useParams();
  const { user , userData } = useAuth();

  const [ loader , setLoader ] = useState(true);
  const [ data  , setData ] = useState({ socials: {} , followers: [] , followings: [] });
  const [ followModalStat , setFollowModalStat ] = useState({ show: false , followers: true , followings: false });
  const [ followStat , setFollowStat ] = useState(false);

  useEffect(() => {
    window.scrollTo(0 , 0);
    setFollowModalStat({ show: false , followers: true , followings: false });
    
    getUser(username)
      .then(res => {
        setData(res.data);

        isFollowed(res.data.id , user.token)
          .then(res => {
            setFollowStat(res.data);
            setLoader(false);
          })
          .catch(err => console.log(err.response))
      })
      .catch(err => err.response.status === 404 && navigate('/not-found'))
  },[location.pathname])

  useEffect(() => {   
    let body = document.querySelector('body');

    if(followModalStat.show) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  },[followModalStat.show])

  const followHandler = (e) => {
    setLoader(true);

    toggleFollow(followStat ? 'unfollow' : 'follow' , data.id , user.token)
      .then(() => {
        setLoader(false);
        e.target.innerText = followStat ? 'Follow' : 'Unfollow';
        setFollowStat(!followStat);
      })
      .catch(({ response }) => toast.error(response.data.message))
  }

  return (
    <>
      {
        loader
        ? <Loader />
        : <>
          <div className={`blackScreen z-40 ${followModalStat.show ? '' : 'hidden'}`}></div>
          <main className="lg:mx-20 xl:mx-40">
            <div className="backdropCircle rounded-xl p-4 my-6 mx-4">
              <div className="flex flex-col justify-center items-center">
                <div className="lg:h-96 relative md:h-60 h-40 rounded-2xl overflow-hidden w-full">
                  <ImageLazy src={DefaultBanner} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-52 md:h-52 w-24 h-24 rounded-full md:border-8 border-4 md:-mt-28 -mt-12 border-mainColor object-cover group relative overflow-hidden">
                    <ImageLazy src={data.profile} className="transition duration-200 transform group-hover:scale-110 w-full h-full object-cover" alt="Profile Image" />
                </div>
                <div className="mb-5 md:mt-5 mt-2 text-gray-500 font-thin tracking-widest">
                  <h1 className="text-lg">{data.get_full_name}</h1>
                  <h1 className="mt-2 text-xl text-center">{data.username}</h1>
                </div>
                <div className={`flex flex-col-reverse sm:flex-row sm:justify-between w-full ${data.socials.length !== {} ? 'border-b border-gray-400 border-opacity-30 pb-4' : ''}`}>
                  <div className="flex justify-center sm:justify-start">
                    <button onClick={() => setFollowModalStat({ show: true , followers: true , followings: false })} type="button" className="mr-4 md:mr-6 sm:text-xl text-gray-400 hover:text-mainColor transition">Followers <span className="ml-1 font-Mont">{data.followers.length}</span></button>
                    <button onClick={() => setFollowModalStat({ show: true , followers: false , followings: true })} type="button" className="sm:text-xl text-gray-400 hover:text-mainColor transition">Followings <span className="ml-1 font-Mont">{data.followings.length}</span></button>
                  </div>
                  <div className="flex justify-center mb-4 sm:mb-0 sm:justify-start">
                    <button onClick={(e) => followHandler(e)} type="button" className={`bg-mainColor rounded sm:rounded-lg sm:px-6 px-4 sm:h-12 h-10 text-white sm:text-lg text-base border border-mainColor transition duration-200 hover:bg-white hover:text-mainColor ${userData.id === data.id ? 'hidden' : ''}`}>{ followStat ? 'Unfollow' : 'Follow' }</button>
                  </div>
                </div>
                <ul className="flex items-center my-4">
                  <Socials socials={data.socials} />
                </ul>
              </div>
            </div>
            <div className="backdropCircle rounded-xl p-4 my-6 mx-4 text-mainColor">
              <i className="flex w-1 h-11 bg-mainColor absolute right-0 rounded-tl-full rounded-bl-full top-1/2 transform -translate-y-1/2"></i>
              <div className="m-4">
                <h2 className="flex items-center justify-center sm:justify-start font-TheBrown text-3xl mb-3">
                  <i className="w-2 h-2 bg-mainColor mr-2 mt-2 sm:flex hidden rounded-full"></i>
                  About me
                </h2>
                <div className="flex justify-center sm:justify-start">
                  <p className="text-gray-500">{data.about}</p>
                </div>
              </div>
              <i className="flex w-1 h-11 bg-mainColor absolute left-0 rounded-tr-full rounded-br-full top-1/2 transform -translate-y-1/2"></i>
            </div>
            {
              followModalStat.show && <div className="bg-white p-6 rounded-2xl centerModal h-[98%] md:h-fit z-50 w-[95%] sm:w-[70%] lg:w-1/2 xl:w-1/3">
                  <div className="flex justify-end">
                    <button onClick={() => setFollowModalStat({ show: false , followers: true , followings: false })} type="button" className="transition text-gray-400 bg-transparent hover:bg-mainColor hover:text-white rounded-lg text-sm p-1.5">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                    </button>
                  </div>
                  <div className="sm:m-4">
                    <div className="flex justify-between overflow-x-scroll sm:overflow-x-hidden">
                      <button onClick={() => setFollowModalStat({ show: true , followers: true , followings: false })} type="button" className={`sm:mr-2 md:mr-0 font-Mont px-4 sm:px-6 pb-2 text-lg sm:text-xl lg:text-2xl ${followModalStat.followers ? 'text-mainColor border-b-2 border-blue-300' : 'text-gray-400 border-b-2 border-gray-300 border-opacity-60'}`}>Followers</button>
                      <button onClick={() => setFollowModalStat({ show: true , followers: false , followings: true })} type="button" className={`font-Mont px-4 sm:px-6 pb-2 text-lg sm:text-xl lg:text-2xl ${followModalStat.followings ? 'text-mainColor border-b-2 border-blue-300' : 'text-gray-400 border-b-2 border-gray-300 border-opacity-60'}`}>Followings</button>
                    </div>
                    <div className="flex flex-col gap-y-4 h-[426px] overflow-y-scroll scrollBar mt-6 mmd">
                      {
                        followModalStat.followers ? data.followers.map(followerData => <UserCard key={uuid()} data={followerData} />) : data.followings.map(followingData => <UserCard key={uuid()} data={followingData} />)
                      }
                    </div>
                  </div>
              </div>
            }
          </main>
        </>
      }
    </>
  )
}

export default Profile;