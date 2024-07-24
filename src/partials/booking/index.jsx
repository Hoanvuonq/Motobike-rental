import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useMemo } from 'react'
import SecTitle from '../../components/secTitle';
import { useTranslation } from 'react-i18next';
import Step1 from '../../assets/icon/step1.jpg'
import Step2 from '../../assets/icon/step2.jpg'
import Step3 from '../../assets/icon/step3.jpg'

const listStep = [
    { img: Step1, title: "booking.title1", content: "booking.content1" },
    { img: Step2, title: "booking.title1", content: "booking.content1" },
    { img: Step3, title: "booking.title1", content: "booking.content1" },
]

const Booking = () => {
    const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const stepMemo = useMemo(() => {
        return listStep.map(({ img, title, content }, index) => (
            <div key={index} data-aos="fade-right" className="border-[0.5vw] border-booking lg:p-[1vw] p-[4vw] shadow-custom1 rounded-[0.5vw]">
                <div className="all-center p-[2.5vw] gap-[2vw] flex-col lg:w-auto w-[80vw] border-dashed border-[0.2vw] rounded-[0.5vw]">
                    <img src={img} alt="Step 1" className='lg:w-[14vw] w-[80vw] scale-icon' />
                    <div className="all-center flex-col gap-[1vw]">
                        <p className='font-title'>{t(title)}</p>
                        <p className='lg:w-[18.5vw] w-[80vw] lg:h-[3vw] h-auto text-center font-content'>{t(content)}</p>
                    </div>
                </div>
            </div>
        ))
    }, [listStep, t])
    return (
        <div className="flex flex-col gap-[3vw] lg:py-[2vw] py-[20vw]">
            <SecTitle title={t('booking.titleBooking')} />
            <div className="booking all-center md:flex-row flex-col lg:gap-[2vw] gap-[8vw]">
                {stepMemo}
            </div>
        </div >
    )
}

export default Booking