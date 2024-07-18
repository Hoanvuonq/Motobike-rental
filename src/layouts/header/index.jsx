import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/t-bike_logo.png'
import IconMenu from '../../assets/img/icon-menu.png'
import Menu from '../../components/menu';
import Language from '../../components/language';

const listMenu = [
    { title: 'Trang chủ', link: '/' },
    { title: 'Cho Thuê Xe Máy - Đà Nẵng', link: '#' },
    { title: 'Cho Thuê Xe Máy - Nha Trang', link: '#' },
    { title: 'Liên hệ', link: '#' },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
    }, [handleClickOutside])



    return (
        <div className="header w-full py-[0.5vw] px-[6vw] bg-layout  flex items-center justify-between">
            <button onClick={handleToggle} className='md:hidden block '>
                <img src={IconMenu} alt="Icon Menu" className='w-[6vw]' />
            </button>
            <Link to={'/'}>
                <img src={Logo} alt="Logo" className='md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw]' />
            </Link>
            <div className="flex items-center gap-[2vw]">

                <div className="gap-[1.5vw] lg:flex hidden" >
                    {listMenu.map(({ title, link }, index) => (
                        <div key={index} className="hover-items">
                            <Link to={link} className="font-title text-white hover:text-mainColor uppercase" >
                                {title}
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to={'#'}>
                    <button className='uppercase font-btn text-white border-2 border-mainColor rounded-full xl:py-[0.5vw] py-[2vw] xl:px-[2vw] px-[3vw] hover-items'>Đặt xe</button>
                </Link>
                <Language />
                <Menu isOpen={isOpen} onClose={handleClose} />
            </div>
        </div>
    )
}

export default Header