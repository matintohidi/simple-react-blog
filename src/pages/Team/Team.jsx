import React , { useEffect } from 'react';
import { useBlog } from '../../context/context';

//import components
import Navbar from '../../Components/Team/Navbar';
import Header from '../../Components/Team/Header';
import Members from '../../Components/Team/Members';

const Team = () => {
    let { setHeaderAndFooterDisplay } = useBlog();

    useEffect(() => {
        window.scrollTo(0, 0);
        setHeaderAndFooterDisplay(true);
        
        return () => setHeaderAndFooterDisplay(false);
    }, [])

    return (
        <div className="h-full bg-[#161623] pt-4">
            <Navbar />
            <div className="px-10 py-6 sm:px-24 lg:px-48 flex flex-col items-center relative">
                <Header />
                <Members />

                {/* shapes */}
                <div className="hidden md:block">
                    <svg className="absolute top-16 left-60" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="#65FF98"/>
                    </svg>
                    <svg className="absolute top-16 right-32" width="50" height="52" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_0_63)">
                        <path d="M16.6285 11.4012C14.1991 10.3775 13.0554 7.56786 14.0792 5.13849C15.1029 2.70911 17.9125 1.56545 20.3419 2.58922C22.7713 3.61298 23.915 6.42258 22.8912 8.85196C21.8674 11.2813 19.0578 12.425 16.6285 11.4012ZM19.3104 5.037C18.2307 4.58198 16.982 5.09026 16.527 6.17001C16.0719 7.24976 16.5802 8.49843 17.66 8.95345C18.7397 9.40846 19.9884 8.90019 20.4434 7.82044C20.8984 6.74069 20.3902 5.49201 19.3104 5.037ZM7.13849 33.9208C4.70911 32.8971 3.56545 30.0875 4.58921 27.6581C5.61297 25.2287 8.42258 24.085 10.852 25.1088C13.2813 26.1326 14.425 28.9422 13.4012 31.3715C12.3775 33.8009 9.56786 34.9446 7.13849 33.9208ZM9.82043 27.5566C8.74068 27.1016 7.49201 27.6098 7.03699 28.6896C6.58198 29.7693 7.09026 31.018 8.17 31.473C9.24975 31.9281 10.4984 31.4198 10.9534 30.34C11.4085 29.2603 10.9002 28.0116 9.82043 27.5566ZM11.8835 22.661C9.4541 21.6373 8.31043 18.8277 9.3342 16.3983C10.358 13.9689 13.1676 12.8252 15.5969 13.849C18.0263 14.8728 19.17 17.6824 18.1462 20.1117C17.1224 22.5411 14.3128 23.6848 11.8835 22.661ZM14.5654 16.2968C13.4857 15.8418 12.237 16.3501 11.782 17.4298C11.327 18.5096 11.8352 19.7582 12.915 20.2132C13.9947 20.6683 15.2434 20.16 15.6984 19.0802C16.1534 18.0005 15.6452 16.7518 14.5654 16.2968ZM39.148 20.8912C36.7187 19.8674 35.575 17.0578 36.5988 14.6285C37.6225 12.1991 40.4321 11.0554 42.8615 12.0792C45.2909 13.1029 46.4345 15.9125 45.4108 18.3419C44.387 20.7713 41.5774 21.915 39.148 20.8912ZM41.83 14.527C40.7502 14.0719 39.5016 14.5802 39.0466 15.66C38.5915 16.7397 39.0998 17.9884 40.1796 18.4434C41.2593 18.8984 42.508 18.3902 42.963 17.3104C43.418 16.2307 42.9097 14.982 41.83 14.527ZM29.6581 43.4108C27.2287 42.387 26.085 39.5774 27.1088 37.148C28.1326 34.7187 30.9422 33.575 33.3715 34.5988C35.8009 35.6225 36.9446 38.4321 35.9208 40.8615C34.8971 43.2909 32.0875 44.4345 29.6581 43.4108ZM32.34 37.0466C31.2603 36.5915 30.0116 37.0998 29.5566 38.1796C29.1016 39.2593 29.6098 40.508 30.6896 40.963C31.7693 41.418 33.018 40.9097 33.473 39.83C33.9281 38.7502 33.4198 37.5016 32.34 37.0466ZM34.4031 32.151C31.9737 31.1272 30.83 28.3176 31.8538 25.8883C32.8775 23.4589 35.6872 22.3152 38.1165 23.339C40.5459 24.3627 41.6896 27.1723 40.6658 29.6017C39.642 32.0311 36.8324 33.1748 34.4031 32.151ZM37.085 25.7868C36.0053 25.3317 34.7566 25.84 34.3016 26.9198C33.8466 27.9995 34.3548 29.2482 35.4346 29.7032C36.5143 30.1582 37.763 29.6499 38.218 28.5702C38.673 27.4905 38.1648 26.2418 37.085 25.7868ZM27.8882 16.1462C25.4589 15.1225 24.3152 12.3128 25.339 9.88347C26.3627 7.4541 29.1723 6.31044 31.6017 7.3342C34.0311 8.35796 35.1748 11.1676 34.151 13.5969C33.1272 16.0263 30.3176 17.17 27.8882 16.1462ZM30.5702 9.78198C29.4904 9.32696 28.2418 9.83524 27.7868 10.915C27.3317 11.9947 27.84 13.2434 28.9198 13.6984C29.9995 14.1534 31.2482 13.6452 31.7032 12.5654C32.1582 11.4857 31.6499 10.237 30.5702 9.78198ZM18.3983 38.6658C15.9689 37.642 14.8252 34.8324 15.849 32.4031C16.8728 29.9737 19.6824 28.83 22.1117 29.8538C24.5411 30.8776 25.6848 33.6872 24.661 36.1165C23.6373 38.5459 20.8277 39.6896 18.3983 38.6658ZM21.0802 32.3016C20.0005 31.8466 18.7518 32.3548 18.2968 33.4346C17.8418 34.5143 18.3501 35.763 19.4298 36.218C20.5095 36.673 21.7582 36.1648 22.2132 35.085C22.6683 34.0053 22.16 32.7566 21.0802 32.3016ZM23.1433 27.406C20.7139 26.3822 19.5702 23.5726 20.594 21.1433C21.6178 18.7139 24.4274 17.5702 26.8567 18.594C29.2861 19.6178 30.4298 22.4274 29.406 24.8567C28.3822 27.2861 25.5726 28.4298 23.1433 27.406ZM25.8252 21.0418C24.7455 20.5868 23.4968 21.095 23.0418 22.1748C22.5868 23.2545 23.095 24.5032 24.1748 24.9582C25.2545 25.4132 26.5032 24.905 26.9582 23.8252C27.4132 22.7455 26.905 21.4968 25.8252 21.0418Z" fill="#FF313F" fillOpacity="0.3"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_0_63" x="-1.26752" y="0.732483" width="52.535" height="52.535" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_63"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_63" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                    <svg className="absolute bottom-16 right-16" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="9" fill="#FF313F"/>
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default Team;