import React , { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { v1 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import { createNewTag , getTag , putArticle  } from '../../services';

const NextForm = ({ next , setLoader , slug , data , token , allTags }) => {
    const navigate = useNavigate();

    const [ check , setCheck ] = useState(true);
    const [ tag , setTag ] = useState('');
    const [ tags , setTags ] = useState([]);
    const [ tagsName , setTagsName ] = useState([]);

    const createTag = (suggestionTag) => {
        if(tags.includes(tag || suggestionTag)) {
            toast.error('This tag already exists');
            setLoader(false);
        } else if(tags.length > 4) {
            toast.error(`You can't enter more than 5 tags`);
            setLoader(false);
        } else if(suggestionTag) {
            setTags([...tags , suggestionTag]);
            getTag(suggestionTag)
                .then(res => setTagsName([ ...tagsName , res.data.name ]))
                .catch(err => console.error(err.response))
            setTag('');
            setLoader(false);
        } else if(!tag.trim()) {
            toast.error('Please enter a correct tag');
            setLoader(false);
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
            setLoader(false);
        }
    }

    const deleteTag = (tag) => {
        setTags(tags.filter(filterTag => filterTag !== tag));

        getTag(tag)
            .then(res => setTagsName(tagsName.filter(filterTag => filterTag !== res.data.name)))
            .catch(err => console.error(err.response))

        toast.success('Tag removed successfully');
    }

    const submitArticle = () => {
        putArticle(slug , { status: check , tags: tagsName , ...data } , token)
            .then(() => navigate(`/article/${slug}`))
            .catch(({ response }) => toast.error(response.data));
    }

    let filterTagShow = allTags.map(allTag => allTag.toUpperCase().indexOf(tag.toUpperCase()) !== -1 ? 1 : -1).includes(1);

    return (
        <div className={`${next ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 pt-0 rounded-md centerModal h-fit z-50 w-full sm:w-1/2 showModal">
                <div className="my-6">
                    <div>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <div className="flex justify-between relative h-12 w-3/4">
                                    <input className={`px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded appearance-none outline-none transition-all inputText ${tag.trim() !== '' ? 'border-b-0 rounded-b-none' : ''}`} type="text" placeholder=" " onChange={(e) => setTag(e.target.value)} value={tag} />
                                    <label className="text-sm sm:text-md font-openSansSm mb-4 inputLable">Tags</label>
                                </div>
                                <button onClick={() => createTag()} className="w-1/5 py-1 bg-mainColor text-center text-white font-thin rounded hover:bg-[#1c7bf0]">Ok</button>
                            </div>
                            <ul className={`w-3/4 h-24 overflow-y-scroll bg-white border mt-2 rounded scrollBar ${tag.trim() === '' || filterTagShow === false ? 'hidden' : ''}`}>
                                {
                                    allTags.map(allTag => {
                                        return <li className={`text-mainColor text-sm p-1 w-full hover:bg-gray-100 hover:text-black transition cursor-pointer ${allTag.toUpperCase().indexOf(tag.toUpperCase()) === -1 ? 'hidden' : ''}`} onClick={() => createTag(allTag)} key={uuid()}>{allTag}</li>
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
                            Release status
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
    )
}

export default NextForm;