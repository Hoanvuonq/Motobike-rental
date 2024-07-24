import React, { useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/logo/t-bike_logo.png';

const listMenu = [
    { key: 'home', link: '/' },
    { key: 'rentalDanang', link: '/rental-danang' },
    { key: 'rentalNhatrang', link: '/rental-nhatrang' },
    { key: 'contact', link: '#' }
];

const Menu = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const menuRef = useRef();

    const handleClickOutside = (event) => {
        if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            onClose();
        }
    };

    const handleLinkClick = () => {
        onClose();
    };

    const listMenuMemo = useMemo(() => {
        return listMenu.map(({ key, link }, index) => (
            <li key={index} className="li-menu border-b-[0.1vw] p-[2vw] border-gray">
                <Link to={link} className="text-menu-header" onClick={handleLinkClick}>
                    {t(key)}
                </Link>
            </li>
        ));
    }, [t]);

    const handleClose = () => {
        onClose();
    };

    const handleInsideClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div>
            {isOpen && <div className='overlay' onClick={handleClose} />}
            <div ref={menuRef} className={`menu border absolute z-[60] pb-10 px-5 border-[#e5e9f2] custom-shadow-2  bg-white lg:hidden block ${isOpen ? "menu-visible" : "menu-hidden"}`} onClick={handleInsideClick}>
                <div className="all-center ww-full flex-col py-4">
                    <img src={Logo} alt="Logo Header" className="scale-icon w-[20vw] h-[20vw]" />
                </div>
                <ul className="flex gap-[6vw] flex-col">
                    {listMenuMemo}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
