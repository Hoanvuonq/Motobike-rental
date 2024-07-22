import React, { useMemo, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SecTitle from '../../components/secTitle';
import { renderMoto } from './category';
import { Link } from 'react-router-dom';
import Button from '../../components/button';

const Category = () => {
    const [itemsToShow, setItemsToShow] = useState(6);
    const maxItems = 16;

    const listCategory = useMemo(() => {
        return [...Array(maxItems).keys()].slice(0, itemsToShow).map((data, index) => {
            const dmdkdamkdf = `moto${data + 1}`;
            const dataMotoBike = renderMoto(dmdkdamkdf)[dmdkdamkdf];
            const images = dataMotoBike.images;
            const title = dataMotoBike.title[index];

            return (
                <CSSTransition
                    key={index}
                    classNames="item"
                    timeout={500}
                >
                    <article className="items-category all-center lg:py-[1vw] py-[4vw]">
                        <div className="items-products w-full h-full relative border-[0.1vw] border-items bg-white shadow-lg">
                            <div className="items-content py-[2vw] all-center relative">
                                <img src={images} alt="Moto01" className=';g:w-[23vw] w-[80vw] lg:h-[16vw] h-[50vw] object-cover' />
                            </div>
                            <div className="fl-woo-item-bottom-content mt-[1vw] relative">
                                <div className="fl--woo-add-to-cart-wrap all-center pt-[1.5vw] mb-[20px]">
                                    <p className='font-topic'>{title}</p>
                                    <div className="fl--order">
                                        <Link to={''} className="order-now bg-black">
                                            <p className='text-white font-topic'>Đặt xe ngay !</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </CSSTransition>
            );
        });
    }, [itemsToShow]);

    const handleShowMore = () => {
        setItemsToShow(prevItems => Math.min(prevItems + 6, maxItems));
    };

    const isMaxItemsReached = itemsToShow >= maxItems;

    return (
        <div className='bg-category w-full category'>
            <div className="all-center flex-col w-full lg:gap-[1vw] gap-[5vw] py-[3vw]">
                <SecTitle title='Danh mục xe máy - ô tô T-BIKE' />
                <p className='lg:w-[40vw] w-[90vw] text-center'>Toàn bộ xe máy - ô tô cho thuê của chúng tôi đều là những xe đời cao. Ngoài ra, các xe sau khi kết thúc hợp đồng với khách sẽ được kiểm tra, bảo dưỡng, thay thế các bộ phận hỏng hóc và phải đạt chuẩn an toàn xe trước khi giao cho khách hàng mới.</p>
            </div>
            <TransitionGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2vw] px-[6vw]">
                {listCategory}
            </TransitionGroup>
            {
                !isMaxItemsReached && (
                    <CSSTransition
                        in={!isMaxItemsReached}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
                        <div className="w-full all-center py-[2vw]">
                            <Button title='Xem thêm' onClick={handleShowMore} className="hover-items" />
                        </div>
                    </CSSTransition>
                )
            }
        </div >
    );
};

export default Category;
