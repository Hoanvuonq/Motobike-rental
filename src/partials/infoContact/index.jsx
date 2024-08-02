import React, { useMemo } from 'react'
import Contact from '../../assets/icon/contact.svg'
import Time from '../../assets/icon/clock.svg'
import Email from '../../assets/icon/mail.svg'
import Location from '../../assets/icon/location-contact.svg'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const contactList = [
    { images: Contact, title1: "contact.hotlineDN", title2: "contact.hotlineNT", content1: "0848 770 770", content2: "0848 771 771", linkDN: "tel:0848770770", linkNT: "tel:0848771771" },
    { images: Time, title1: "contact.time", title2: "contact.time", content1: "contact.beginTime", content2: "contact.lastedTime", linkDN: "#", linkNT: "#" },
    { images: Email, title1: "contact.email", content1: "contact.contentEmail", linkDN: "mailto:tbikedn@gmail.com", linkNT: "mailto:tbikedn@gmail.com" },
    { images: Location, title1: "contact.locationDN", title2: "contact.locationNT", content1: "contact.contentLocationDN", content2: "contact.contentLocationNT", linkDN: "https://www.google.com/maps/search/?api=1&query=110+Trần+Văn+Dư,+Mỹ+An,+Ngũ+Hành+Sơn,+Đà+Nẵng", linkNT: "https://maps.app.goo.gl/KebZGenocMRJaNEQA" },
]

const InfoContact = () => {
    const { t } = useTranslation();
    const contact = useMemo(() => {
        return contactList.map(({ images, title1, title2, content1, content2, linkDN, linkNT }, index) => (
            <div key={index} className={`all-center !justify-between flex-col gap-[1vw] lg:w-[16vw] w-[90vw] px-[2.5vw] border-contact infoContact  ${index !== contactList.length - 1 ? 'lg:border-r' : ''}`}>
                <div className="all-center">
                    <img src={images} alt={t(title1)} className='lg:w-[7vw] w-[36vw] lg:h-[7vw] h-[36vw] scale-icon' />
                </div>
                <div className="all-center lg:h-[10vw] h-auto !justify-start text-center lg:w-auto w-[60vw] flex-col pt-[1vw] gap-[0.5vw]">
                    <p className='font-content'>{t(title1)}</p>
                    <Link to={linkDN} target='_blank'>
                        <p className='font-title text-center '>{t(content1)}</p>
                    </Link>
                    <p className='font-content'>{t(title2)}</p>
                    <Link to={linkNT} target='_blank'>
                        <p className='font-title text-center '>{t(content2)}</p>
                    </Link>
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
