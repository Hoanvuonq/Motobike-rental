import React from 'react'
import { Data } from './data'
import SecTitle from '../secTitle'

const Carousel = () => {
    return (
        <div className=" flex flex-col gap-[3vw] py-[2vw]">
            <SecTitle title='Địa điểm du lịch' />
            <div className="all-center w-full">
                <div className="p-[2vw]">
                    <div className="all-center gap-[1vw]">
                        {Data.map(({ images }, index) => (
                            <div key={index} className="all-center flex-col relative scale-icon">
                                <img src={images} alt="" className='object-cover w-[18vw] h-[22vw] rounded-[0.5vw]' />
                                <div className="bg-overLay" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Carousel