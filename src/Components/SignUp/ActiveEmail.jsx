import React from 'react';
import { Link } from 'react-router-dom';

//import Components
import Footer from '../Login&SignUp/Footer';

const ActiveEmail = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="backdropCircle rounded-xl w-[250px] h-[200px] sm:w-[350px] sm:h-[300px] mb-6 p-4 flex flex-col justify-between text-center">
                <h1 className="text-2xl text-mainColor font-TheBrown tracking-wider">Active Email</h1>
                <p className="font-openSansSm">Please check your email !!</p>
                <Link to="/Login" className="bg-mainColor text-white px-4 py-2 rounded-sm">Ok</Link>
            </div>
            <Footer />
        </div>
    )
}

export default ActiveEmail;