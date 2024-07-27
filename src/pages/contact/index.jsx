import React from 'react';
import Banner from '../../components/banner/bannerContact';
import InfoContact from '../../partials/infoContact';
import FormContact from '../../partials/formContact';

const Contact = () => {
    return (
        <div className='all-center w-full flex-col'>
            <Banner />
            <InfoContact />
            <FormContact />
        </div>
    );
};

export default Contact;
