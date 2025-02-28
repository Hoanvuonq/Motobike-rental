import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Dots from '../../assets/icon/dot.svg';
import Email from '../../assets/icon/email.svg';
import Location from '../../assets/icon/location.svg';
import Phone from '../../assets/icon/phone.svg';
import Website from '../../assets/icon/website.svg';
import Facebook from '../../assets/img/facebook.png';
import Logo from '../../assets/logo/logo-tbike-new.jpg';
import Button from '../../components/button';

const listAbout = [
    { title: 'navbar.home', link: '/' },
    { title: 'navbar.rentalDanang', link: '/rental-danang' },
    { title: 'navbar.rentalNhatrang', link: '/rental-nhatrang' },
    { title: 'navbar.contact', link: '#' }
];

const Footer = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const city = location.pathname.includes('nhatrang') ? 'nhatrang' : 'danang';
    const locationIndex = city === 'nhatrang' ? '0848771771' : '0848770770';

    const listContact = [
        { id: "Cơ Sở Đà Nẵng", title: 'footer.location', img: Location, link: "https://www.google.com/maps/search/?api=1&query=110+Trần+Văn+Dư,+Mỹ+An,+Ngũ+Hành+Sơn,+Đà+Nẵng" },
        { title: 'footer.location2', img: Location, link: "https://maps.app.goo.gl/YHd1XoYeWoKNWcZF9" },
        { title: 'Hotline: 0848 770 770', img: Phone, link: `tel:0848770770` },
        { title: 'T-Bike DaNang - Dịch Vụ Cho Thuê Xe Máy, ÔTô ', img: Facebook, link: `https://www.facebook.com/profile.php?id=100063470564198` },
        { id: "Cơ Sở Nha Trang", title: 'footer.location3', img: Location, link: "https://maps.app.goo.gl/YHd1XoYeWoKNWcZF9" },
        { title: 'Hotline: 0848 771 771', img: Phone, link: `tel:0848771771` },
        { title: 'footer.mail', img: Email, link: "mailto:tbikedn@gmail.com" },
        { title: 'footer.website', img: Website, link: "https://www.tbikedanang.com/" },
        { title: 'T-Bike NhaTrang - Dịch Vụ Cho Thuê Xe Máy Tự Lái', img: Facebook, link: `https://www.facebook.com/profile.php?id=100094403166212` },

    ];

    const infoContact = useMemo(() => {
        return listContact.map(({ title, img, link, id }, index) => (
            <span key={index}>
                <div>
                    {id && <p className='font-content1 uppercase pb-[1vw]'>{id}</p>}
                    <Link to={link} className="flex items-center lg:gap-[0.5vw] gap-[1vw] hover-items">
                        <img src={img} alt={img} className='icon-svg lg:w-[0.9vw] w-[5vw]' />
                        <p className='font-content hover-line'>{t(title)}</p>
                    </Link>
                </div>
            </span>
        ));
    }, [listContact, t]);

    const infoAbout = useMemo(() => {
        return listAbout.map(({ title, link }, index) => (
            <span key={index}>
                <Link to={link} className="flex items-center lg:gap-[0.5vw] gap-[1vw] hover-items" target='_blank'>
                    <img src={Dots} alt='Dots' className='icon-svg lg:w-[0.9vw] w-[5vw]' />
                    <p className='font-content hover-line'>{t(title)}</p>
                </Link>
            </span>
        ));
    }, [listAbout, t]);

    return (
        <div className='w-full footer'>
            <div className="bg-footer border-items border-b-[0.1vw] lg:pt-[8vw] pt-[12vw] lg:pb-[5vw] pb-[8vw]">
                <div className="all-center lg:!items-end !items-center lg:!flex-row !flex-col lg:gap-[2vw] gap-[8vw]">
                    <div className="flex flex-col lg:text-start text-center gap-[1vw]">
                        <h1 className='font-slogan text-mainColor'>{t('footer.lastestNews')}</h1>
                        <p className='font-title-mail text-white'>{t('footer.subscribe')}</p>
                    </div>
                    <div className="flex items-center lg:gap-[0.5vw] gap-[1vw]">
                        <input type="phone" placeholder={t('footer.phone')} className='bg-white focus:outline-none lg:indent-[0.5vw] indent-[3vw] lg:py-[0.8vw] py-[2.5vw] rounded-[0.5vw] lg:w-[30vw] w-[60vw]' required />
                        <Link to={'https://docs.google.com/forms/d/e/1FAIpQLSeVBq73GU3j7f-U6_fi8i6R5bN14QRaaNMIczWZXpJRbHGrjA/viewform'} target='_blank'>
                            <Button title={t('rentalDaNang.booking')} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='bg-layout w-full all-start flex-col !justify-between lg:pt-[5vw] pt-[5vw] gap-[2vw] '>
                <div className="flex items-start justify-center h-auto lg:gap-[5vw] gap-[16vw] w-full px-[6vw] lg:flex-row flex-col pb-[2vw]">
                    <div className="flex justify-center items-start flex-col gap-[2vw] lg:w-[25vw] w-[90vw]">
                        <div className="flex flex-col lg:gap-[2vw] gap-[4vw]">
                            <div className="flex items-center lg:justify-between justify-center">
                                <Link to={'/'}>
                                    <img src={Logo} alt="Logo" className='lg:w-[6vw] w-[32vw] rounded-full' />
                                </Link>
                            </div>
                            <h1 className='font-content'>{t('footer.content')}</h1>
                            <Link className="border-items border-[0.1vw] rounded-[1vw] w-[90vw] h-[40vw] banner-content relative animateShine scale-icon lg:hidden block ">
                                <div className="bg-overlayBanner !opacity-80 rounded-[1vw]" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center items-start flex-col gap-[2vw] lg:w-[25vw] w-[90vw]">
                        <div className="flex flex-col lg:gap-[2vw] gap-[4vw]">
                            <h1 className='font-title'>{t('footer.contact')}</h1>
                            <div className="flex flex-col lg:gap-[1vw] gap-[5vw] bg-contact">
                                {infoContact}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-start flex-col gap-[2vw] lg:w-[25vw] w-[90vw] ">
                        <div className="flex flex-col lg:gap-[2vw] gap-[4vw]">
                            <h1 className='font-title'>{t('footer.about')}</h1>
                            <div className="flex flex-col lg:gap-[1vw] gap-[5vw] bg-contact">
                                {infoAbout}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-footer border-t-[0.01vw] w-full all-center lg:py-[0.5vw] py-[3vw]">
                    <h1 className='text-[#a9aeb3] font-coppyRight'>Coder © 2024 Infinity Software</h1>
                </div>
            </div >
        </div >
    );
};

export default Footer;
