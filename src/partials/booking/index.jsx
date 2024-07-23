import 'aos/dist/aos.css'
import React, { useMemo } from 'react'
import SecTitle from '../../components/secTitle';
import Step1 from '../../assets/icon/step1.jpg'
import Step2 from '../../assets/icon/step2.jpg'
import Step3 from '../../assets/icon/step3.jpg'

const listStep = [
    { img: Step1, title: "Đặt Xe", content: "Nhanh chóng đặt một chiếc xe ưng ý thông qua Website hoặc Ứng dụng (App) của chúng tôi" },
    { img: Step2, title: "Nhận Xe", content: "Nhận xe tại nhà hoặc các đại lý trong khu vực của chúng tôi" },
    { img: Step3, title: "Tận Hưởng", content: "Tất cả các phương tiện của chúng tôi đều đạt chuẩn an toàn" },
]

const Booking = () => {
    const stepMemo = useMemo(() => {
        return listStep.map(({ img, title, content }, index) => (
            <div key={index} data-aos="fade-up" data-aos-duration="2000" className="border-[0.5vw] border-booking lg:p-[1vw] p-[4vw] shadow-custom1 rounded-[0.5vw]">
                <div className="all-center p-[2.5vw] gap-[2vw] flex-col lg:w-auto w-[80vw] border-dashed border-[0.2vw] rounded-[0.5vw]">
                    <img src={img} alt="Step 1" className='lg:w-[14vw] w-[80vw] scale-icon' />
                    <div className="all-center flex-col gap-[1vw]">
                        <p className='font-title'>{title}</p>
                        <p className='lg:w-[18.5vw] w-[80vw] lg:h-[3vw] h-auto text-center font-content'>{content}</p>
                    </div>
                </div>
            </div>
        ))
    }, [listStep])
    return (
        <div className="flex flex-col gap-[3vw] lg:py-[2vw] py-[20vw]">
            <SecTitle title='Đặt xe tại T-BIKE' />
            <div className="booking all-center md:flex-row flex-col lg:gap-[2vw] gap-[8vw]">
                {stepMemo}
            </div>
        </div >
    )
}

export default Booking