import React, { useMemo, useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SecTitle from '../../components/secTitle';
import { renderMoto } from './category';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

const Category = () => {
    const { t } = useTranslation();
    const [itemsToShow, setItemsToShow] = useState(8);
    const [showLocations, setShowLocations] = useState(false);
    const maxItems = 16;
    const orderRef = useRef(null);
    // const articleRef = useRef(null);

    // const handleClickOutside = (event) => {
    //     if (articleRef.current && !articleRef.current.contains(event.target)) {
    //         setShowLocations(false);
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);

    const handleShowMore = () => {
        setItemsToShow(prevItems => Math.min(prevItems + 8, maxItems));
    };

    const isMaxItemsReached = itemsToShow >= maxItems;

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const listCategory = useMemo(() => {
        return [...Array(maxItems).keys()].map((data, index) => {
            const items = `moto${data + 1}`;
            const dataMotoBike = renderMoto(items)[items];
            const images = dataMotoBike.images;
            const title = dataMotoBike.title[index];

            return (
                <CSSTransition
                    key={index}
                    classNames="item"
                    timeout={500}

                >
                    <article className="items-category all-center lg:py-[1vw] py-[4vw]">
                        <div className="items-products w-full h-full relative border-[0.1vw] border-items bg-white shadow-lg lg:rounded-t-[1vw] rounded-t-[4vw]">
                            <div className="items-content lg:py-[4vw] py-[8vw] all-center relative">
                                <img src={images} alt={title} className='lg:w-[18vw] w-[80vw] lg:h-[12vw] h-[50vw] object-cover' />
                            </div>
                            <div className="fl-woo-item-bottom-content mt-[1vw] relative">
                                <div className="fl--woo-add-to-cart-wrap all-center pt-[1.5vw] mb-[20px]">
                                    <p className='font-topic'>{t(title)}</p>
                                    <div ref={orderRef} className="fl--order">
                                        {!showLocations ? (
                                            <div
                                                className="order-now bg-black lg:!rounded-b-[1vw] !rounded-b-[4vw]"
                                                onClick={() => setShowLocations(true)}
                                            >
                                                <p className='text-white font-topic'>{t('category.book')}</p>
                                            </div>
                                        ) : (
                                            <>
                                                <Link to={'tel:0848.770.770'} className="order-now bg-black lg:!rounded-bl-[1vw]" target='_blank'>
                                                    <p className='text-white font-topic2 scale-icon'>{t('category.bookDN')}</p>
                                                </Link>
                                                <Link to={'tel:0848.771.771'} className="order-now bg-black lg:!rounded-br-[1vw] border-items border-l-[0.1vw]" target='_blank'>
                                                    <p className='text-white font-topic2 scale-icon'>{t('category.bookNT')}</p>
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </CSSTransition>
            );
        });
    }, [t, showLocations]);

    return (
        <div className='bg-category w-full category'>
            <div className="all-center flex-col w-full lg:gap-[1vw] gap-[5vw] py-[3vw]">
                <SecTitle title={t('category.titleCategory')} />
                <p className='lg:w-[40vw] w-[90vw] font-content text-center'>{t('category.content')} </p>
            </div>
            <div className="hidden lg:block">
                <TransitionGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2vw] px-[6vw]">
                    {listCategory.slice(0, itemsToShow)}
                </TransitionGroup>
            </div>
            <div className="block lg:hidden px-[3vw] lg:h-auto h-[90vw] overflow-hidden">
                <Slider {...sliderSettings}>
                    {listCategory}
                </Slider>
            </div>
            {
                !isMaxItemsReached && (
                    <CSSTransition
                        in={!isMaxItemsReached}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
                        <div className="w-full all-center py-[2vw] lg:!flex !hidden">
                            <Button title={t('category.seemore')} onClick={handleShowMore} className="hover-items" />
                        </div>
                    </CSSTransition>
                )
            }
        </div >
    );
};

export default Category;
