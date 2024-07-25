import { useTranslation } from 'react-i18next';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const location = [
    { className: 'banner-nhatrang', location: 'banner.locationNhaTrang', link: '/rental-nhatrang' },
    { className: 'banner-danang', location: 'banner.locationDaNang', link: '/rental-danang' },
]

const Search = () => {
    const { t } = useTranslation();

    const findLocation = useMemo(() => {
        return location.map(({ className, location, link }, index) => (
            <Link to={link} key={index} className={`border-items border-[0.1vw] rounded-[1vw] lg:w-[24vw] w-[80vw] lg:h-[14vw] h-[40vw] ${className} relative animateShine scale-icon `}>
                <div className="bg-overlayBanner !opacity-80 rounded-[1vw]" />
                <div className="all-center relative z-20 flex-col w-full h-full ">
                    <p className='text-white font-title lg:block hidden'>{t('banner.search')}</p>
                    <p className='text-white font-content'>{t(location)}</p>
                </div>
            </Link>
        ))
    }, [location, t])

    return (
        <div className='all-center w-full search relative'>
            <div className="all-center gap-[6vw] search lg:!flex-row !flex-col">
                {findLocation}
            </div>
        </div>
    );
}

export default Search;
