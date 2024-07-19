import React from 'react';
import Benefit from '../../components/benefit';
import Booking from '../../components/booking';
import Carousel from '../../components/carousel';
import Banner from '../../components/banner';
import OptionMotobike from '../../components/optionMotobike';

const Home = () => {
    return (
        <div className='all-center w-full flex-col'>
            <Banner />
            <Benefit />
            <OptionMotobike />
            <Booking />
            <Carousel />
        </div>
    );
};

export default Home;
