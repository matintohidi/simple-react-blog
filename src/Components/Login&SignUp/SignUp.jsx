import React from 'react';
import { useBlog } from '../../context/context.js';

// import components
import Input from '../../Components/Input/Input';
import Footer from './Footer';

// import media
import GoogleIco from '../../assets/media/Img/Google.jpg';

const SignUp = () => {
  let value = useBlog();

  const lableClass = 'lg:mb-2 mb-1 text-gray-500';
  const inputCLass = 'md:w-[350px] w-[250px] sm:w-[300px] xl:w-[400px] md:h-[50px] h-[35px] px-3 py-2 lg:mb-4 mb-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all';

  return (
    <div className="lg:m-auto flex flex-col mx-auto mt-6">
      <div className="mb-8">
          <p className="font-thin font-openSansSm">Welcome To Our Blog</p>
          <h1 className="lg:text-2xl text-xl font-extrabold text-gray-700">Create Account</h1>
          <div className="lg:mb-4 mb-2 sm:mt-6 mt-2">
              <Input lableClass={lableClass} lable='Full Name' inputClass={inputCLass} type='text' placeHolder='Full Name' />
              <Input lableClass={lableClass} lable='Email' inputClass={inputCLass} type='email' placeHolder='Email' />
              <Input lableClass={lableClass} lable='Password' inputClass={inputCLass} type='password' placeHolder='Password' />
          </div>
          <button className="bg-mainColor md:w-[350px] w-[250px] xl:w-[400px] sm:w-[300px] sm:h-[50px] h-[35px] text-white rounded py-2 lg:mb-4 mb-2 md:text-lg hover:bg-[#1b78eb] transition-colors text-center text-sm">Create Account</button>
          <button className="bg-gray-800 md:w-[350px] w-[250px] xl:w-[400px] sm:w-[300px] sm:h-[50px] h-[35px] text-white rounded py-2 flex justify-center items-center hover:bg-gray-700 transition-colors">
              <img src={GoogleIco} />
              <p className="ml-2 text-sm lg:text-base">Or Sign-Up With Google</p>
          </button>
          <div className="flex justify-center items-center xl:mt-16 mt-8">
              <p className="mr-2 text-sm lg:text-base">Already have an account?</p>
              <a onClick={() => value.setSignUp(false)} className="text-mainColor lg:text-sm text-xs cursor-pointer">Login</a>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignUp