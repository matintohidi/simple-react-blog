import React , { useState , useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { Link , useNavigate } from 'react-router-dom';
import { login } from '../../services';
import { useAuth } from '../../context/Auth';
import { useBlog } from '../../context/context';

// import components
import Input from '../../Components/Input/Input';
import Loader from '../../Components/Layout/Loader';
import Footer from '../../Components/Login&SignUp/Footer';

// import media
import LoginImage from '../../assets/media/Img/login&signup.jpg';
import GoogleIco from '../../assets/media/Img/Google.jpg';

const Login = () => {
  let { setUser } = useAuth();
  let { setHeaderAndFooterDisplay } = useBlog();
  const navigate = useNavigate();

  const { register , handleSubmit , formState: { errors } } = useForm();
  const [ loader , setLoader ] = useState(true);

  const lableClass = 'lg:mb-2 mb-1 text-gray-500';
  const inputCLass = `md:w-[350px] w-[250px] sm:w-[300px] xl:w-[400px] md:h-[50px] h-[35px] px-3 py-2 ${errors.username || errors.password ? 'focus:ring-blue-400' : 'lg:mb-4 mb-2 focus:ring-red-600' } text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 transition-all`;

  useEffect(() => {
    setLoader(false);
    setHeaderAndFooterDisplay(true);

    return () => setHeaderAndFooterDisplay(false)
  },[]);

  const LoginHandler = (data) => {
    setLoader(true);

    login(data)
      .then(res => {
        setLoader(false);
        setUser({ isAuthenticated: true , token: res.data.auth_token });
        navigate('/');
      })
      .catch(() => {
        setLoader(false);
        toast.error('There is a Problem');
      })
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        draggable={false}
        pauseOnHover={false}
        closeOnClick
      />
      {
        loader ? <Loader /> : <div className="flex">
            <div className="-z-10 w-1/2 hidden lg:block relative">
              <img src={LoginImage} className="h-screen brightness-50" />
              <h1 className="font-TheBrown font-bold tracking-widest text-5xl absolute xl:left-[40%] lg:left-[37%] bottom-1/2 text-white">Read It</h1>
            </div>
            <div className="flex flex-col lg:m-auto mx-auto mt-4">
              <div className="mb-8">
                <p className="font-openSansSm text-md">Welcome Back</p>
                <h1 className="lg:text-2xl text-xl font-extrabold text-gray-700">Login To Your Account</h1>
                <form onSubmit={handleSubmit(LoginHandler)} className="mt-8 flex flex-col">
                  <Input lableClass={lableClass} lable='Username' inputClass={inputCLass} type='text' placeHolder='Username' register={{ ...register('username' , { required: 'Please enter your username.' , minLength: { value: 4 , message: 'The username must be at least 4 characters long.' } }) }} />
                  { errors.username && <label className="text-xs text-red-600 my-2">{errors.username.message}</label> }
                  <Input lableClass={lableClass} lable='Password' inputClass={inputCLass} type='password' placeHolder='Password' register={{ ...register('password' , { required: 'Please enter your password.' }) }} />
                  { errors.password && <label className="text-xs text-red-600 my-2">{errors.password.message}</label> }
                  <p className="text-mainColor text-sm mb-8">Forgot Password?</p>
                  <button className="bg-mainColor md:w-[350px] w-[250px] xl:w-[400px] sm:w-[300px] sm:h-[50px] h-[35px] text-white rounded py-2 mb-2 md:text-lg hover:bg-[#1b78eb] transition-colors text-center text-sm">Login</button> 
                </form>
                <button className="bg-gray-800 md:w-[350px] w-[250px] xl:w-[400px] sm:w-[300px] sm:h-[50px] h-[35px] text-white rounded py-2 flex justify-center items-center hover:bg-gray-700 transition-colors">
                  <img src={GoogleIco} />
                  <p className="ml-2 text-sm lg:text-base">Or Sign-in With Google</p>
                </button>
                <div className="flex justify-center items-center xl:mt-16 mt-8">
                    <p className="mr-2 text-sm lg:text-base">Dont Have An Account?</p>
                    <Link to="/SignUp" className="text-mainColor lg:text-sm text-xs cursor-pointer">Join Free Today</Link>
                </div>
              </div>
              <Footer />
          </div>
        </div>
      }
    </>
  )
}

export default Login;