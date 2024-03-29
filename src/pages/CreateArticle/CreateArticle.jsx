import React , { useState , useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { getTags } from "../../services";

// import compoenents
import Loader from "../../Components/Layout/Loader";
import Form from "../../Components/CreateArticle/Form";
import NextForm from "../../Components/CreateArticle/NextForm";

const CreateArticle = () => {
    let { user } = useAuth();

    const [ loader , setLoader ] = useState(true);
    const [ next , setNext ] = useState(false);
    const [ data , setData ] = useState(null);
    const [ slug , setSlug ] = useState('');
    const [ allTags , setAllTags ] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        getTags()
            .then(res => {
                setLoader(false);
                setAllTags(res.data.map(tag => tag.name));
            })
            .catch(err => console.log(err.response))
    },[]);

    useEffect(() => {   
        let body = document.querySelector('body');
    
        if(next) {
          body.classList.add('overflow-hidden');
        } else {
          body.classList.remove('overflow-hidden');
        }

        return () => body.classList.remove('overflow-hidden');
      },[next])

    return (
        <>
            {
                loader ? <Loader /> : <>
                    <div className={`${next ? 'blackScreen' : 'hidden'} z-40`}></div>
                    <Form setLoader={setLoader} setData={setData} setSlug={setSlug} setNext={setNext} token={user.token} />
                    <NextForm next={next} setLoader={setLoader} data={data} slug={slug} token={user.token} allTags={allTags} />
                </>
            }
        </>
    )
}

export default CreateArticle;