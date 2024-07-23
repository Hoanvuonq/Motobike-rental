import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useMemo } from 'react'
import iconHighlights1 from '../../assets/icon/icon-hight01.png'
import iconHighlights2 from '../../assets/icon/icon-hight02.png'
import iconHighlights3 from '../../assets/icon/icon-hight03.png'
import Quotation from '../../assets/icon/quotation.svg'

const listIMG = [
    { images: iconHighlights1, title: "Thủ tục nhanh, hợp đồng rõ ràng", content: "Với CCCD và BLX, bạn đã đủ điều kiện sử dụng dịch vụ cho thuê xe của chúng tôi.", aosDelay: 300 },
    { images: iconHighlights2, title: "Không ràng buộc giờ giấc", content: "Khác với các đơn vị khác, chúng tôi tính phí thuê xe theo 24h, giúp bạn tiết kiệm chi phí so với cách tính theo ngày từ sáng đến chiều.", aosDelay: 500 },
    { images: iconHighlights3, title: "Giao và trả xe tận nơi nhanh chóng", content: "Đội ngũ nhân viên kinh nghiệm của chúng tôi sẽ giao xe tận nơi trong nội thành Đà Nẵng chỉ sau 15-30 phút, không cần đặt cọc.", aosDelay: 700 },
]

const Highlights = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const listImagMemo = useMemo(() => {
        return listIMG.map(({ images, title, content, aosDelay }, index) => (
            <div key={index} data-aos="fade-left" data-aos-delay={aosDelay} className="flex items-center lg:gap-[0.5vw] gap-[4vw]">
                <img src={images} alt="icon hightlight" className='lg:w-[4vw] w-[15vw]' />
                <div className="flex items-center lg:gap-[1vw] gap-[3vw]">
                    <p className='font-titlelist text-white lg:w-[10vw] w-[25vw]'>{title}</p>
                    <p className='font-contentList text-white lg:w-[20vw] w-[44vw]'>{content}</p>
                </div>
            </div>
        ))
    }, [listIMG])
    return (
        <div className='bg-highlights highlights all-center w-full lg:h-[40vw] h-full'>
            <div className="bg-overlay !opacity-80" />
            <div className="all-center lg:!flex-row !flex-col lg:gap-[3vw] gap-[8vw] w-full">
                <div className="flex flex-col lg:gap-[1vw] gap-[3vw] lg:w-[30vw] w-[90vw] h-full">
                    <div data-aos="fade-right" data-aos-delay="0" className="font-slogan text-mainColor">ĐIỂM NỔI BẬT</div>
                    <div data-aos="fade-right" data-aos-delay="500" className="font-title text-white uppercase">"Nâng tầm trải nghiệm lái Thân thiện và dễ dàng"</div>
                    <p data-aos="fade-right" data-aos-delay="700" className="font-content text-white">
                        T-BIKE chúng tôi luôn mong muốn mang lại cho quý khách những chuyến đi an toàn và thoải mái.
                        Thiết kế thân thiện, dễ sử dụng, mang đến hành trình mượt mà và đầy cảm hứng.
                        Hãy để mỗi lần lái xe là một trải nghiệm đáng nhớ!
                    </p>
                </div>
                <div className="flex flex-col lg:gap-[2vw] gap-[8vw] lg:w-[38vw] w-[90vw] overflow-hidden">
                    <div data-aos="fade-left" data-aos-delay="0" className="flex items-start lg:gap-[2vw] gap-[6vw]">
                        <img src={Quotation} alt="Quotation" className='lg:w-[5vw] w-[20vw] opacity-40' />
                        <div className="flex flex-col lg:gap-[0.5vw] gap-[5vw] lg:border-l-[0.4vw] border-l-[1vw] border-mainColor lg:pl-[1vw] pl-[3vw]">
                            <p className='font-content text-white'>Khám phá tự do với dịch vụ cho thuê xe máy và ô tô.</p>
                            <p className='font-content text-white'>Nhận và trả xe ngay tại trung tâm thành phố, thuận tiện và dễ dàng.</p>
                            <p className='font-content text-white'>Đội ngũ hỗ trợ 24/7, luôn sẵn sàng giúp đỡ bạn.</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:gap-[2vw] gap-[8vw]">
                        {listImagMemo}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights