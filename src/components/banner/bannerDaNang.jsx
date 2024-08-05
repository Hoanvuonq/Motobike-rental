import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../button';
import { Link } from 'react-router-dom';

const BannerDaNang = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-danang all-center w-full xl:h-screen h-full">
            <div className="banner w-full all-center flex-col lg:gap-[4vw] gap-[8vw] absolute z-10 px-[1vw]">
                <div className="all-center flex-col xl:gap-[1vw] gap-[3vw]">
                    <p className='text-mainColor font-slogan'>{t('banner.sloganHeader')}</p>
                    <h1 className='font-title text-white'>{t('banner.titleDN')}</h1>
                    <p className='font-content text-white'>{t('banner.contentHeader')}</p>
                </div>
                <Link to={'tel:0848770770'}>
                    <Button title={t('category.book')} className="hover-items" />
                </Link>
                <p className='font-content text-white'>{t('banner.delivery')}</p>
            </div>
            <div className="bg-overlay" />
        </div>
    );
};

export default BannerDaNang;
