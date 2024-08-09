import React, { useMemo } from 'react'
import Zalo from '../../assets/icon/zalo-social.png'
import Phone from '../../assets/icon/phone-social.png'
import { Link, useLocation } from 'react-router-dom'

const Social = () => {
    const location = useLocation();
    const city = location.pathname.includes('nhatrang') ? 'nhatrang' : 'danang';
    const locationIndex = city === 'nhatrang' ? '0848771771' : '0848770770';

    const listSocial = [
        { images: Zalo, color: "bg-zalo", style: 'fillColorZalo', link: `https://zalo.me/${locationIndex}` },
        { images: Phone, color: "bg-phone", style: 'fillColorPhone', link: `tel:${locationIndex}` },
    ]

    const socialMemo = useMemo(() => {
        return listSocial.map(({ images, color, link, style }, index) => (
            <div key={index} className="">
                <Link to={link} className={`${color} rounded-full hover-items lg:h-[2.5vw] lg:w-[2.5vw] w-[12vw] h-[12vw] all-center`} target="_blank">
                    <img src={images} alt="Social" className="lg:h-[1.5vw] h-[8vw] lg:w-[1.5vw] w-[8vw] rings relative z-20" />
                    <div className={`${style} zoom z-10 relative`}></div>
                </Link>
            </div >

        ));
    }, [listSocial]);

    return (
        <div className='all-center flex-col lg:gap-[2vw] gap-[8vw] text-white'>
            {socialMemo}
        </div >
    )
}

export default Social