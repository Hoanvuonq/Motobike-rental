import React from 'react';
import Benefit from '../../components/benefit';
import Booking from '../../components/booking';
import Carousel from '../../components/carousel';

const Home = () => {
    return (
        <div className='all-center w-full flex-col'>
            <Carousel />
            <Benefit />
            <Booking />
        </div>
    );
};

export default Home;
