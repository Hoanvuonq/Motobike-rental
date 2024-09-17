import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SecTitle from '../secTitle';
import { useTranslation } from 'react-i18next';


const NextArrow = ({ className, style, onClick }) => {
    return <div className={className} style={{ ...style, display: 'block', background: 'transparent' }} onClick={onClick} />;
};

const PrevArrow = ({ className, style, onClick }) => {
    return <div className={className} style={{ ...style, display: 'block', background: 'transparent' }} onClick={onClick} />;
};



const SliderComponent = ({ images }) => {
    const { t } = useTranslation();
    const [slidesToShow, setSlidesToShow] = useState(5);
    const [centerMode, setCenterMode] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 520) {
                setSlidesToShow(1);
                setCenterMode(false);
            } else if (window.innerWidth < 768) {
                setSlidesToShow(2);
                setCenterMode(true);
            } else {
                setSlidesToShow(4);
                setCenterMode(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        speed: 4000,
        slidesToShow: slidesToShow,
        centerMode: centerMode,
        centerPadding: centerMode ? '0' : '10%',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        cssEase: 'linear',
        pauseOnHover: false,
    };


    return (
        <div className="slider-container w-full all-center overflow-hidden">
            <div className="w-[80vw]">
                <SecTitle title={t('slider.title')} />
                <Slider {...settings} className="all-center">
                    {images.map((image, index) => (
                        <div key={index} className="px-[0.2vw] all-center flex-col relative focus:outline-none">
                            <img src={image} alt="slider" className="object-cover xl:w-[30vw] w-full lg:h-[20vw] h-[100vw] lg:rounded-[0.5vw] rounded-[2vw]" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SliderComponent;
