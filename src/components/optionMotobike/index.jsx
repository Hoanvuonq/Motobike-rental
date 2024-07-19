import React, { useMemo } from 'react'
import { listOptionIMG } from './data'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const OptionMotobike = () => {
    return (
        <div className='bg-option all-center w-full h-[30vw]'>
            <div className="bg-overlay"></div>
            <div className="all-center absolute gap-[1.5vw] w-full">
                {listOptionIMG.map(({ images }, index) => (
                    <div key={index} className=" bg-[#f1f1f1] border-b-[0.3vw] border-mainColor  w-[16vw] h-[16vw] all-center">
                        <img src={images} alt="" className='object-cover w-[16vw] ' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OptionMotobike