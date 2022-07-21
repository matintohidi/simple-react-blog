import React from 'react';

// import componetns
import { ImageLazy } from '../ImageLazy/ImageLazy';

// import Media
import Shape1 from '../../assets/media/3D object and icons/ColorWhiteMatte2.png';
import Shape2 from '../../assets/media/3D object and icons/ColorPurpleGlossy1.png';
import Shape3 from '../../assets/media/3D object and icons/ColorBlueGlossy2.png';
import Shape4 from '../../assets/media/3D object and icons/ColorGreenGlossy2.png';
import Shape5 from '../../assets/media/3D object and icons/ColorGreenGlossy1.png';


const Shape = ({ count }) => {
    return (
      <>
        <ImageLazy src={Shape1} className={`hidden absolute animate-[bounce_2s_linear_infinite] w-20 h-20 -z-50 bottom-[42rem] left-8 -rotate-45 ${count > 6 ? "lg:block" : "hidden"}`} />
        <ImageLazy src={Shape2} className={`hidden absolute animate-[bounce_3s_linear_infinite] w-20 h-20 -z-50 top-[95rem] right-64 -rotate-45 ${count > 6 ? "lg:block" : "hidden"}`} />
        <ImageLazy src={Shape3} className={`hidden absolute animate-[bounce_1.5s_linear_infinite] w-32 h-32 -z-50 top-[50rem] right-3 blur-sm ${count > 3 ? "lg:block" : "hidden"}`} />
        <ImageLazy src={Shape4} className={`hidden absolute animate-[bounce_4s_linear_infinite] w-24 h-24 -z-50 right-5 blur-sm bottom-[5rem] ${count > 6 ? "lg:block" : "hidden"}`} />
        <ImageLazy src={Shape5} className={`hidden absolute animate-[bounce_2s_linear_infinite] w-24 h-24 -z-50 top-72 left-3 ${count > 3 ? "lg:block" : "hidden"}`} />
      </>
    )
}

export default Shape;