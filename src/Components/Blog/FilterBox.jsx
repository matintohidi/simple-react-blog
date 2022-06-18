import React , { useState , useEffect } from 'react';
import { useSearchParams , useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v1 as uuid } from 'uuid';
import { useBlog } from '../../context/context';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from "react-modern-calendar-datepicker";
import { filterArticles , getTags } from '../../services';

const FilterBox = () => {
    let { setFilterArticle } = useBlog();
    let { search } = useLocation();
    
    const [ searchParams , setSearchParams ] = useSearchParams();
    const published = searchParams.get('published');

    const [ allTags , setAllTags ] = useState([]);
    const [ inputTag , setInputTag ] = useState('');
    const [ selectedDate, setSelectedDate ] = useState(published !== '' && search !== '' ? { year: published.split('-')[0] , month: published.split('-')[1] , day: published.split('-')[2] } : '');
    const [ tags , setTags ] = useState(searchParams.getAll('tags__name') || []);
    const [ searchName , setSearchName ] = useState(searchParams.get('search') || '');
    const [ author , setAuthor ] = useState(searchParams.get('author__username') || '');

    useEffect(() => {
        getTags()
            .then(res => {
                setAllTags(res.data.map(tag => tag.name));
            })
            .catch(err => console.log(err.response))
    },[]);

    useEffect(() => {
        if(search !== '') {
            filterArticles(search)
            .then(res => setFilterArticle(res.data))
            .catch(err => console.log(err.response))
        }
    },[search]);

    const searchHandler = () => {
        setSearchParams({ search: searchName , tags__name: tags.map(tag => tag) , author__username: author , published: `${selectedDate.year === undefined ? '' : `${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`}` });
    }

    const createTag = (tag) => {
        if(tags.includes(tag)) {
            toast.error('This tag already exists');
        } else if(tag) {
            setTags([...tags , tag]);
            setInputTag('');
        }
    }

    const deleteTag = (tag) => {
        setTags(tags.filter(filterTag => filterTag !== tag));
        setSearchParams({ search: searchParams.get('search') ,  tags__name: tags.filter(filterTag => filterTag !== tag) , author__name: searchParams.get('author__name') , published: searchParams.get('published') });
        toast.success('Tag removed successfully');
    }

    let filterTagShow = allTags.map(allTag => allTag.toUpperCase().indexOf(inputTag.toUpperCase()) !== -1 ? 1 : -1).includes(1);
    
    return (
        <div className="border lg:rounded-lg rounded py-4 my-4 sm:py-6 lg:py-10 w-3/4 flex flex-col items-center">
            <div className="flex justify-between relative h-12 w-3/4">
                <input className="px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded appearance-none outline-none transition-all inputText" type="text" placeholder=" " value={searchName} onChange={(e) => setSearchName(e.target.value)} />
                <label className="text-sm sm:text-md mb-4 inputLable">Name</label>
            </div>
            <div className="flex justify-between relative h-12 w-3/4 mt-6">
                <input className="px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded appearance-none outline-none transition-all inputText" type="text" placeholder=" " value={author} onChange={(e) => setAuthor(e.target.value)} />
                <label className="text-sm sm:text-md mb-4 inputLable">Author</label>
            </div>
            <div className="mt-6 w-3/4">
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <div className="flex justify-between relative h-12 w-full">
                            <input className={`px-3 py-2 text-sm leading-tight text-gray-800 border border-mainColor rounded appearance-none outline-none transition-all inputText ${inputTag.trim() !== '' ? 'border-b-0 rounded-b-none' : ''}`} type="text" placeholder=" " onChange={(e) => setInputTag(e.target.value)} value={inputTag} />
                            <label className="text-sm sm:text-md mb-4 inputLable">Tags</label>
                        </div>
                    </div>
                    <ul className={`w-full h-20 md:h-24 overflow-y-scroll border mt-2 rounded-md scrollBar ${inputTag.trim() === '' || filterTagShow === false ? 'hidden' : ''}`}>
                        {
                            allTags.map(allTag => {
                                return <li className={`text-mainColor text-sm pl-2 py-1 w-full hover:bg-gray-100 hover:text-black transition cursor-pointer ${allTag.toUpperCase().indexOf(inputTag.toUpperCase()) === -1 ? 'hidden' : ''}`} onClick={() => createTag(allTag)} key={uuid()}>{allTag}</li>
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
            <div className="mt-2 w-3/4">
                <DatePicker
                    value={selectedDate}
                    onChange={setSelectedDate}
                    inputPlaceholder="Select a date"
                    calendarClassName="responsive-calendar"
                    inputClassName="rounded-[.5rem] h-12 w-full px-5 py-2 text-left placeholder:text-[#80868B] outline-none border focus:border-mainColor transition-all"
                    wrapperClassName="w-full"
                />
            </div>
            <button className="bg-mainColor px-4 py-2 text-white rounded mt-8" onClick={searchHandler}>Filter</button>
        </div>
    )
}

export default FilterBox;