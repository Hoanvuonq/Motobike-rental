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
            <div key={index} className={`all-center !justify-between flex-col gap-[1vw] w-[16vw] px-[2.5vw] border-contact infoContact ${index !== contactList.length - 1 ? 'border-r' : ''}`}>
                <div className="w-[7vw] h-[7vw] all-center">
                    <img src={images} alt={t(title)} className='w-[7vw] h-[7vw] scale-icon' />
                </div>
                <div className="all-center h-[10vw] !justify-start text-center flex-col pt-[1vw] gap-[0.5vw]">
                    <p className='font-content'>{t(title)}</p>
                    <p className='font-title text-center '>{t(content)}</p>
                </div>
            </div>
        ))
    }, [contactList, t])
    return (
        <div className='all-center w-full px-[6vw] py-[4vw]'>
            {contact}
        </div>
    )
}

export default InfoContact
