import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/t-bike_logo.png';
import IconMenu from '../../assets/img/icon-menu.png';
import Menu from '../../components/menu';
import iconPhone from '../../assets/icon/phone-rings.svg';
import Language from '../../partials/language';
import { useTranslation } from 'react-i18next';

const listMenu = [
    { key: 'navbar.home', link: '/' },
    { key: 'navbar.rentalDanang', link: '/rental-danang' },
    { key: 'navbar.rentalNhatrang', link: '/rental-nhatrang' },
    { key: 'navbar.contact', link: '/contact' }
];

const Header = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleClickOutside = e => {
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
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div
            className={`header w-full  ${isScrolled ? 'bg-overLay fixed' : 'bg-transparent absolute'
                } top-0 z-50 border-b-[0.01vw] border-header flex items-center justify-between transition-all lg:px-[6vw] px-[1vw] duration-300`}
        >
            <Link to={'/'}>
                <img src={Logo} alt="Logo" className="lg:w-[5vw] lg:h-[5vw] w-[20vw] h-[20vw]" />
            </Link>
            <div className="flex items-center gap-[2vw]">
                <div className="gap-[1.5vw] lg:flex hidden">
                    {listMenu.map(({ key, link }, index) => (
                        <div key={index} className="hover-items">
                            <Link to={link} className="font-title text-white hover:text-mainColor uppercase">
                                {t(key)}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="items-center xl:flex gap-[2vw] hidden">
                    <div className="relative border-l-[0.01vw] border-header w-[0.1vw] h-[5.5vw]" />
                    <div className="phone h-full">
                        <Link to={'tel:0983477477'}>
                            <div className="all-center gap-[1vw]">
                                <img src={iconPhone} alt="Icon Phone" className='xl:w-[1.5vw] w-[3vw] rings' />
                                <div className="flex flex-col gap-[0.4vw]">
                                    <p className='font-title text-white'>{t('navbar.call_now')}</p>
                                    <p className='font-content text-white'>{t('navbar.phone_number')}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="relative border-l-[0.01vw] border-header w-[0.1vw] h-[5.5vw]" />
                <Language />
                <button onClick={handleToggle} className="lg:hidden block">
                    <img src={IconMenu} alt="Icon Menu" className="w-[10vw]" />
                </button>

                <Menu isOpen={isOpen} onClose={handleClose} />
            </div >
        </div >
    );
};

export default Header;
