import React , { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle , getTags , createNewTag , getTag , putArticle } from '../../services';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from "../../context/Auth";
import { v1 as uuid } from 'uuid';

// import compoenents
import Loader from "../../Components/Layout/Loader";

const CreateArticle = () => {
    const navigate = useNavigate();
    let { token } = useAuth();

    const [ loader , setLoader ] = useState(false);
    const [ check , setCheck ] = useState(true);
    const [ next , setNext ] = useState(false);
    const [ allTags , setAllTags ] = useState([]);
    const [ tag , setTag ] = useState('');
    const [ tags , setTags ] = useState([]);
    const [ tagsName , setTagsName ] = useState([]);
    const [ data , setData ] = useState(null);

    useEffect(() => {
        token === null && navigate('/');
        getTags()
            .then(res => setAllTags(res.data.map(tag => tag.name)))
            .catch(err => console.log(err.response))
    },[]);

    const createTag = (suggestionTag) => {
        if(tags.includes(tag || suggestionTag)) {
            toast.error('This tag already exists');
        } else if(tags.length > 4) {
            toast.error(`You can't enter more than 5 tags`);
        } else if(suggestionTag) {
            setTags([...tags , suggestionTag]);
            getTag(suggestionTag)
                .then(res => setTagsName([ ...tagsName , res.data.name ]))
                .catch(err => console.error(err.response))
            setTag('');
        } else if(tag.trim() === '') {
            toast.error('Please enter a correct tag');
        } else {
            setTags([...tags , tag]);
            if(allTags.includes(tag)) {
                getTag(tag)
                    .then(res => setTagsName([ ...tagsName , res.data.name ]))
                    .catch(err => console.error(err.response))  
            } else {
                createNewTag(tag)
                    .then(res => setTagsName([ ...tagsName , res.data.name ]))
                    .catch(err => console.error(err.response))
            }
            setTag('');
        }
    }

    const nextHandler = (e) => {
        e.preventDefault();

        if(e.target[0].value.trim() === '') {
            toast.error('Please enter your title');
            setLoader(false);
            window.scrollTo(0 , 0);
        } else if(e.target[1].value.trim() === '') {
            toast.error('Please enter your content');
            setLoader(false);
            window.scrollTo(0 , 0);
        } else if(e.target[2].value === '') {
            toast.error('Please choose your image');
            setLoader(false);
            window.scrollTo(0 , 0);
        } else {
            let formData = new FormData(e.target);
            formData.set('status', true);
            setNext(true);
            createArticle(formData , token)
                .then((res) => {
                    setLoader(false);
                    setData({ title: res.data.title , content: res.data.content });
                })
                .catch(err => console.error(err.response))
            window.scrollTo(0 , 0);
        }
    }

    const submitArticle = () => {
        setLoader(true);

        putArticle({ status: check , tags: tagsName , ...data } , token)
            .then((res) => {
                setLoader(false);
                navigate(`/article/${res.data.title.replaceAll(' ', '-').toLowerCase()}`)
            })
            .catch((err) => console.log(err.response));
    }

    const deleteTag = (tag) => {
        setTags(tags.filter(filterTag => filterTag !== tag));
        getTag(tag)
            .then(res => setTagsName(tagsName.filter(filterTag => filterTag !== res.data.name)))
            .catch(err => console.error(err.response))
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
                loader ? <Loader /> : <>
                    <div className={`${next ? 'blackScreen' : 'hidden'} z-40`}></div>
                    <form onSubmit={nextHandler} encType="multipart/form-data">
                        <div className="mx-8 sm:mx-14 md:mx-18 lg:mx-22 xl:mx-32 lg:mt-12">
                            <h1 className="mt-4 font-TheBrown text-2xl lg:text-3xl text-gray-600 text-center">Create Article</h1>
                            <div>
                                <div className="mt-4">
                                    <label className="text-md font-openSansSm font-extrabold mb-1">Title</label>
                                    <input name="title" className="w-full px-3 py-2 text-sm leading-tight text-gray-800 ring-1 ring-mainColor rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" type="text" placeholder="Title..." />
                                </div>
                                <div className="mt-6">
                                    <label className="text-md font-openSansSm font-extrabold mb-1">Content</label>
                                    <textarea name="content" className="h-40 w-full rounded overflow-hidden leading-tight ring-1 ring-mainColor shadow focus:ring-blue-400 focus:ring-2 focus:outline-none p-2 transition-colors" placeholder="Content..."></textarea>
                                </div>
                                <div className="flex mt-6 items-center justify-center bg-grey-300">
                                    <h2 className="w-64 flex flex-col items-center px-4 py-6 bg-white text-mainColor rounded-lg shadow-lg tracking-wide uppercase border border-mainColor cursor-pointer hover:bg-mainColor hover:text-white">
                                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <label className="mt-2 text-base leading-normal">Image</label>
                                        <input type='file' name='image' className="absolute w-60 px-4 py-6 opacity-0" />
                                    </h2>
                                </div>
                            </div>
                            <div className="my-6 flex justify-center items-center">
                                <button className="px-6 py-2 text-center border border-mainColor bg-white text-mainColor rounded-full font-openSansSm text-sm font-bold shadow hover:bg-gray-100 transition-colors">Next</button>
                            </div>
                        </div>
                    </form>
                    <div className={`${next ? 'block' : 'hidden'}`}>
                        <div className="bg-white p-6 pt-0 rounded-md centerModal h-fit z-50 w-full sm:w-1/2 showModal">
                            <div className="flex justify-between items-start py-3 rounded-t border-b">
                                <div onClick={() => setNext(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                </div>
                            </div>
                            <div className="my-6">
                                <div>
                                    <div className="flex flex-col">
                                        <label className="text-md font-openSansSm font-extrabold mb-4">Tags</label>
                                        <div className="flex justify-between">
                                            <input className={`w-3/4 px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded appearance-none outline-none transition-all ${tag.trim() !== '' && 'border-b-0 rounded-b-none'}`} type="text" placeholder="Tag..." onChange={(e) => setTag(e.target.value)} value={tag} />
                                            <button onClick={() => createTag()} className="w-1/5 py-1 bg-mainColor text-center text-white font-thin rounded hover:bg-[#1c7bf0]">Ok</button>
                                        </div>
                                        <ul className={`w-3/4 h-20 overflow-y-scroll bg-white border border-mainColor border-t-0 rounded rounded-t-none tagsScrollBar ${tag.trim() === '' && 'hidden'}`}>
                                            {
                                                allTags.map(allTag => {
                                                    return <li className={`text-mainColor text-sm p-1 w-full hover:bg-gray-100 hover:text-black transition cursor-pointer ${allTag.toUpperCase().indexOf(tag.toUpperCase()) === -1 && 'hidden'}`} onClick={() => createTag(allTag)} key={uuid()}>{allTag}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="mt-4 flex flex-wrap lg:items-center">
                                        {
                                            tags.map((tag) => {
                                                return (
                                                    <button onClick={() => deleteTag(tag)} key={uuid()} className="px-2 py-1 text-center bg-mainColor text-white mr-1 mb-1 rounded font-openSansSm">{tag}</button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mt-4">
                                    <label className="relative flex justify-between items-center group p-2 text-md">
                                        Release Status
                                        <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full peer appearance-none rounded-md" checked={check} onChange={() => setCheck(!check)} />
                                        <span className="ring-1 ring-mainColor w-14 h-8 flex items-center flex-shrink-0 ml-4 p-1 bg-white rounded-full duration-300 ease-in-out peer-checked:bg-mainColor after:w-6 after:h-6 after:bg-mainColor peer-checked:after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-center rounded-b pt-6 border-t border-gray-200">
                                <button onClick={submitArticle} type="button" className="px-6 py-2 text-center ring-1 ring-mainColor text-mainColor rounded-full font-openSansSm text-sm font-bold shadow focus:ring-2 focus:ring-blue-400 transition">Submit</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default CreateArticle;