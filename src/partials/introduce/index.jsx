import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useMemo } from 'react'
import Moto from '../../assets/icon/img-info-1-min.png'
import iconTroduce1 from '../../assets/icon/gear.svg'
import iconTroduce2 from '../../assets/icon/key.svg'
import iconTroduce3 from '../../assets/icon/gas-station.svg'
import { useTranslation } from 'react-i18next';

const listControduce = [
    { images: iconTroduce1, title: "introduce.text1", aosDelay: 700 },
    { images: iconTroduce2, title: "introduce.text2", aosDelay: 800 },
    { images: iconTroduce3, title: "introduce.text3", aosDelay: 900 },
]

const Introduce = () => {
    const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const controduceMemo = useMemo(() => {
        return listControduce.map(({ images, title, aosDelay }, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={aosDelay} className="flex items-center lg:gap-[0.5vw] gap-[2vw]">
                <div className="lg:w-[3vw] w-[16vw] lg:h-[3vw] h-[16vw] bg-gray-300 all-center rounded-full">
                    <img src={images} alt="icon hightlight" className='lg:w-[2vw] w-[8vw]' />
                </div>
                <div className="flex items-center gap-[1vw]">
                    <p className='font-contentControduce text-black lg:w-[8vw] w-full'>{t(title)}</p>
                </div>
            </div>
        ))
    }, [listControduce, t])
    return (
        <div className='all-center lg:!flex-row !flex-col gap-[2vw] py-[10vw]'>
            <img data-aos="fade-right" data-aos-delay="0" src={Moto} alt="Moto" className='lg:w-[45vw] w-[90vw]' />
            <div className="introduce flex flex-col lg:gap-[1vw] gap-[4vw] lg:w-[40vw] w-[90vw] h-full overflow-hidden">
                <div data-aos="fade-left" data-aos-delay="100" className="font-slogan text-mainColor py-[0.5vw]">{t('introduce.slogan')}</div>
                <div data-aos="fade-left" data-aos-delay="300" className="font-title text-black uppercase">"{t('introduce.title')}</div>
                <p data-aos="fade-left" data-aos-delay="500" className="font-content text-black">
                    {t('introduce.content')}
                </p>
                <div className="flex lg:flex-row flex-col lg:gap-[2vw] gap-[6vw] ">
                    {controduceMemo}
                </div>
            </div>
        </div>
    )
}

export default Introduce