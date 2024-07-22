import React, { useMemo } from 'react'
import Logo from '../../assets/logo/t-bike_logo.png'
import Location from '../../assets/icon/location.svg'
import Phone from '../../assets/icon/phone.svg'
import Email from '../../assets/icon/email.svg'
import Website from '../../assets/icon/website.svg'
import { Link } from 'react-router-dom'
import Button from '../../components/button'
import Whatsapp from '../../assets/icon/whatsapp'
import Facebook from '../../assets/icon/facebook'

const listContact = [
    { title: '110 Trần Văn Dư, Mỹ An, Ngũ Hành Sơn, TP Đà Nẵng', img: Location, link: "https://www.google.com/maps/search/?api=1&query=110+Trần+Văn+Dư,+Mỹ+An,+Ngũ+Hành+Sơn,+Đà+Nẵng" },
    { title: 'Hotline: 0983 477 477', img: Phone, link: "tel:0983477477" },
    { title: 'tbikedn@gmail.com', img: Email, link: "mailto:tbikedn@gmail.com" },
    { title: 'Website: www.tbikedanang.com', img: Website, link: "https://www.tbikedanang.com/" },
];

const Footer = () => {
    const infoContact = useMemo(() => {
        return listContact.map(({ title, img, link }, index) => (
            <span key={index} >
                <Link to={link} className="flex items-center lg:gap-[0.5vw] gap-[1vw] hover-items">
                    <img src={img} alt={img} className='icon-svg lg:w-[0.9vw] w-[5vw]' />
                    <p className='font-content hover-line'>{title}</p>
                </Link>
            </span>
        ))
    }, [listContact])

    return (
        <div className='w-full footer'>
            <div className="bg-footer border-items border-b-[0.1vw] lg:pt-[8vw] pt-[12vw] lg:pb-[5vw] pb-[8vw]">
                <div className="all-center lg:!items-end !items-center lg:!flex-row !flex-col lg:gap-[2vw] gap-[8vw]">
                    <div className="flex flex-col lg:text-start text-center gap-[1vw]">
                        <h1 className='font-slogan text-mainColor'>TIN TỨC MỚI NHẤT</h1>
                        <p className='font-title-mail text-white'>ĐĂNG KÝ ĐỂ CẬP NHẬT</p>
                    </div>
                    <div className="flex items-center gap-[0.5vw]">
                        <input type="email" className='bg-white focus:outline-none lg:indent-[0.5vw] indent-[3vw] lg:py-[0.8vw] py-[2vw] rounded-[0.5vw] lg:w-[30vw] w-[50vw]' required />
                        <Button title="Đặt Ngay" />
                    </div>
                </div>
            </div>
            <div className='bg-layout w-full all-center !justify-between px-[6vw] pt-[1.5vw] pb-[3vw]'>
                <div className="flex justify-start flex-col gap-[2vw] lg:w-[35vw] w-[90vw]">
                    <Link to={'/'}><img src={Logo} alt="Logo" className='lg:w-[5vw] w-[16vw]' /></Link>
                    <div className="flex flex-col lg:gap-[2vw] gap-[4vw]">
                        <h1 className='font-title'>DỊCH VỤ CHO THUÊ XE MÁY VÀ Ô TÔ ĐÀ NẴNG & NHA TRANG</h1>
                        <div className="flex flex-col lg:gap-[1vw] gap-[5vw] bg-contact">
                            {infoContact}
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

export default Footer
