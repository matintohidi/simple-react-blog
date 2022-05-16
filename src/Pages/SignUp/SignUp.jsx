import React , { useState , useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { signup } from '../../services';
import { useBlog } from '../../context/context';

// import components
import Input from '../../Components/Input/Input';
import Loader from '../../Components/Layout/Loader';
import Footer from '../../Components/Login&SignUp/Footer';
import ActiveEmail from '../../Components/SignUp/ActiveEmail';

// import media
import LoginImage from '../../assets/media/Img/login&signup.jpg';
import GoogleIco from '../../assets/media/Img/Google.jpg';

const SignUp = () => {
  let { setHeaderAndFooterDisplay } = useBlog();

  const { register , handleSubmit , formState: { errors } } = useForm();
  
  const [ loader , setLoader ] = useState(true);
  const [ active , setActive ] = useState(false);

  const lableClass = 'lg:mb-2 mb-1 text-gray-500';
  const inputCLass = 'md:w-[350px] w-[250px] sm:w-[300px] xl:w-[400px] md:h-[50px] h-[35px] px-3 py-2 lg:mb-4 mb-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all';

  useEffect(() => {
    setLoader(false);
    setHeaderAndFooterDisplay(true);

    return () => setHeaderAndFooterDisplay(false)
  },[]);

  const SignUpHandler = (data) => {
    setLoader(true);

    signup(data)
      .then(() => {
        setLoader(false);
        toast.success('Your account was created successfully');
        setActive(true);
      })
      .catch(() => {
        setLoader(false);
        toast.error('There is a Problem');
      })
  }

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        draggable={false}
        pauseOnHover={false}
        closeOnClick
      />
      {
        loader ? <Loader /> : active ? <ActiveEmail /> : <div className="flex flex-row-reverse">
        <div className="-z-10 w-1/2 hidden lg:block relative">
          <img src={LoginImage} className="h-screen brightness-50" />
          <h1 className="font-TheBrown font-bold tracking-widest text-5xl absolute xl:right-[40%] lg:right-[37%] bottom-1/2 text-white">Read It</h1>
        </div>
        <div className="lg:m-auto flex flex-col mx-auto mt-6">
          <div className="mb-8">
              <p className="font-openSansSm text-md">Welcome To Our Blog</p>
              <h1 className="lg:text-2xl text-xl font-extrabold text-gray-700">Create Account</h1>
              <form onSubmit={handleSubmit(SignUpHandler)} className="sm:mt-6 mt-2">
                  <Input lableClass={lableClass} lable='Username' inputClass={inputCLass} type='text' placeHolder='Username' register={{ ...register('username' , { required: 'Please enter your username.' }) }} />
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