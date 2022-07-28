import React , { useState , useEffect } from 'react';
import { Link , useLocation , NavLink } from 'react-router-dom';
import { useAuth } from '../../../context/Auth';
import { logout } from '../../../services';
import { v1 as uuid } from 'uuid';
import { toast } from 'react-toastify';

// import components
import { ImageLazy } from '../../ImageLazy/ImageLazy';

const Navigation = () => {
    let { user , setUser , userData } = useAuth();

    const location = useLocation();

    const [ dropDown , setDropDown ] = useState(false);

    useEffect(() => setDropDown(false),[location.pathname]);

    const listItemClassLg = 'text-gray-600 transition-colors font-bold text-sm';

    const Menus = [
        { name: "Home" , path: "/" },
        { name: "Blog" , path: "/blog" },
        { name: "Team" , path: "/team" },
    ];

    const LogOut = () => {
        logout(user.token)
            .then(() => {
                setUser({ isAuthenticated: false , token: null });
                setDropDown(false);
            })
            .catch(({ response }) => toast.error(response.data))
    }

    return (
        <nav className="hidden md:flex justify-between items-center">
            <Link to="/" className="text-gray-700 text-3xl my-auto font-thin text-left ml-4 font-TheBrown">ReadIt</Link>
            <div className="flex mr-4">
                <ul className="flex items-center justify-center gap-x-4">
                    {
                        Menus.map(menu => (
                            <li key={uuid()} className={listItemClassLg}>
                                <NavLink to={menu.path}>{menu.name}</NavLink>
                            </li>
                        ))
                    }
                    {
                        user.isAuthenticated === false
                        ? <Link to="/login">
                            <li className="ml-4 text-white hover:bg-[#1d7bee] transition text-sm bg-mainColor px-3 py-1 rounded-full cursor-pointer">Login/Signup</li>
                        </Link>
                        : <ImageLazy onClick={() => setDropDown(!dropDown)} src={userData.profile} className="cursor-pointer object-cover ml-4 rounded-full w-12 h-12 xl:w-14 xl:h-14" alt={userData.username} />
                    }
                </ul>
                {
                    dropDown && <div className="z-10 bg-white divide divide-gray-300 rounded shadow-md w-40 absolute top-16 xl:top-20 right-4">
                        <ul className="text-sm text-gray-700">
                            <li>
                                <Link to={`${userData.username}`} className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                            </li>
                            <li>
                                <Link to="/createarticle" className="block px-4 py-2 hover:bg-gray-100">Wrtite</Link>
                            </li>
                            <li>
                                <button onClick={LogOut} className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navigation;