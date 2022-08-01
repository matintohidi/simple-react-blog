import React from 'react';
import { useAuth } from '../../context/Auth';
import { putArticle } from '../../services';

const Edit = ({ setEdit , setLoader , setData , slug , title , setTitle , content , setContent , check , setCheck }) => {
    const { user } = useAuth();

    const editHandler = (e) => {
        setLoader(true);
        e.preventDefault();
        let form = new FormData(e.target);

        form.append('status' , check);

        if(!form.get('image').name) {
            form.delete('image');
        }

        putArticle(slug , form , user.token)
            .then(res => {
                setData(res.data);
                setTitle(res.data.title);
                setContent(res.data.content);
                setCheck(res.data.status);
            })
            .catch(err => console.log(err))

        setLoader(false);
        setEdit(false);
    }

    return (
        <form onSubmit={e => editHandler(e)} className="mx-4 rounded my-8 sm:mx-12 lg:mx-16 xl:mx-16 z-10 p-4">
            <div className="mx-4 md:mx-20 lg:mx-24 flex flex-col items-center">
                <input type="text" name="title" className="p-2 border border-gray-300 rounded-lg outline-none focus:border-mainColor transition text-center text-xl" value={title} onChange={(e) => setTitle(e.target.value)} />
                <div className="flex justify-center mt-6">
                    <div className="w-64 flex flex-col items-center px-4 py-6 bg-white text-gray-400 rounded-lg tracking-wide uppercase border border-gray-300 cursor-pointer hover:bg-mainColor hover:border-white hover:text-white transition-all">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <label className="mt-2 text-base leading-normal">Image</label>
                        <input type="file" name="image" className="absolute w-60 px-4 py-6 opacity-0" />
                    </div> 
                </div>
                <div className="xl:mx-20 mt-6 w-full">
                    <div className="w-full">
                        <textarea type="text" name="content" className="overflow-y-scroll scrollBar w-full h-[200px] text-sm bg-white py-2 px-5 border border-gray-300 rounded-lg outline-none focus:border-mainColor transition" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                </div>
                <label className="relative flex justify-between items-center group text-md mt-6">
                    Release status
                    <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full peer appearance-none rounded-md" checked={check} onChange={() => setCheck(!check)} />
                    <span className="ring-1 ring-mainColor w-14 h-8 flex items-center flex-shrink-0 ml-4 p-1 bg-white rounded-full duration-300 ease-in-out peer-checked:bg-mainColor after:w-6 after:h-6 after:bg-mainColor peer-checked:after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
                </label>
            </div>
        </form>
    )
}

export default Edit;