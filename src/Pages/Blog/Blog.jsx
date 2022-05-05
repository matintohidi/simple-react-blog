import React , { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import 'flowbite';

// import components
import Modal from '../../Components/Modal/Modal';

const Blog = () => {
    const { register , handleSubmit , formState: { errors } } = useForm();


    let searchHandler = (data) => {
        console.log(data)
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
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-TheBrown text-gray-600 mt-4 text-xl sm:text-2xl lg:text-3xl text-center">Search your Article</h1>
                <form onSubmit={handleSubmit(searchHandler)} className="backdropCircle lg:rounded-lg rounded py-4 mt-4 sm:py-6 lg:py-10 w-3/4 flex flex-col items-center">
                    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-2 w-3/4">
                        <h2 className="text-mainColor mb-2">Name</h2>
                        <input className="w-full py-2 px-3 text-sm leading-tight ring-1 ring-mainColor rounded shadow outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" placeholder="Name..." { ...register('name') } />
                    </div>
                    <div className="mt-6 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 w-3/4">
                        <div className="flex mb-2 items-center justify-between">
                            <h2 className="text-mainColor">Tags</h2>
                            <button className="text-blue-700 font-medium text-sm" type="button" data-modal-toggle="small-modal">Help</button>
                        </div>
                        <input className="w-full px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" placeholder="Tag..." { ...register('tag') } />
                    </div>
                    <button className="bg-mainColor px-4 py-2 text-white rounded mt-8">Filter</button>
                </form>
                <Modal />
            </div>
        </>
    )
}

export default Blog;