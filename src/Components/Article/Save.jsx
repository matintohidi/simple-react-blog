import React , { useState , useEffect } from 'react';
import { useAuth } from '../../context/Auth';
import { toggleSave , isSaved } from '../../services';

const Save = ({ setLoader , slug }) => {
    let { user  } = useAuth();


    useEffect(() => {
        window.scrollTo(0 , 0);

        isSaved(slug , user.token)
            .then(res => setSaeve(res.data))
            .catch(err => console.log(err.response))
    },[])

    const saveHandler = () => {
        setLoader(true);

        toggleSave(save ? 'save' : 'unsave' , slug , user.token)
            .then(() => {
                setLoader(false);
                window.location.reload();
            })
            .catch(err => console.log(err.response))
    }

    return (
        <button className="flex justify-center items-center" onClick={saveHandler}>
            <svg width="20" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="stroke-current" d="M4.23184 22.6504L4.2318 22.6503L4.22199 22.6572C3.04557 23.4827 1.42138 22.7355 1.30875 21.2832C1.17635 19.576 0.999972 16.4481 1 11.8995V11.8175V11.8174C0.999969 10.0118 1.00095 8.43863 1.12977 7.12592C1.26037 5.79506 1.53145 4.60334 2.16086 3.63263C3.47704 1.60273 6.01221 1.01675 9.99537 1.00034C13.9832 0.983922 16.5219 1.56713 17.8395 3.6099C18.468 4.58436 18.7388 5.78163 18.8693 7.11699C18.9981 8.43473 18.9991 10.012 18.999 11.8183V11.8995C18.999 16.4481 18.8226 19.576 18.6902 21.2832C18.5776 22.7355 16.9534 23.4827 15.777 22.6572L15.7771 22.6571L15.7672 22.6504C14.7352 21.9445 13.7802 21.1846 13.036 20.5921L13.0227 20.5815C12.6844 20.3122 12.3775 20.0678 12.1367 19.8893C11.6849 19.5545 11.3077 19.3258 10.9582 19.185C10.5777 19.0318 10.2705 18.999 9.99952 18.999C9.72852 18.999 9.4213 19.0318 9.04088 19.185C8.69134 19.3258 8.31411 19.5545 7.86233 19.8893C7.62156 20.0678 7.3145 20.3123 6.97629 20.5815L6.96307 20.5921C6.21886 21.1846 5.26383 21.9445 4.23184 22.6504Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path className="stroke-current" d="M11.999 5.00391C12.999 5.00391 13.499 5.00011 14.2489 5.74813C14.9989 6.49615 14.9989 8.99982 14.9989 9.99976" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </button>
    )
}

export default Save;