import React from 'react'
import Button from '../../components/button'
import { useTranslation } from 'react-i18next';
const FormContact = () => {
    const { t } = useTranslation();
    return (
        <div className='bg-colorContact all-center flex-col gap-[2vw] lg:p-[2vw] p-[10vw] lg:w-[60vw] w-[90vw] form rounded-[0.5vw] lg:mb-0 mb-[12vw]'>
            <h1 className='font-title'>{t('contact.sendMail')}</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-[1vw]">
                <input className='boxContact outline-none' placeholder={t('contact.fullName')} required />
                <input className='boxContact outline-none' placeholder={t('contact.email')} required />
                <input className='boxContact outline-none' placeholder={t('contact.subject')} required />
            </div>
            <textarea className='textareaContact outline-none lg:h-[20vw] h-[50vw]' placeholder={t('contact.message')} required />
            <Button title={t('contact.sendMail')} />
        </div>
    )
}

export default FormContact