import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/t-bike_logo.png'
import IconMenu from '../../assets/img/icon-menu.png'
import Menu from '../../components/menu';
import iconPhone from '../../assets/icon/phone-rings.svg'
import Language from '../../partials/language';

const listMenu = [
    { title: 'Trang chủ', link: '/' },
    { title: 'Cho Thuê Xe Máy - Đà Nẵng', link: '/rental-danang' },
    { title: 'Cho Thuê Xe Máy - Nha Trang', link: '/rental-nhatrang' },
    { title: 'Liên hệ', link: '#' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
    }, [handleClickOutside])

    return (
        <div
            className={`header w-full px-[6vw] ${isScrolled ? 'bg-overLay fixed' : 'bg-transparent absolute'
                } top-0 z-50 border-b-[0.01vw] border-header flex items-center justify-between transition-all duration-300`}
        >
            <Link to={'/'}>
                <img src={Logo} alt="Logo" className="md:w-[5vw] md:h-[5vw] w-[15vw] h-[15vw]" />
            </Link>
            <div className="flex items-center gap-[2vw]">
                <div className="gap-[1.5vw] lg:flex hidden ">
                    {listMenu.map(({ title, link }, index) => (
                        <div key={index} className="hover-items">
                            <Link to={link} className="font-title text-white hover:text-mainColor uppercase">
                                {title}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className=" items-center xl:flex gap-[2vw] hidden">
                    <div className="relative border-l-[0.01vw] border-header w-[0.1vw] h-[5.5vw]" />
                    <div className="phone h-full">
                        <Link to={'tel:0983477477'}>
                            <div className="all-center gap-[1vw]">
                                <img src={iconPhone} alt="Icon Phone" className='xl:w-[1.5vw] w-[3vw] rings' />
                                <div className="flex flex-col gap-[0.4vw]">
                                    <p className='font-title text-white'>Đặt xe ngay !</p>
                                    <p className='font-content text-white'>0983477477</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="relative border-l-[0.01vw] border-header w-[0.1vw] h-[5.5vw]" />
                <Language />
                <button onClick={handleToggle} className="lg:hidden block">
                    <img src={IconMenu} alt="Icon Menu" className="w-[6vw]" />
                </button>
                <Menu isOpen={isOpen} onClose={handleClose} />
            </div >
        </div >
    );
};

export default Header;

