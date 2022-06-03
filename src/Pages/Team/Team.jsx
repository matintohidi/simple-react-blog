import React , { useEffect } from 'react';
import { useBlog } from '../../context/context';

import image from '../../assets/media/Img/3.jpg';
//import components
import Header from '../../Components/Team/Header';

const Team = () => {
    let { setHeaderAndFooterDisplay } = useBlog();

    useEffect(() => {
        setHeaderAndFooterDisplay(true);

        return () => setHeaderAndFooterDisplay(false);
    }, [])

    return (
        <div className="h-full bg-[#161623]">
            <Header />
            <div className="px-10 py-6 sm:px-24 lg:px-48 flex flex-col items-center relative">
                <section className="text-center">
                    <h2 className="capitalize font-Mont font-bold text-sm text-[#fc4f5d]">our team</h2>
                    <h1 className="capitalize font-MontBold font-semibold text-2xl lg:text-3xl mt-2 text-white">meet our team</h1>
                    <p className="text-gray-400 mt-5 text-sm sm:tracking-wider">our expert team is made up of creatives with technical knowhow strategists who think outside the box, and developer who push innovation.</p>
                </section>
                <section className="flex flex-col md:flex-row mt-8">
                    <div className="flex flex-col rounded-2xl items-start transition duration-300 card opacity-50 hover:opacity-100 group hover:md:-translate-y-6">
                        <div className="p-5 sm:p-10">
                            <div>
                                <img src={image} className="rounded-lg w-full object-cover grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="mt-2">
                                <h1 className="font-MontBold text-lg font-bold text-white">Matin Tohidi Sani</h1>
                                <h2 className="text-gray-300 font-Mont font-thin text-sm mt-2">Front-end Developer</h2>
                            </div>
                            <ul className="flex mt-6 justify-center">
                                <li className="cursor-pointer opacity-0 transition translate-y-10 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                                    <a className="inline-flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 backdropCard rounded-full bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href="#">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white transition duration-300 ease-linear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8986 0.219727C5.33541 0.219727 0.0195312 5.5356 0.0195312 12.0988C0.0195312 17.3553 3.41991 21.7951 8.14183 23.369C8.73579 23.473 8.95852 23.1166 8.95852 22.8048C8.95852 22.5226 8.94367 21.5872 8.94367 20.5923C5.95906 21.1417 5.18692 19.8647 4.94934 19.1965C4.8157 18.855 4.2366 17.8007 3.73174 17.5186C3.31597 17.2959 2.72202 16.7465 3.71689 16.7316C4.65236 16.7168 5.32056 17.5928 5.54329 17.9492C6.61241 19.7459 8.32002 19.2411 9.00307 18.9292C9.10701 18.1571 9.41883 17.6374 9.76035 17.3404C7.11727 17.0434 4.35539 16.0189 4.35539 11.4751C4.35539 10.1833 4.8157 9.11417 5.57299 8.28263C5.4542 7.98566 5.03843 6.76805 5.69178 5.13469C5.69178 5.13469 6.68665 4.82286 8.95852 6.35229C9.90884 6.08501 10.9186 5.95137 11.9283 5.95137C12.938 5.95137 13.9477 6.08501 14.898 6.35229C17.1699 4.80801 18.1648 5.13469 18.1648 5.13469C18.8181 6.76805 18.4024 7.98566 18.2836 8.28263C19.0409 9.11417 19.5012 10.1684 19.5012 11.4751C19.5012 16.0337 16.7244 17.0434 14.0814 17.3404C14.512 17.7116 14.8832 18.4244 14.8832 19.538C14.8832 21.1269 14.8683 22.4039 14.8683 22.8048C14.8683 23.1166 15.0911 23.4878 15.685 23.369C20.3773 21.7951 23.7776 17.3404 23.7776 12.0988C23.7776 5.5356 18.4618 0.219727 11.8986 0.219727Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="cursor-pointer mx-3 transition translate-y-10 opacity-0 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                                    <a className="inline-flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 backdropCard rounded-full bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href="#">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white fill-current transition duration-300 ease-linear" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.03757 7.85909C6.03757 6.83516 6.86763 6.00509 7.89156 6.00509C8.91549 6.00509 9.74555 6.83516 9.74555 7.85909C9.74555 8.88302 8.91549 9.71308 7.89156 9.71308C6.86763 9.71308 6.03757 8.88302 6.03757 7.85909Z"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.89156 15.2751C1.78451 15.2751 0.475586 13.9661 0.475586 7.85909C0.475586 1.75203 1.78451 0.443115 7.89156 0.443115C13.9986 0.443115 15.3075 1.75203 15.3075 7.85909C15.3075 13.9661 13.9986 15.2751 7.89156 15.2751ZM10.3635 4.1511C10.3635 4.49241 10.6402 4.7691 10.9815 4.7691C11.3229 4.7691 11.5995 4.49241 11.5995 4.1511C11.5995 3.80979 11.3229 3.5331 10.9815 3.5331C10.6402 3.5331 10.3635 3.80979 10.3635 4.1511ZM4.80157 7.85909C4.80157 6.15253 6.185 4.7691 7.89156 4.7691C9.59811 4.7691 10.9815 6.15253 10.9815 7.85909C10.9815 9.56564 9.59811 10.9491 7.89156 10.9491C6.18501 10.9491 4.80157 9.56564 4.80157 7.85909Z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="cursor-pointer opacity-0 translate-y-10 transition delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    <a className="inline-flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 backdropCard rounded-full bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href="#">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white transition duration-300 ease-linear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.4676 20.9728H16.9118V15.4042C16.9118 14.0762 16.888 12.3668 15.0624 12.3668C13.2103 12.3668 12.9269 13.8136 12.9269 15.3074V20.9724H9.37112V9.52098H12.7847V11.0859H12.8326C13.5276 9.89754 14.8247 9.18511 16.2006 9.23621C19.8046 9.23621 20.4692 11.6067 20.4692 14.6908L20.4676 20.9728ZM5.35891 7.95562C4.22689 7.95562 3.29495 7.02422 3.29495 5.8922C3.29495 4.76017 4.22646 3.82867 5.35848 3.82867C6.4904 3.82867 7.4218 4.75996 7.42201 5.89177C7.42201 7.02358 6.49072 7.95552 5.35891 7.95562ZM7.1368 20.9728H3.57725V9.52098H7.1368V20.9728ZM22.2403 0.526519H1.79034C0.83039 0.515678 0.0312315 1.29626 0.0195312 2.25622V22.7911C0.0308021 23.7516 0.829853 24.533 1.79034 24.5227H22.2403C23.2031 24.5348 24.005 23.7535 24.0179 22.7911V2.25482C24.005 1.29283 23.2021 0.513853 22.2403 0.526519Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-2xl items-start transition duration-300 card opacity-50 hover:opacity-100 group mt-5 md:ml-5 md:mt-0 hover:md:-translate-y-6">
                        <div className="p-5 sm:p-10">
                            <div>
                                <img src={image} className="rounded-lg w-full object-cover grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="mt-2">
                                <h1 className="font-MontBold text-lg font-bold text-white">Abdolrahman kiany</h1>
                                <h2 className="text-gray-300 font-Mont font-thin text-sm mt-2">Back-end Developer</h2>
                            </div>
                            <ul className="flex mt-6 justify-center">
                                <li className="cursor-pointer opacity-0 transition translate-y-10 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                                    <a className="inline-flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 backdropCard rounded-full bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href="#">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white transition duration-300 ease-linear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8986 0.219727C5.33541 0.219727 0.0195312 5.5356 0.0195312 12.0988C0.0195312 17.3553 3.41991 21.7951 8.14183 23.369C8.73579 23.473 8.95852 23.1166 8.95852 22.8048C8.95852 22.5226 8.94367 21.5872 8.94367 20.5923C5.95906 21.1417 5.18692 19.8647 4.94934 19.1965C4.8157 18.855 4.2366 17.8007 3.73174 17.5186C3.31597 17.2959 2.72202 16.7465 3.71689 16.7316C4.65236 16.7168 5.32056 17.5928 5.54329 17.9492C6.61241 19.7459 8.32002 19.2411 9.00307 18.9292C9.10701 18.1571 9.41883 17.6374 9.76035 17.3404C7.11727 17.0434 4.35539 16.0189 4.35539 11.4751C4.35539 10.1833 4.8157 9.11417 5.57299 8.28263C5.4542 7.98566 5.03843 6.76805 5.69178 5.13469C5.69178 5.13469 6.68665 4.82286 8.95852 6.35229C9.90884 6.08501 10.9186 5.95137 11.9283 5.95137C12.938 5.95137 13.9477 6.08501 14.898 6.35229C17.1699 4.80801 18.1648 5.13469 18.1648 5.13469C18.8181 6.76805 18.4024 7.98566 18.2836 8.28263C19.0409 9.11417 19.5012 10.1684 19.5012 11.4751C19.5012 16.0337 16.7244 17.0434 14.0814 17.3404C14.512 17.7116 14.8832 18.4244 14.8832 19.538C14.8832 21.1269 14.8683 22.4039 14.8683 22.8048C14.8683 23.1166 15.0911 23.4878 15.685 23.369C20.3773 21.7951 23.7776 17.3404 23.7776 12.0988C23.7776 5.5356 18.4618 0.219727 11.8986 0.219727Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="cursor-pointer mx-3 transition translate-y-10 opacity-0 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                                    <a className="inline-flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 backdropCard rounded-full bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href="#">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white fill-current transition duration-300 ease-linear" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.03757 7.85909C6.03757 6.83516 6.86763 6.00509 7.89156 6.00509C8.91549 6.00509 9.74555 6.83516 9.74555 7.85909C9.74555 8.88302 8.91549 9.71308 7.89156 9.71308C6.86763 9.71308 6.03757 8.88302 6.03757 7.85909Z"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.89156 15.2751C1.78451 15.2751 0.475586 13.9661 0.475586 7.85909C0.475586 1.75203 1.78451 0.443115 7.89156 0.443115C13.9986 0.443115 15.3075 1.75203 15.3075 7.85909C15.3075 13.9661 13.9986 15.2751 7.89156 15.2751ZM10.3635 4.1511C10.3635 4.49241 10.6402 4.7691 10.9815 4.7691C11.3229 4.7691 11.5995 4.49241 11.5995 4.1511C11.5995 3.80979 11.3229 3.5331 10.9815 3.5331C10.6402 3.5331 10.3635 3.80979 10.3635 4.1511ZM4.80157 7.85909C4.80157 6.15253 6.185 4.7691 7.89156 4.7691C9.59811 4.7691 10.9815 6.15253 10.9815 7.85909C10.9815 9.56564 9.59811 10.9491 7.89156 10.9491C6.18501 10.9491 4.80157 9.56564 4.80157 7.85909Z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="cursor-pointer opacity-0 translate-y-10 transition delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    <a className="inline-flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 backdropCard rounded-full bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href="#">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white transition duration-300 ease-linear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.4676 20.9728H16.9118V15.4042C16.9118 14.0762 16.888 12.3668 15.0624 12.3668C13.2103 12.3668 12.9269 13.8136 12.9269 15.3074V20.9724H9.37112V9.52098H12.7847V11.0859H12.8326C13.5276 9.89754 14.8247 9.18511 16.2006 9.23621C19.8046 9.23621 20.4692 11.6067 20.4692 14.6908L20.4676 20.9728ZM5.35891 7.95562C4.22689 7.95562 3.29495 7.02422 3.29495 5.8922C3.29495 4.76017 4.22646 3.82867 5.35848 3.82867C6.4904 3.82867 7.4218 4.75996 7.42201 5.89177C7.42201 7.02358 6.49072 7.95552 5.35891 7.95562ZM7.1368 20.9728H3.57725V9.52098H7.1368V20.9728ZM22.2403 0.526519H1.79034C0.83039 0.515678 0.0312315 1.29626 0.0195312 2.25622V22.7911C0.0308021 23.7516 0.829853 24.533 1.79034 24.5227H22.2403C23.2031 24.5348 24.005 23.7535 24.0179 22.7911V2.25482C24.005 1.29283 23.2021 0.513853 22.2403 0.526519Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="hidden md:block">
                    <svg className="absolute top-20 left-60" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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