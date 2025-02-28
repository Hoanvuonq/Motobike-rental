import React from 'react';
import Benefit from '../../partials/benefit';
import Booking from '../../partials/booking';
import Carousel from '../../components/carousel';
import Banner from '../../components/banner/bannerHome';
import OptionMotobike from '../../partials/optionMotobike';
import Highlights from '../../partials/highlights';
import Introduce from '../../partials/introduce';
import Category from '../../partials/category';
import About from '../../partials/about';
import SliderComponent from '../../components/slider';
import { Data } from '../../components/slider/data';

const Home = () => {
    return (
        <div className='all-center w-full flex-col'>
            <Banner />
            <SliderComponent images={Data.home} />
            <About />
            <Benefit />
            <OptionMotobike />
            <Booking />
            <Highlights />
            <Introduce />
            <Category />
            <Carousel />
        </div>
    );
};

export default Home;
