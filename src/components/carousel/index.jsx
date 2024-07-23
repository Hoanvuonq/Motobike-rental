import React from "react";
import { Data } from './data';
import SecTitle from '../secTitle';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "black" }}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "black" }}
            onClick={onClick}
        />
    );
}

const Carousel = () => {
    const settings = {
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="flex flex-col gap-[3vw] py-[5vw] items-center">
            <SecTitle title='Địa điểm du lịch' />
            <div className="slider-container w-full">
                <div className="max-w-[90vw] m-auto w-full">
                    <Slider {...settings} className="all-center">
                        {Data.map(({ images }, index) => (
                            <div key={index} className="mx-[0.5vw] px-[0.5vw] all-center flex-col relative scale-icon">
                                <img src={images} alt="" className='object-cover w-full h-[22vw] rounded-[0.5vw]' />
                                <div className="bg-overLay" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
