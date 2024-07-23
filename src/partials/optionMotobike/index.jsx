import React, { useMemo } from 'react'
import { listOptionIMG } from './data'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SecTitle from '../../components/secTitle';
import Benefit from '../benefit';


const OptionMotobike = () => {
    return (
        <div className='bg-option all-center w-full lg:h-[40vw] h-[70vw]'>
            <div className="bg-overlay"></div>
            <div className="all-center absolute gap-[1.5vw] w-full">
                {/* <div className="flex highlights flex-col gap-[1vw]  h-full">
                    <div data-aos="fade-right" data-aos-delay="0" className="font-slogan text-mainColor">ĐIỂM NỔI BẬT</div>
                    <div data-aos="fade-right" data-aos-delay="500" className="font-title text-white uppercase">"Nâng tầm trải nghiệm lái Thân thiện và dễ dàng"</div>
                </div> */}
            </div>
        </div>
    )
}

export default OptionMotobike