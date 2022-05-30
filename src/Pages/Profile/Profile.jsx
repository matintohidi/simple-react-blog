import React , { useEffect , useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { getUser } from '../../services';
import Avatar from 'react-nice-avatar';

//import Components
import Loader from '../../Components/Layout/Loader';
import Socials from '../../Components/Profile/Socials';

//import Media
import DefaultBanner from '../../assets/media/Img/profile_header_default.webp';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useParams();

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

  const [ loader , setLoader ] = useState(true);
  const [ data  , setData ] = useState({ socials: {} , followers: [] , followings: [] });
  
  useEffect(() => {
    window.scrollTo(0 , 0);
    
    getUser(user)
      .then(res => {
        setData(res.data);
        setLoader(false);
      })
      .catch(err => err.response.status === 404 && navigate('/not-found'))
  },[])

  return (
    <>
      {
        loader ? <Loader /> : <main>
          <div className="backdropCircle rounded-xl p-4 my-6 mx-4">
            <div className="flex flex-col justify-center items-center">
              <div className="lg:h-96 relative md:h-60 h-40 rounded-2xl overflow-hidden w-full">
                <img src={DefaultBanner} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-52 md:h-52 w-24 h-24 rounded-full md:border-8 border-4 md:-mt-28 -mt-12 border-mainColor object-cover group relative overflow-hidden">
                {
                  data.profile === null ? <Avatar className="transition duration-200 transform group-hover:scale-110 w-full h-full" { ...config } /> : <img src={data.profile} className="transition duration-200 transform group-hover:scale-110 w-full h-full" alt="Profile Image" />
                }
              </div>
              <div className="mb-5 md:mt-5 mt-2 text-gray-500 font-thin tracking-widest">
                <h1 className="text-lg">{data.get_full_name}</h1>
                <h1 className="mt-2 text-xl text-center">{data.username}</h1>
              </div>
              <div className={`flex justify-between w-full md:justify-start ${data.socials.length !== {} && 'border-b border-gray-400 border-opacity-30 pb-4'}`}>
                <button className="px-1 sm:px-4 py-2 md:mr-2 bg-mainColor text-white rounded font-openSansSm transition-all focus:ring-4 focus:ring-blue-300">Followers {data.followers.length}</button>
                <button className="px-1 sm:px-4 py-2 bg-mainColor text-white rounded font-openSansSm transition-all focus:ring-4 focus:ring-blue-300">Followings {data.followings.length}</button>
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
                <p>{data.about}</p>
              </div>
            </div>
            <i className="flex w-1 h-11 bg-mainColor absolute left-0 rounded-tr-full rounded-br-full top-1/2 transform -translate-y-1/2"></i>
          </div>
        </main>
      }
    </>
  )
}

export default Profile;