import React , { useEffect } from 'react';
import { useBlog } from '../../context/context';

import image from '../../assets/media/Img/3.jpg';

const Team = () => {
    let { setHeaderAndFooterDisplay } = useBlog();

    useEffect(() => {
        setHeaderAndFooterDisplay(true);
    }, [])

    return (
        <div className="p-8 flex flex-col items-center">
            <div className="text-center">
                <h2 className="capitalize font-Mont font-bold text-sm text-[#fc4f5d]">our team</h2>
                <h1 className="capitalize font-MontBold font-semibold text-2xl lg:text-3xl mt-2 text-[#110f0f]">meet our team</h1>
                <p className="text-gray-400 mt-5 text-sm sm:tracking-wider">our expert team is made up of creatives with technical knowhow strategists who think outside the box, and developer who push innovation.</p>
            </div>
            <div className="flex flex-col md:flex-row mt-8">
                <div className="flex flex-col rounded-lg items-start">
                    <img src={image} className="rounded-lg w-full" />
                    <h1 className="font-MontBold text-lg font-bold text-[#110f0f]">Matin Tohidi Sani</h1>
                    <h2 className="text-[#afc0ce] font-Mont font-thin text-sm">Front-end Developer</h2>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Team;