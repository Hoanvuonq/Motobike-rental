import React from 'react'

import SwiperSlide1 from '../../assets/img/swiper-slide-1.jpg'
import SwiperSlide2 from '../../assets/img/swiper-slide-2.jpg'


export const ListIMG = [
    { images: SwiperSlide1 },
    { images: SwiperSlide2 },
    { images: SwiperSlide1 },
    { images: SwiperSlide2 },

]

const SwiperSilde = () => {
    return (
        <div className="all-center w-full gap-[2vw]">
            {ListIMG.map(({ images }, index) => (
                <div key={index} className="">
                    <img src={images} alt="Items" className='w-[18vw] h-[22vw] rounded-[0.5vw]' />
                </div>
            ))}
        </div>
    )
}

export default SwiperSilde