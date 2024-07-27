import React from "react";
import { Data } from './data';
import SecTitle from '../secTitle';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    const settings = {
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="flex flex-col gap-[3vw] py-[5vw] items-center">
            <SecTitle title={t('tourist.title')} />
            <div className="slider-container w-full">
                <div className="max-w-[90vw] m-auto w-full">
                    <Slider {...settings} className="all-center gap-[4vw]">
                        {Data.map(({ images }, index) => (
                            <div key={index} className="lg:mx-[0.5vw] mx-0 lg:px-[0.5vw] px-0 all-center flex-col relative scale-icon">
                                <img src={images} alt="" className='object-cover w-full lg:h-[22vw] h-[90vw] lg:rounded-[0.5vw] rounded-[2vw]' />
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
