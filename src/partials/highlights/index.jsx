import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useMemo } from 'react'
import iconHighlights1 from '../../assets/icon/icon-hight01.png'
import iconHighlights2 from '../../assets/icon/icon-hight02.png'
import iconHighlights3 from '../../assets/icon/icon-hight03.png'
import Quotation from '../../assets/icon/quotation.svg'
import { useTranslation } from 'react-i18next';

const listIMG = [
    { images: iconHighlights1, title: "hightlight.titleR1", content: "hightlight.contentR1", aosDelay: 300 },
    { images: iconHighlights2, title: "hightlight.titleR2", content: "hightlight.contentR1", aosDelay: 500 },
    { images: iconHighlights3, title: "hightlight.titleR3", content: "hightlight.contentR1", aosDelay: 700 },
]

const Highlights = () => {
    const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const listImagMemo = useMemo(() => {
        return listIMG.map(({ images, title, content, aosDelay }, index) => (
            <div key={index} data-aos="fade-left" data-aos-delay={aosDelay} className="flex items-center lg:gap-[0.5vw] gap-[4vw]">
                <img src={images} alt="icon hightlight" className='lg:w-[4vw] w-[15vw]' />
                <div className="flex items-center lg:gap-[1vw] gap-[3vw]">
                    <p className='font-titlelist text-white lg:w-[10vw] w-[25vw]'>{t(title)}</p>
                    <p className='font-contentList text-white lg:w-[20vw] w-[44vw]'>{t(content)}</p>
                </div>
            </div>
        ))
    }, [listIMG, t])
    return (
        <div className='bg-highlights highlights all-center w-full lg:h-[40vw] h-full'>
            <div className="bg-overlay !opacity-80" />
            <div className="all-center lg:!flex-row !flex-col lg:gap-[3vw] gap-[8vw] w-full">
                <div className="flex flex-col lg:gap-[1vw] gap-[3vw] lg:w-[30vw] w-[90vw] h-full">
                    <div data-aos="fade-right" data-aos-delay="0" className="font-slogan text-mainColor">{t('hightlight.slogan')}</div>
                    <div data-aos="fade-right" data-aos-delay="500" className="font-title text-white uppercase">{t('hightlight.titleL')}</div>
                    <p data-aos="fade-right" data-aos-delay="700" className="font-content text-white">
                        {t('hightlight.contentL')}
                    </p>
                </div>
                <div className="flex flex-col lg:gap-[2vw] gap-[8vw] lg:w-[38vw] w-[90vw] overflow-hidden">
                    <div data-aos="fade-left" data-aos-delay="0" className="flex items-start lg:gap-[2vw] gap-[6vw]">
                        <img src={Quotation} alt="Quotation" className='lg:w-[5vw] w-[20vw] opacity-40' />
                        <div className="flex flex-col lg:gap-[0.5vw] gap-[5vw] lg:border-l-[0.4vw] border-l-[1vw] border-mainColor lg:pl-[1vw] pl-[3vw]">
                            <p className='font-content text-white'>{t('hightlight.text1')}</p>
                            <p className='font-content text-white'>{t('hightlight.text2')}</p>
                            <p className='font-content text-white'>{t('hightlight.text3')}</p>
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