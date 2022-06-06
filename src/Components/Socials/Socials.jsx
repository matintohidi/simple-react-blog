import React from 'react';

const Socials = ({ socials }) => {
    return (
        <ul className="flex">
            <li className={`mr-4 last:ml-0 ${socials.github === null && 'hidden'}`}>
                <a className="inline-flex items-center justify-center w-9 h-9 backdropCard rounded bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.github}>
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition duration-[250ms] ease-linear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.8986 0.219727C5.33541 0.219727 0.0195312 5.5356 0.0195312 12.0988C0.0195312 17.3553 3.41991 21.7951 8.14183 23.369C8.73579 23.473 8.95852 23.1166 8.95852 22.8048C8.95852 22.5226 8.94367 21.5872 8.94367 20.5923C5.95906 21.1417 5.18692 19.8647 4.94934 19.1965C4.8157 18.855 4.2366 17.8007 3.73174 17.5186C3.31597 17.2959 2.72202 16.7465 3.71689 16.7316C4.65236 16.7168 5.32056 17.5928 5.54329 17.9492C6.61241 19.7459 8.32002 19.2411 9.00307 18.9292C9.10701 18.1571 9.41883 17.6374 9.76035 17.3404C7.11727 17.0434 4.35539 16.0189 4.35539 11.4751C4.35539 10.1833 4.8157 9.11417 5.57299 8.28263C5.4542 7.98566 5.03843 6.76805 5.69178 5.13469C5.69178 5.13469 6.68665 4.82286 8.95852 6.35229C9.90884 6.08501 10.9186 5.95137 11.9283 5.95137C12.938 5.95137 13.9477 6.08501 14.898 6.35229C17.1699 4.80801 18.1648 5.13469 18.1648 5.13469C18.8181 6.76805 18.4024 7.98566 18.2836 8.28263C19.0409 9.11417 19.5012 10.1684 19.5012 11.4751C19.5012 16.0337 16.7244 17.0434 14.0814 17.3404C14.512 17.7116 14.8832 18.4244 14.8832 19.538C14.8832 21.1269 14.8683 22.4039 14.8683 22.8048C14.8683 23.1166 15.0911 23.4878 15.685 23.369C20.3773 21.7951 23.7776 17.3404 23.7776 12.0988C23.7776 5.5356 18.4618 0.219727 11.8986 0.219727Z" fill="currentColor"></path>
                    </svg>
                </a>
            </li>
            <li className={`mr-4 last:ml-0 ${socials.instagram === null && 'hidden'}`}>
                <a className="inline-flex items-center justify-center w-9 h-9 rounded backdropCard bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.instagram}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current transition duration-[250ms] ease-linear text-gray-500 group-hover:text-white" d="M6.03757 7.85909C6.03757 6.83516 6.86763 6.00509 7.89156 6.00509C8.91549 6.00509 9.74555 6.83516 9.74555 7.85909C9.74555 8.88302 8.91549 9.71308 7.89156 9.71308C6.86763 9.71308 6.03757 8.88302 6.03757 7.85909Z"></path>
                        <path className="fill-current transition duration-[250ms] ease-linear text-gray-500 group-hover:text-white" fillRule="evenodd" clipRule="evenodd" d="M7.89156 15.2751C1.78451 15.2751 0.475586 13.9661 0.475586 7.85909C0.475586 1.75203 1.78451 0.443115 7.89156 0.443115C13.9986 0.443115 15.3075 1.75203 15.3075 7.85909C15.3075 13.9661 13.9986 15.2751 7.89156 15.2751ZM10.3635 4.1511C10.3635 4.49241 10.6402 4.7691 10.9815 4.7691C11.3229 4.7691 11.5995 4.49241 11.5995 4.1511C11.5995 3.80979 11.3229 3.5331 10.9815 3.5331C10.6402 3.5331 10.3635 3.80979 10.3635 4.1511ZM4.80157 7.85909C4.80157 6.15253 6.185 4.7691 7.89156 4.7691C9.59811 4.7691 10.9815 6.15253 10.9815 7.85909C10.9815 9.56564 9.59811 10.9491 7.89156 10.9491C6.18501 10.9491 4.80157 9.56564 4.80157 7.85909Z"></path>
                    </svg>
                </a>
            </li>
            <li className={`mr-4 last:ml-0 ${socials.linkedin === null && 'hidden'}`}>
                <a className="inline-flex items-center justify-center w-9 h-9 backdropCard rounded bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.linkedin}>
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition duration-[250ms] ease-linear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.4676 20.9728H16.9118V15.4042C16.9118 14.0762 16.888 12.3668 15.0624 12.3668C13.2103 12.3668 12.9269 13.8136 12.9269 15.3074V20.9724H9.37112V9.52098H12.7847V11.0859H12.8326C13.5276 9.89754 14.8247 9.18511 16.2006 9.23621C19.8046 9.23621 20.4692 11.6067 20.4692 14.6908L20.4676 20.9728ZM5.35891 7.95562C4.22689 7.95562 3.29495 7.02422 3.29495 5.8922C3.29495 4.76017 4.22646 3.82867 5.35848 3.82867C6.4904 3.82867 7.4218 4.75996 7.42201 5.89177C7.42201 7.02358 6.49072 7.95552 5.35891 7.95562ZM7.1368 20.9728H3.57725V9.52098H7.1368V20.9728ZM22.2403 0.526519H1.79034C0.83039 0.515678 0.0312315 1.29626 0.0195312 2.25622V22.7911C0.0308021 23.7516 0.829853 24.533 1.79034 24.5227H22.2403C23.2031 24.5348 24.005 23.7535 24.0179 22.7911V2.25482C24.005 1.29283 23.2021 0.513853 22.2403 0.526519Z" fill="currentColor"></path>
                    </svg>
                </a>
            </li>
            <li className={`mr-4 last:ml-0 ${socials.telegram === null && 'hidden'}`}>
                <a className="inline-flex items-center justify-center w-9 h-9 backdropCard rounded bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.telegram}>
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition duration-[250ms] ease-linear" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current transition duration-[250ms] ease-linear text-gray-360 group-hover:text-white" d="M14.5201 1.10091C14.9846 1.57292 15.1235 2.22974 15.1762 2.70684C15.2349 3.23936 15.2147 3.85028 15.1481 4.47931C15.0142 5.74423 14.6737 7.25209 14.2178 8.70344C13.7626 10.1529 13.1735 11.606 12.5164 12.7472C12.1891 13.3158 11.8226 13.8462 11.4188 14.2646C11.0329 14.6643 10.5007 15.079 9.83011 15.1921L9.82647 15.1927C9.70023 15.2136 9.57722 15.2182 9.53384 15.2199L9.52557 15.2202C9.08768 15.238 8.70958 15.0836 8.45144 14.9449C8.17545 14.7967 7.91648 14.601 7.68553 14.3958C7.22259 13.9845 6.7714 13.4448 6.40427 12.8818C6.2031 12.5733 6.01252 12.2354 5.85673 11.8857C5.62565 11.367 5.76673 10.7776 6.11624 10.3295L8.23682 7.83084C8.34538 7.70293 8.33747 7.51341 8.21864 7.39493C8.0998 7.27645 7.90972 7.26857 7.78143 7.3768L5.27528 9.49107C4.79759 9.8615 4.16584 10.005 3.61951 9.74552C3.27018 9.57959 2.93338 9.37959 2.6257 9.168C2.04472 8.76844 1.48806 8.27275 1.07983 7.75605C0.876148 7.49825 0.683725 7.20296 0.552663 6.88349C0.42602 6.5748 0.31666 6.14468 0.419935 5.67418L0.420106 5.67341C0.561235 5.03094 0.98418 4.52223 1.38504 4.15171C1.80717 3.76154 2.33793 3.40333 2.90781 3.08052C4.05128 2.43279 5.49929 1.84543 6.9432 1.3891C8.38784 0.932535 9.88714 0.588594 11.1446 0.453149C11.7697 0.385815 12.3789 0.365015 12.911 0.425256C13.3889 0.479349 14.0498 0.622972 14.5201 1.10091Z"></path>
                    </svg>
                </a>
            </li>
            <li className={`mr-4 last:ml-0 ${socials.website === null && 'hidden'}`}>
                <a className="inline-flex items-center justify-center w-9 h-9 backdropCard rounded bg-opacity-15 group transition duration-200 hover:bg-mainColor hover:opacity-100" href={socials.website}>
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition duration-[250ms] ease-linear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2532 15.9239C14.5498 15.9239 14.7815 16.1808 14.7458 16.4753C14.5115 18.4083 14.128 20.1079 13.6501 21.4583C13.2415 22.6128 12.8014 23.4051 12.4123 23.8701C12.3436 23.9522 12.2408 23.9967 12.1337 23.9973C12.0893 23.9975 12.0447 23.9977 12 23.9977C11.9553 23.9977 11.9107 23.9975 11.8663 23.9973C11.7592 23.9967 11.6564 23.9522 11.5877 23.8701C11.1986 23.4051 10.7585 22.6128 10.3499 21.4583C9.872 20.1079 9.48851 18.4083 9.25415 16.4753C9.21845 16.1808 9.45019 15.9239 9.74683 15.9239H14.2532Z" fill="currentColor"></path>
                        <path d="M17.2714 15.9239C17.0142 15.9239 16.7993 16.1194 16.7709 16.375C16.4838 18.9568 15.9416 21.2192 15.2276 22.926C15.0706 23.3014 15.3783 23.7222 15.7765 23.6386C19.8365 22.7864 22.3932 20.417 23.4465 16.5303C23.5302 16.2215 23.2923 15.9239 22.9723 15.9239H17.2714Z" fill="currentColor"></path>
                        <path d="M23.9464 13.4521C23.9281 13.7093 23.7119 13.9054 23.454 13.9054H17.4837C17.1989 13.9054 16.9719 13.6679 16.9807 13.3832C16.9935 12.9718 17 12.5554 17 12.1347C17 11.5465 16.9873 10.9666 16.9626 10.3973C16.9501 10.1102 17.178 9.86863 17.4654 9.86863H23.454C23.7119 9.86863 23.9281 10.0647 23.9464 10.322C23.9821 10.8256 24 11.3473 24 11.887C24 12.4267 23.9821 12.9484 23.9464 13.4521Z" fill="currentColor"></path>
                        <path d="M14.9782 13.4286C14.9692 13.6955 14.7489 13.9054 14.4818 13.9054H9.51816C9.25107 13.9054 9.03079 13.6955 9.02176 13.4286C9.0074 13.004 9 12.5724 9 12.1347C9 11.5235 9.01443 10.924 9.04212 10.3387C9.05462 10.0746 9.27371 9.86863 9.53819 9.86863H14.4618C14.7263 9.86863 14.9454 10.0746 14.9579 10.3387C14.9856 10.924 15 11.5235 15 12.1347C15 12.5724 14.9926 13.004 14.9782 13.4286Z" fill="currentColor"></path>
                        <path d="M6.51627 13.9054C6.80109 13.9054 7.02807 13.6679 7.01925 13.3832C7.00651 12.9718 7 12.5554 7 12.1347C7 11.5465 7.01272 10.9666 7.03743 10.3973C7.04988 10.1102 6.82196 9.86863 6.53463 9.86863H0.546038C0.288133 9.86863 0.0718838 10.0647 0.0536232 10.322C0.0178744 10.8256 0 11.3473 0 11.887C0 12.4267 0.0178755 12.9484 0.0536264 13.4521C0.0718876 13.7093 0.288136 13.9054 0.546041 13.9054H6.51627Z" fill="currentColor"></path>
                        <path d="M1.02767 15.9239C0.707707 15.9239 0.469792 16.2215 0.553486 16.5303C1.60679 20.417 4.16345 22.7864 8.22348 23.6386C8.62172 23.7222 8.92938 23.3014 8.77236 22.926C8.05843 21.2192 7.51615 18.9568 7.22908 16.375C7.20065 16.1194 6.98577 15.9239 6.72857 15.9239H1.02767Z" fill="currentColor"></path>
                        <path d="M13.6501 2.81114C14.0861 4.04324 14.4436 5.56597 14.6808 7.29144C14.7217 7.5883 14.489 7.85018 14.1893 7.85018H9.81069C9.51104 7.85018 9.27833 7.5883 9.31916 7.29144C9.55644 5.56597 9.91388 4.04324 10.3499 2.81114C10.7585 1.65659 11.1986 0.864337 11.5877 0.39933C11.6638 0.308343 11.7308 0.237757 11.7885 0.183097C11.9098 0.068067 12.0902 0.0680669 12.2115 0.183097C12.2692 0.237757 12.3362 0.308343 12.4123 0.39933C12.8014 0.864337 13.2415 1.65659 13.6501 2.81114Z" fill="currentColor"></path>
                        <path d="M16.7131 7.40604C16.7448 7.65857 16.9584 7.85018 17.2129 7.85018H22.9723C23.2923 7.85018 23.5302 7.55257 23.4465 7.24375C22.3729 3.28226 19.7376 0.896962 15.5404 0.0878584C15.1298 0.0086995 14.8258 0.459904 15.0037 0.838344C15.7807 2.49059 16.3816 4.76797 16.7131 7.40604Z" fill="currentColor"></path>
                        <path d="M0.55348 7.24375C0.469787 7.55257 0.707695 7.85018 1.02766 7.85018H6.78711C7.04163 7.85018 7.25516 7.65857 7.28689 7.40604C7.61836 4.76797 8.21935 2.49059 8.99626 0.838345C9.17421 0.459904 8.8702 0.00869957 8.45957 0.0878585C4.26242 0.896962 1.62705 3.28226 0.55348 7.24375Z" fill="currentColor"></path>
                        <path d="M12.0483 0.000266617C12.0482 -0.000656972 12.0483 0.00119021 12.0483 0.000266617V0.000266617Z" fill="currentColor"></path>
                        <path d="M11.9517 0.000266736C11.9518 -0.000656994 11.9517 0.00119064 11.9517 0.000266736V0.000266736Z" fill="currentColor"></path>
                    </svg>
                </a>
            </li>
        </ul>
    )
}

export default Socials;