import React from 'react';
import { toast } from 'react-toastify';
import { createArticle } from '../../services';

const Form = ({ setLoader , setData , setSlug , setNext , token }) => {
    const nextHandler = (e) => {
        setLoader(true);
        e.preventDefault();
        let formData = new FormData(e.target);

        if(!formData.get('title').trim()) {
            toast.error('Please enter your title');
            setLoader(false);
            window.scrollTo(0 , 0);
        } else if(!formData.get('content').trim()) {
            toast.error('Please enter your content');
            setLoader(false);
            window.scrollTo(0 , 0);
        } else if(!formData.get('image').name) {
            toast.error('Please choose your image');
            setLoader(false);
            window.scrollTo(0 , 0);
        } else {
            createArticle(formData , token)
                .then((res) => {
                    setLoader(false);
                    setData({ title: res.data.title , content: res.data.content });
                    setSlug(res.data.slug);
                    setNext(true);
                })
                .catch(({ response }) => toast.error(response.data));
            setLoader(false);
        }
    }

    return (
        <form onSubmit={nextHandler} encType="multipart/form-data">
            <div className="mx-8 sm:mx-14 md:mx-18 lg:mx-22 xl:mx-32 lg:mt-12">
                <h1 className="font-TheBrown text-2xl lg:text-3xl text-gray-600 text-center">Create Article</h1>
                <div className="mt-12 flex flex-col items-center">
                    <div className="w-full sm:w-3/4 relative h-12">
                        <input name="title" type="text" className="inputText" placeholder=" " />
                        <label className="inputLable">Title</label>
                    </div>
                    <div className="w-full sm:w-3/4 h-40 mt-6 flex flex-col items-center group relative">
                        <textarea name="content" className="inputText overflow-y-scroll scrollBar" placeholder=" "></textarea>
                        <label className="inputLable">Content</label>
                    </div>
                    <div className="flex mt-6 items-center justify-center">
                        <div className="w-64 flex flex-col items-center px-4 py-6 bg-white text-mainColor rounded-lg tracking-wide uppercase border border-mainColor cursor-pointer hover:bg-mainColor hover:border-white hover:text-white transition-all">
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <label className="mt-2 text-base leading-normal">Image</label>
                            <input type="file" name="image" className="absolute w-60 px-4 py-6 opacity-0" />
                        </div>
                    </div>
                </div>
                <div className="my-6 flex justify-center items-center">
                    <button className="px-6 py-2 text-center border border-mainColor text-mainColor rounded-full font-openSansSm transition hover:bg-mainColor hover:text-white">Next</button>
                </div>
            </div>
        </form>
    )
}

export default Form;