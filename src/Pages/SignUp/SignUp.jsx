import React , { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

// import components
import Input from '../../Components/Input/Input';
import Loader from '../../Components/Layout/Loader';
import Footer from '../../Components/Login&SignUp/Footer';

// import media
import LoginImage from '../../assets/media/Img/login&signup.jpg';
import GoogleIco from '../../assets/media/Img/Google.jpg';

const SignUp = () => {
  const { register , handleSubmit , formState: { errors } } = useForm();
  const [ loader , setLoader ] = useState(false);

  const lableClass = 'lg:mb-2 mb-1 text-gray-500';
  const inputCLass = 'md:w-[350px] w-[250px] sm:w-[300px] xl:w-[400px] md:h-[50px] h-[35px] px-3 py-2 lg:mb-4 mb-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all';

  const SignUpHandler = (data) => {
    console.log(data)
  }

  return (
    <>
      {
        loader ? <Loader /> : <div className="flex flex-row-reverse">
          <img src={LoginImage} className="-z-10 w-1/2 h-screen hidden lg:block" />
          <div className="lg:m-auto flex flex-col mx-auto mt-6">
            <div className="mb-8">
                <p className="font-thin font-openSansSm">Welcome To Our Blog</p>
                <h1 className="lg:text-2xl text-xl font-extrabold text-gray-700">Create Account</h1>
                <form onSubmit={handleSubmit(SignUpHandler)} className="sm:mt-6 mt-2">
                    <Input lableClass={lableClass} lable='Full Name' inputClass={inputCLass} type='text' placeHolder='Full Name' register={{ ...register('name' , { required: 'Please enter your full name.' }) }} />
                    <Input lableClass={lableClass} lable='Email' inputClass={inputCLass} type='email' placeHolder='Email' register={{ ...register('email' , { required: 'Please enter your email.' }) }} />
                    <Input lableClass={lableClass} lable='Password' inputClass={inputCLass} type='password' placeHolder='Password' register={{ ...register('password' , { required: 'Please enter your password.' }) }} />
                    <button className="bg-mainColor md:w-[350px] w-[250px] xl:w-[400px] sm:w-[300px] sm:h-[50px] h-[35px] text-white rounded py-2 mb-2 md:text-lg hover:bg-[#1b78eb] transition-colors text-center text-sm">Create Account</button>
                </form>
                <button className="bg-gray-800 md:w-[350px] w-[250px] xl:w-[400px] sm:w-[300px] sm:h-[50px] h-[35px] text-white rounded py-2 flex justify-center items-center hover:bg-gray-700 transition-colors">
                  <img src={GoogleIco} />
                  <p className="ml-2 text-sm lg:text-base">Or Sign-Up With Google</p>
                </button>
                <div className="flex justify-center items-center xl:mt-16 mt-8">
                    <p className="mr-2 text-sm lg:text-base">Already have an account?</p>
                    <Link to="/Login" className="text-mainColor lg:text-sm text-xs cursor-pointer">Login Now</Link>
                </div>
            </div>
            <Footer />
          </div>
        </div>
      }
    </>
  )
}

export default SignUp;