import React, { useEffect, useMemo } from 'react';
import SecTitle from '../../components/secTitle';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next';
import IconTrust1 from '../../assets/img/icon-trust-1.png';
import IconTrust2 from '../../assets/img/icon-trust-2.png';
import IconTrust3 from '../../assets/img/icon-trust-3.png';
import IconTrust4 from '../../assets/img/icon-trust-4.png';
import IconTrust5 from '../../assets/img/icon-trust-5.png';
import IconTrust6 from '../../assets/img/icon-trust-6.png';



const listTrust = [
    { images: IconTrust1, title: "benefit.title1", content: "benefit.content1" },
    { images: IconTrust2, title: "benefit.title2", content: "benefit.content2" },
    { images: IconTrust3, title: "benefit.title3", content: "benefit.content3" },
    { images: IconTrust4, title: "benefit.title4", content: "benefit.content4" },
    { images: IconTrust5, title: "benefit.title5", content: "benefit.content5" },
    { images: IconTrust6, title: "benefit.title6", content: "benefit.content6" },
];

const Benefit = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const { t } = useTranslation();

    const benifitM = useMemo(() => {
        return listTrust.map(({ images, title, content }, innerIndex) => (
            <div key={innerIndex} data-aos="fade-up" className="flex items-center lg:gap-[1.5vw] gap-[5vw] lg:w-[40vw] w-[90vw] trust">
                <img src={images} alt="icon trust" className='lg:w-[5vw] w-[20vw] lg:h-[5vw] h-[20vw] scale-icon' />
                <div className="flex flex-col items-start gap-[1vw]">
                    <p className='font-title'>{t(title)}</p>
                    <p className='font-content'>{t(content)}</p>
                </div>
            </div>
        ))
    }, [listTrust, t])

    return (
        <div className="flex flex-col lg:gap-[3vw] gap-[6vw] lg:py-[4vw] !pb-[6vw] py-[10vw]">
            <SecTitle title={t('benefit.titleBenefit')} />
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-[3vw] gap-[10vw]">
                {benifitM}
            </div>
        </div>
    );
};

export default Benefit;
