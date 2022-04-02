import React , { useState } from 'react';

// import media
import LoginImage from '../../assets/media/Img/login&signup.jpg';
import GoogleIco from '../../assets/media/Img/Google.jpg';

export default function Login() {
    const [ SignUp , setSignUp ] = useState(false);

    return (
        <div className={`flex ${SignUp ? "flex-row-reverse" : "flex-row"}`}>
            <img src={LoginImage} className="-z-10 w-1/2 h-screen hidden lg:block" />
            { SignUp ? <div className="lg:m-auto flex flex-col mx-auto mt-6">
                <h1 className="lg:text-2xl text-xl font-extrabold text-gray-700">Create Account</h1>
                <div className="lg:mb-4 mb-2 sm:mt-6 mt-2">
                    <div>
                        <p className="lg:mb-2 mb-1 text-gray-500">Full Name</p>
                        <input className="md:w-[350px] w-[250px] sm:w-[300px] xl:w-[400px] md:h-[50px] h-[35px] px-3 py-2 lg:mb-4 mb-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" placeholder="Full Name"/>
                    </div>
                    <div>
                        <p className="lg:mb-2 mb-1 text-gray-500">Email</p>
                        <input className="md:w-[350px] w-[250px] sm:w-[300px] xl:w-[400px] md:h-[50px] h-[35px] px-3 py-2 lg:mb-4 mb-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="email" placeholder="Email"/>
                    </div>
                    <div>
                        <p className="lg:mb-2 mb-1 text-gray-500">Password</p>
                        <input className="md:w-[350px] w-[250px] sm:w-[300px] xl:w-[400px] md:h-[50px] h-[35px] px-3 py-2 lg:mb-4 mb-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="password" placeholder="Password"/>
                    </div>
                </div>
                <button className="bg-mainColor md:w-[350px] w-[250px] xl:w-[400px] sm:w-[300px] sm:h-[50px] h-[35px] text-white rounded py-2 lg:mb-4 mb-2 md:text-lg hover:bg-[#1b78eb] transition-colors text-center text-sm">Create Account</button>
                <button className="bg-gray-800 md:w-[350px] w-[250px] xl:w-[400px] sm:w-[300px] sm:h-[50px] h-[35px] text-white rounded py-2 flex justify-center items-center hover:bg-gray-700 transition-colors">
                    <img src={GoogleIco} />
                    <p className="ml-2 text-sm lg:text-base">Or Sign-Up With Google</p>
                </button>
                <div className="flex justify-center items-center xl:mt-16 mt-8">
                    <p className="mr-2 text-sm lg:text-base">Already have an account?</p>
                    <a onClick={() => setSignUp(false)} className="text-mainColor lg:text-sm text-xs cursor-pointer">Login</a>
                </div>
            </div> : <div className="lg:m-auto flex flex-col mx-auto mt-4">
                <p className="font-thin font-openSansSm">Welcome Back</p>
                <h1 className="lg:text-2xl text-xl font-extrabold text-gray-700">Login To Your Account</h1>
                <div className="lg:mb-4 mb-2 sm:mt-6 mt-2">
                    <div>
                        <p className="lg:mb-2 mb-1 text-gray-500">Email</p>
                        <input className="md:w-[350px] w-[250px] sm:w-[300px] xl:w-[400px] md:h-[50px] h-[35px] px-3 py-2 lg:mb-4 mb-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="email" placeholder="Email"/>
                    </div>
                    <div>
                        <p className="lg:mb-2 mb-1 text-gray-500">Password</p>
                        <input className="md:w-[350px] w-[250px] sm:w-[300px] xl:w-[400px] md:h-[50px] h-[35px] px-3 py-2 lg:mb-4 mb-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="password" placeholder="Password"/>
                    </div>
                    <a href="#" className="text-mainColor text-sm">Forgot Password?</a>
                </div>
                <button className="bg-mainColor md:w-[350px] w-[250px] xl:w-[400px] sm:w-[300px] sm:h-[50px] h-[35px] text-white rounded py-2 lg:mb-4 mb-2 md:text-lg hover:bg-[#1b78eb] transition-colors text-center text-sm">Login Now</button>
                <button className="bg-gray-800 md:w-[350px] w-[250px] xl:w-[400px] sm:w-[300px] sm:h-[50px] h-[35px] text-white rounded py-2 flex justify-center items-center hover:bg-gray-700 transition-colors">
                    <img src={GoogleIco} />
                    <p className="ml-2 text-sm lg:text-base">Or Sign-in With Google</p>
                </button>
                <div className="flex justify-center items-center xl:mt-16 mt-8">
                    <p className="mr-2 text-sm lg:text-base">Dont Have An Account?</p>
                    <a onClick={() => setSignUp(true)} className="text-mainColor lg:text-sm text-xs cursor-pointer">Join Free Today</a>
                </div>
            </div> }

        </div>
    )
}