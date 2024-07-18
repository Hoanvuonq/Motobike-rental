import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/t-bike_logo.png'

const listMenu = [
    { title: 'Trang chủ', link: '/' },
    { title: 'Cho Thuê Xe Máy - Đà Nẵng', link: '#' },
    { title: 'Cho Thuê Xe Máy - Nha Trang', link: '#' },
    { title: 'Liên hệ', link: '#' },
]

const Menu = ({ isOpen, onClose }) => {
    const menuRef = useRef();

    const handleClickOutside = (event) => {
        if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            onClose();
        }
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => { document.removeEventListener("mousedown", handleClickOutside) };
    };

    const handleClose = () => { onClose() }
    const handleInsideClick = (e) => { e.stopPropagation() };

    useEffect(() => {
    }, [isOpen, onClose, handleClickOutside]);

    return (
        <div>
            {isOpen && <div className='overlay' onClick={handleClose} />}
            <div ref={menuRef} className={`menu border absolute z-[60] pb-10 px-5 border-[#e5e9f2] custom-shadow-2 rounded-2xl w-[300px] bg-white lg:hidden block ${isOpen ? "menu-visible" : "menu-hidden"}`} onClick={handleInsideClick}>
                <div className="all-center ww-full flex-col py-4">
                    <img src={Logo} alt="Logo Header" className="scale-icon w-[5vw] h-[5vw]" />
                </div>
                <ul className="flex gap-4 flex-col">
                    {listMenu.map(({ title, link }, index) => (
                        <li key={index} className="li-menu">
                            <Link to={link} className="text-menu-header" target="_blank">
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Menu