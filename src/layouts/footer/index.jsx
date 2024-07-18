import React, { useMemo } from 'react'
import Logo from '../../assets/logo/t-bike_logo.png'
import Location from '../../assets/icon/location.svg'
import Phone from '../../assets/icon/phone.svg'
import Email from '../../assets/icon/email.svg'
import Website from '../../assets/icon/website.svg'
import { Link } from 'react-router-dom'
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
                <Link to={link} className="flex items-center gap-[0.5vw] hover-items">
                    <img src={img} alt={img} className='icon-svg w-[0.9vw] ' />
                    <p className='font-content hover-line'>{title}</p>
                </Link>
            </span>
        ))
    }, [listContact])

    return (
        <div className='footer bg-layout w-full all-center !justify-between px-[6vw] pt-[1.5vw] pb-[3vw]'>
            <div className="flex justify-start flex-col gap-[2vw] w-[35vw]">
                <Link to={'/'}><img src={Logo} alt="Logo" className='w-[5vw]' /></Link>
                <div className="flex flex-col gap-[2vw]">
                    <h1 className='font-title'>DỊCH VỤ CHO THUÊ XE MÁY VÀ Ô TÔ ĐÀ NẴNG & NHA TRANG</h1>
                    <div className="flex flex-col gap-[1vw] bg-contact">
                        {infoContact}
                    </div>
                </div>
            </div>
            <div className="flex justify-start flex-col gap-[2vw] w-[35vw]">
                <div className='w-[5vw] h-[6vw]'></div>
                <div className="flex flex-col gap-[1vw]">
                    <h1 className='font-title'>GIỚI THIỆU</h1>
                    <p className='font-content w-[20vw]'>
                        T-BIKE - Chuyên cho thuê xe máy và ô tô, đạt đánh giá cao từ cộng đồng.
                        Giao xe tận nơi trong 15 phút khi đặt trước, thủ tục đơn giản, tiện lợi.
                        Đa dạng xe số, xe ga, xe côn và ô tô, phục vụ mọi nhu cầu khi du lịch hoặc làm việc tại
                        Đà Nẵng & Nha Trang
                    </p>
                    <div className="flex items-center gap-[0.5vw]">
                        <Whatsapp className="hover-items" />
                        <Facebook className="hover-items" />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Footer
