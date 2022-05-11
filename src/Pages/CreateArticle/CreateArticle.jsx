import React , { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle } from '../../services';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from "../../context/Auth";

// import compoenents
import Loader from "../../Components/Layout/Loader";

export default function CreateArticle() {
    const navigate = useNavigate();
    let { token } = useAuth();
    const { register , handleSubmit , formState: { errors } } = useForm();

    const [ loader , setLoader ] = useState(false);
    const [ check , setCheck ] = useState(true);

    useEffect(() => token === null && navigate('/'),[]);

    // const [ Tag , setTag ] = useState("");

    // const tagHandler = (e) => {
    //     setTag(e.target.value);
    // }

    // const tagsHandler = () => {
    //     if(data.tags.length > 4) {
    //         toast.error("The maximum number of allowed tags is 5");
    //     } else {
    //         if(Tag === "") {
    //             setData({...data});
    //             toast.error("Please enter a correct tag name");

    //         } else if(data.tags.includes(Tag)) {
    //             setData({...data});
    //             toast.error("Please dont enter duplicate tags");
    //         } else {
    //             setData({ ...data } , data.tags.push(Tag));
    //             setTag("");
    //         }
    //     }
    // }

    const errorsHandler = () => {
        if(errors.title) {
            toast.error(errors.title.message);
        } else if(errors.content) {
            toast.error(errors.content.message);
        } else if(errors.image) {
            toast.error(errors.image.message);
        }
    }

    const submitArticle = (data) => {
        setLoader(true);

        let newData = new FormData();
        newData.append('title' , data.title);
        newData.append('content' , data.content);
        newData.append('status' , data.status);
        newData.append('image' , data.image[0]);

        createArticle(newData , token)
            .then(() => {
                setLoader(false);
                navigate('/');
            })
            .catch((err) => console.log(err))
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
                loader ? <Loader /> : <form onSubmit={handleSubmit(submitArticle)} encType="multipart/form-data">
                    <div className="mx-8 sm:mx-14 md:mx-18 lg:mx-22 xl:mx-32 lg:mt-12">
                        <h1 className="mt-4 font-TheBrown text-2xl lg:text-3xl text-gray-600 text-center">Create Article</h1>
                        <div>
                            <div className="mt-4">
                                <h2 className="text-md font-openSansSm font-extrabold mb-1">Title</h2>
                                <input className="w-full px-3 py-2 text-sm leading-tight text-gray-800 ring-1 ring-mainColor rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" placeholder="Title..." { ...register('title' , { required: 'Please enter a Title' }) } />
                            </div>
                            <div className="mt-6">
                                <h2 className="text-md font-openSansSm font-extrabold mb-1">Content</h2>
                                <textarea className="h-40 w-full rounded overflow-hidden leading-tight ring-1 ring-mainColor shadow focus:ring-blue-400 focus:ring-2 focus:outline-none p-2 transition-colors" placeholder="Content..." { ...register('content' , { required: 'Please enter a Content' }) }></textarea>
                            </div>
                            <div className="md:flex md:items-center md:justify-between mt-6">
                                {/* <div className="lg:flex">
                                    <div>
                                        <h2 className="text-md font-openSansSm font-extrabold mb-1">Tags</h2>
                                        <div className="flex justify-between md:mr-4">
                                            <input className="w-3/4 px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" placeholder="Tag..." onChange={tagHandler} value={Tag}/>
                                            <button className="w-1/5 py-1 bg-mainColor text-center text-white font-thin rounded hover:bg-[#1c7bf0]" onClick={tagsHandler}>Ok</button>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex flex-wrap lg:justify-center lg:items-center">
                                        {
                                            data.tags.map((tag) => {
                                                return (
                                                    <p key={uuid()} className="px-2 py-1 text-center bg-mainColor text-white mr-1 mb-1 md:m-0 md:ml-1 rounded font-openSansSm">{tag}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div> */}
                                <div className="flex items-center justify-between lg:mt-6">
                                    <label className="relative flex justify-between items-center group p-2 text-md">
                                        Release Status
                                        <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full peer appearance-none rounded-md" checked={check ? true : false} onClick={() => setCheck(!check)} { ...register('status') } />
                                        <span className="ring-1 ring-mainColor w-14 h-8 flex items-center flex-shrink-0 ml-4 p-1 bg-white rounded-full duration-300 ease-in-out peer-checked:bg-mainColor after:w-6 after:h-6 after:bg-mainColor peer-checked:after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex mt-6 items-center justify-center bg-grey-300">
                                <h2 className="w-64 flex flex-col items-center px-4 py-6 bg-white text-mainColor rounded-lg shadow-lg tracking-wide uppercase border border-mainColor cursor-pointer hover:bg-mainColor hover:text-white">
                                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                    <span className="mt-2 text-base leading-normal">Image</span>
                                    <input type='file' name='file' className="absolute w-60 px-4 py-6 opacity-0" { ...register('image' , { required: 'Please choose your Image' }) } />
                                </h2>
                            </div>
                        </div>
                        <div className="my-6 flex justify-center items-center">
                            <button className="px-6 py-2 text-center border border-mainColor bg-white text-mainColor rounded-full font-openSansSm text-sm font-bold shadow hover:bg-gray-100 transition-colors" onClick={errorsHandler}>Submit Article</button>
                        </div>
                    </div>
                </form>
            }
        </>
    )
}