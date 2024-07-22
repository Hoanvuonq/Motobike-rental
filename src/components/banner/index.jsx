import React from 'react'
import Search from '../search'
import { useTranslation } from 'react-i18next';

const Banner = () => {
    const { t } = useTranslation();
    return (
        <div className='bg-banner all-center w-full xl:h-screen h-full '>
            <div className="banner w-full all-center flex-col lg:gap-[4vw] gap-[8vw] absolute z-10 px-[1vw]">
                <div className="all-center flex-col xl:gap-[1vw] gap-[3vw]">
                    <p className='text-mainColor font-slogan'>{t('sloganHeader')}</p>
                    <h1 className='font-title text-white'>{t('titleHeader')}</h1>
                    <p className='font-content text-white'>{t('contentHeader')}</p>
                </div>
                <Search />
            </div>
            <div className="bg-overlay" />
        </div>
    )
}
export default Banner