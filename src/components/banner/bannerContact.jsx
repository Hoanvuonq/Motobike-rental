import React from 'react';
import { useTranslation } from 'react-i18next';

const BannerContact = () => {
    const { t } = useTranslation();
    return (
        <div className='bg-contact1 all-center w-full xl:h-auto h-full '>
            <div className="banner w-full all-center flex-col lg:gap-[4vw] gap-[8vw] absolute z-10 px-[1vw]">
                <div className="all-center flex-col xl:gap-[1vw] gap-[3vw]">
                    <p className='text-mainColor font-slogan'>{t('banner.sloganHeader')}</p>
                    <h1 className='font-title text-white'>{t('contact.title')}</h1>
                </div>
            </div>
            <div className="bg-overlay !opacity-30" />
        </div>
    )
}
export default BannerContact;
