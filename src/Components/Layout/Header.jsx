import React , { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [ open , setOpen ] = useState(false);
    const genericHamburgerLine = `h-0.5 w-5 rounded-full bg-white transition ease transform duration-300`;

    return (
        <header className="lg:mt-7 mt-2 w-full lg:absolute top-0">
            <nav className="flex justify-between items-center">
                <h2 className="text-gray-700 text-3xl my-auto font-thin text-left ml-4 font-TheBrown">ReadIt</h2>
                <div className="space-y-1 bg-mainColor w-11 h-11 rounded flex flex-col justify-center items-center rounded-r-none cursor-pointer right-0 absolute md:hidden z-20" onClick={() => setOpen(!open)}>
                    <span className={`${genericHamburgerLine} ${open ? "rotate-45 translate-y-2 my-1" : ""}`}/>
                    <span className={`${genericHamburgerLine} ${open ? "opacity-0" : ""}`} />
                    <span className={`${genericHamburgerLine} ${open ? "-rotate-45 -translate-y-2 my-1" : ""}`}/>
                </div>
                <div className="hidden md:flex mr-4">
                    <ul className="flex items-center justify-center">
                        <li className="text-gray-600 hover:text-black transition-colors font-bold text-sm">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mx-4 text-gray-600 hover:text-black transition-colors font-bold text-sm">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="text-gray-600 hover:text-black transition-colors font-bold text-sm">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="mx-4 text-gray-600 hover:text-black transition-colors font-bold text-sm">
                            <Link to="/contact">Contact</Link>
                        </li>

                        <li className="text-gray-600 hover:text-black transition-colors font-bold text-sm">
                            <Link to="/team">Team</Link>
                        </li>
                        <Link to="/LoginSignup">
                            <li className="ml-4 text-white hover:bg-[#1d7bee] transition text-sm bg-mainColor px-3 py-1 rounded-full cursor-pointer">Login/Signup</li>
                        </Link>
                    </ul>
                </div>
                {
                    open ? <div className={`absolute right-0 top-0 h-72 w-28 bg-mainColor z-10 rounded-bl-md ${open ? "menu" : "menuclose"}`}>
                        <ul className="flex flex-col justify-center items-center">
                            <li className="text-white transition-colors text-sm mb-5 mt-12">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-white transition-colors text-sm mb-5">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="text-white transition-colors text-sm mb-5">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="text-white transition-colors text-sm mb-5">
                                <Link to="/contact">Contact</Link>
                            </li>

                            <li className="text-white transition-colors text-sm mb-5">
                                <Link to="/team">Team</Link>
                            </li>
                            <Link to="/LoginSignup">
                                <li className="text-white transition-colors text-sm">Login/Signup</li>
                            </Link>
                        </ul>
                    </div> : null
                }
            </nav>
        </header>
    )
}