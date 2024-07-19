import React, { useMemo } from 'react'
import Moto from '../../assets/icon/img-info-1-min.png'
import iconTroduce1 from '../../assets/icon/gear.svg'
import iconTroduce2 from '../../assets/icon/key.svg'
import iconTroduce3 from '../../assets/icon/gas-station.svg'

const listControduce = [
    { images: iconTroduce1, title: "DỄ DÀNG ĐẶT THUÊ" },
    { images: iconTroduce2, title: "CHUYẾN ĐI DÀI HƠN TRONG CẢ NGÀY" },
    { images: iconTroduce3, title: "NHẬN SỐ DẶM KHÔNG GIỚI HẠN" },
]

const Introduce = () => {

    const controduceMemo = useMemo(() => {
        return listControduce.map(({ images, title }, index) => (
            <div key={index} className="flex items-center gap-[0.5vw]">
                <div className="w-[3vw] h-[3vw] bg-gray-300 all-center rounded-full">
                    <img src={images} alt="icon hightlight" className='w-[2vw]' />
                </div>
                <div className="flex items-center gap-[1vw]">
                    <p className='font-contentControduce text-black w-[8vw]'>{title}</p>
                </div>
            </div>
        ))
    }, [listControduce])
    return (
        <div className='all-center gap-[2vw] py-[10vw]'>
            <img src={Moto} alt="Moto" className='w-[40vw]' />
            <div className="highlights flex flex-col gap-[1vw] w-[40vw] h-full">
                <div className="font-slogan text-mainColor">UY TÍN ĐẶT LÊN HÀNG ĐẦU</div>
                <div className="font-title text-black uppercase">"Nâng tầm trải nghiệm lái Thân thiện và dễ dàng"</div>
                <p className="font-content text-black">
                    T-BIKE chúng tôi luôn mong muốn mang lại cho quý khách những chuyến đi an toàn và thoải mái.
                    Thiết kế thân thiện, dễ sử dụng, mang đến hành trình mượt mà và đầy cảm hứng.
                    Hãy để mỗi lần lái xe là một trải nghiệm đáng nhớ!
                </p>
                <div className="flex gap-[2vw]">
                    {controduceMemo}
                </div>
            </div>
        </div>
    )
}

export default Introduce