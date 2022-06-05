import React , { useState , useEffect } from 'react';
import { Link , useLocation , useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import { getMeUser , logout } from '../../services';
import Avatar from 'react-nice-avatar';
import { useBlog } from '../../context/context';

export default function Header() {
    let { headerAndFooterDisplay } = useBlog();
    let { user , setUser } = useAuth();

    const location = useLocation();

    const [ open , setOpen ] = useState(false);
    const [ dropDown , setDropDown ] = useState(false);
    const [ dataProfile , setDataProfile ] = useState({});

    useEffect(() => {
        user.isAuthenticated && getMeUser(user.token)
            .then(res => setDataProfile(res.data))
            .catch(err => console.log(err.response))
    },[])

    useEffect(() => setDropDown(false),[location.pathname]);

    const genericHamburgerLine = 'h-0.5 w-5 rounded-full bg-white transition ease transform duration-300';
    const listItemClassLg = 'text-gray-600 hover:text-black transition-colors font-bold text-sm';
    const listItemClassSm = 'text-white transition-colors text-sm mb-5';
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

    const LogOut = () => {
        logout(user.token)
            .then(() => {
                setUser({ isAuthenticated: false , token: null });
                setDropDown(false);
                setOpen(false);
            })
            .catch(err => console.log(err.response))
    }

    return (
        <header className={`lg:mt-7 mt-2 w-full ${headerAndFooterDisplay ? 'hidden' : '' }`}>
            <nav className="flex justify-between items-center">
                <h2 className="text-gray-700 text-3xl my-auto font-thin text-left ml-4 font-TheBrown">ReadIt</h2>
                <div className="space-y-1 bg-mainColor w-11 h-11 rounded flex flex-col justify-center items-center rounded-r-none cursor-pointer right-0 absolute md:hidden z-20" onClick={() => setOpen(!open)}>
                    <span className={`${genericHamburgerLine} ${open ? "rotate-45 translate-y-2 my-1" : ""}`}/>
                    <span className={`${genericHamburgerLine} ${open ? "opacity-0" : ""}`} />
                    <span className={`${genericHamburgerLine} ${open ? "-rotate-45 -translate-y-2 my-1" : ""}`}/>
                </div>
                <div className="hidden md:flex mr-4">
                    <ul className="flex items-center justify-center">
                        <li className={listItemClassLg}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={`mx-4 ${listItemClassLg}`}>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className={listItemClassLg}>
                            <Link to="/team">Team</Link>
                        </li>
                        {
                            user.isAuthenticated === false ? <Link to="/login">
                                <li className="ml-4 text-white hover:bg-[#1d7bee] transition text-sm bg-mainColor px-3 py-1 rounded-full cursor-pointer">Login/Signup</li>
                            </Link> : 
                            dataProfile.profile === null ? <Avatar onClick={() => setDropDown(!dropDown)} className="cursor-pointer ml-4 transition duration-200 transform group-hover:scale-110 w-12 h-12 xl:w-14 xl:h-14" { ...config } />
                            : <img onClick={() => setDropDown(!dropDown)} src={dataProfile.profile} className="cursor-pointer object-cover ml-4 rounded-full transition duration-200 transform group-hover:scale-110 w-12 h-12 xl:w-14 xl:h-14" />
                        }
                    </ul>
                    <div className={`z-10 ${dropDown ? '' : 'hidden'} bg-white divide divide-gray-300 rounded shadow-md w-40 absolute top-24 right-4`}>
                        <ul className="text-sm text-gray-700">
                            <li>
                                <Link to={`${dataProfile.username}`} className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                            </li>
                            <li>
                                <button onClick={LogOut} className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    open && <div className={`absolute right-0 top-0 h-72 w-28 bg-mainColor z-10 rounded-bl-md ${open ? "menu" : "menuclose"}`}>
                        <ul className="flex flex-col justify-center items-center">
                            <li className={`${listItemClassSm} mt-12`}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={listItemClassSm}>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className={`${listItemClassSm} mb-5`}>
                                <Link to="/team">Team</Link>
                            </li>
                            {
                                user.isAuthenticated === false ? <Link to="/login">
                                    <li className="ml-4 text-white hover:bg-[#1d7bee] transition text-sm bg-mainColor px-3 py-1 rounded-full cursor-pointer">Login/Signup</li>
                                </Link>
                                : <li className={`${listItemClassSm} mb-5`}>
                                    <Link to={`${dataProfile.username}`}>Profile</Link>
                                </li>
                            }
                        </ul>
                    </div>
                }
            </nav>
        </header>
    )
}