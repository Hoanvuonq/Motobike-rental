import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useMemo } from 'react'
import SecTitle from '../../components/secTitle'
import { listAbout } from './data'


const About = () => {
    const about = useMemo(() => {
        return listAbout.map(({ images, title, content, aosDelay }, index) => (
            <div data-aos="fade-up" data-aos-delay={aosDelay} key={index} className="bg-about relative about lg:p-[1vw] p-[7vw] flex items-center flex-col lg:w-[20vw] w-[80vw] lg:h-[20vw] h-[75vw]">
                <div className="flex justify-between items-center flex-col gap-[1vw]">
                    <h1 className='uppercase font-title'>{title}</h1>
                    <p className='font-content'>{content}</p>
                </div>
                <img src={images} alt={title} className='lg:w-[18vw] w-[70vw] absolute -bottom-[2vw] scale-icon' />
            </div>
        ))
    }, [listAbout])

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="flex flex-col gap-[3vw] py-[5vw] items-center">
            <SecTitle title='Trải Nghiệm Tuyệt Vời' />
            <div className="pt-[1vw] all-center w-full lg:gap-[2vw] gap-[12vw] lg:flex-row flex-col">
                {about}
            </div>
        </div>
    )
}

export default About