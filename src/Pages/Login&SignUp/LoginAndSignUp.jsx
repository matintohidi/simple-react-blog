import React , { useState } from 'react';
import { useBlog } from '../../context/context.js';

// import components
import Loader from '../../Components/Layout/Loader';
import Login from '../../Components/Login&SignUp/Login';
import SignUp from '../../Components/Login&SignUp/SignUp';

// import media
import LoginImage from '../../assets/media/Img/login&signup.jpg';

export default function LoginAndSignUp() {
    let value = useBlog();

    const [ loader , setLoader ] = useState(false);

    return (
        loader ? <Loader /> : <div className={`flex ${value.SignUp ? "flex-row-reverse" : "flex-row"}`}>
            <img src={LoginImage} className="-z-10 w-1/2 h-screen hidden lg:block" />
            { value.SignUp ? <SignUp /> : <Login /> }
        </div>
    )
}