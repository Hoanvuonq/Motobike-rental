import React, { useMemo } from 'react'
import Contact from '../../assets/icon/contact.svg'
import Time from '../../assets/icon/clock.svg'
import Email from '../../assets/icon/mail.svg'
import Location from '../../assets/icon/location-contact.svg'
import { useTranslation } from 'react-i18next';

const contactList = [
    { images: Contact, title: "contact.contact", content: "0983 477 477" },
    { images: Time, title: "contact.time", content: "contact.beginTime" },
    { images: Email, title: "contact.email", content: "contact.contentEmail" },
    { images: Location, title: "contact.location", content: "contact.contentLocation" },
]

const InfoContact = () => {
    const { t } = useTranslation();
    const contact = useMemo(() => {
        return contactList.map(({ images, title, content }, index) => (
            <div key={index} className={`all-center !justify-between flex-col gap-[1vw] lg:w-[16vw] w-[90vw] px-[2.5vw] border-contact infoContact border-none ${index !== contactList.length - 1 ? 'lg:border-r' : ''}`}>
                <div className="all-center">
                    <img src={images} alt={t(title)} className='lg:w-[7vw] w-[36vw] lg:h-[7vw] h-[36vw] scale-icon' />
                </div>
                <div className="all-center lg:h-[10vw] h-auto !justify-start text-center lg:w-auto w-[60vw] flex-col pt-[1vw] gap-[0.5vw]">
                    <p className='font-content'>{t(title)}</p>
                    <p className='font-title text-center '>{t(content)}</p>
                </div>
            </div>
        ))
    }, [contactList, t])
    return (
        <div className='all-center w-full px-[6vw] lg:py-[6vw] py-[12vw] lg:!flex-row lg:gap-0 gap-[16vw] !flex-col'>
            {contact}
        </div>
    )
}

export default InfoContact
