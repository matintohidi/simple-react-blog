import React , { useState , useEffect } from 'react';
import { useSearchParams , useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v1 as uuid } from 'uuid';
import { filterArticles , getTags } from '../../services';
import { useBlog } from '../../context/context';

const FilterBox = ({ setArticles }) => {
    const [ searchParams , setSearchParams ] = useSearchParams();
    const [ allTags , setAllTags ] = useState([]);
    const [ tag , setTag ] = useState('');
    const [ tags , setTags ] = useState(searchParams.getAll('tags__name') || []);
    const [ searchName , setSearchName ] = useState(searchParams.get('search') || '');

    let { setData } = useBlog();
    let { search } = useLocation();

    useEffect(() => {
        if(searchParams.getAll('tags') !== []) {
            searchParams.getAll('tags')
        }
        getTags()
            .then(res => {
                setAllTags(res.data.map(tag => tag.name));
            })
            .catch(err => console.log(err.response))
    },[]);

    const searchHandler = () => {
        window.scrollTo(0 , 0)

        if(search.trim() === '' && tags === []) {
            setSearchParams({});
        } else {
            setSearchParams({ search: searchName });
            setSearchParams({ tags__name: tags });
        }

        filterArticles(search)
            .then(res => {
                setData(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err.response))
    }


    const createTag = (suggestionTag) => {
        if(tags.includes(suggestionTag)) {
            toast.error('This tag already exists');
        } else if(suggestionTag) {
            setTags([...tags , suggestionTag]);
            setTag('');
        } else if(tag.trim() === '') {
            toast.error('Please enter a correct tag');
        } else {
            setTags([...tags , tag]);
            setTag('');
        }
    }

    const deleteTag = (tag) => {
        setTags(tags.filter(filterTag => filterTag !== tag));
        setSearchParams({ tags__name: tags.filter(filterTag => filterTag !== tag) });
        toast.success('Tag removed successfully');
    }

    let filterTagShow = allTags.map(allTag => allTag.toUpperCase().indexOf(tag.toUpperCase()) !== -1 ? 1 : -1).includes(1);
    
    return (
        <div className="border lg:rounded-lg rounded py-4 my-4 sm:py-6 lg:py-10 w-3/4 flex flex-col items-center">
            <div className="flex justify-between relative h-12 w-3/4">
                <input className="px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded appearance-none outline-none transition-all inputText" type="text" placeholder=" " value={searchName} onChange={(e) => setSearchName(e.target.value)} />
                <label className="text-sm sm:text-md mb-4 inputLable">Name</label>
            </div>
            <div className="mt-6 w-3/4">
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <div className="flex justify-between relative h-12 w-full">
                            <input className={`px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded appearance-none outline-none transition-all inputText ${tag.trim() !== '' ? 'border-b-0 rounded-b-none' : ''}`} type="text" placeholder=" " onChange={(e) => setTag(e.target.value)} value={tag} />
                            <label className="text-sm sm:text-md mb-4 inputLable">Tags</label>
                        </div>
                    </div>
                    <ul className={`w-full h-20 md:h-24 overflow-y-scroll border mt-2 rounded-md scrollBar ${tag.trim() === '' || filterTagShow === false ? 'hidden' : ''}`}>
                        {
                            allTags.map(allTag => {
                                return <li className={`text-mainColor text-sm pl-2 py-1 w-full hover:bg-gray-100 hover:text-black transition cursor-pointer ${allTag.toUpperCase().indexOf(tag.toUpperCase()) === -1 ? 'hidden' : ''}`} onClick={() => createTag(allTag)} key={uuid()}>{allTag}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="mt-4 flex flex-wrap lg:items-center">
                    {
                        tags.map((tag) => {
                            return (
                                <button onClick={() => deleteTag(tag)} key={uuid()} className="px-2 py-1 text-center bg-mainColor text-white mr-1 mb-1 rounded">{tag}</button>
                            )
                        })
                    }
                </div>
            </div>
            <button className="bg-mainColor px-4 py-2 text-white rounded mt-8" onClick={searchHandler}>Filter</button>
        </div>
    )
}

export default FilterBox;