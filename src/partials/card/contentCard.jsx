import React, { useMemo } from 'react';
import Location from '../../assets/icon/location-card.svg';
import Button from '../../components/button';
import { renderMotoCard } from './card';
import { CSSTransition } from 'react-transition-group';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ContentCard = ({ filter }) => {
    const maxItems = 16;
    const { t } = useTranslation();
    const location = useLocation();

    const city = location.pathname.includes('danang') ? 'danang' : 'nhatrang';
    const locationIndex = city === 'danang' ? 0 : 1;

    const listCategory = useMemo(() => {
        return [...Array(maxItems).keys()].map((data, index) => {
            const items = `moto${data + 1}`;
            const dataMotoBike = renderMotoCard(items)[items];
            const images = dataMotoBike.images;
            const title = dataMotoBike.title[index];
            const typeFilter = dataMotoBike.type[index].replace('rentalDaNang.', '');
            const type = dataMotoBike.type[index];
            const location = dataMotoBike.location[locationIndex];

            if (filter.length > 0 && !filter.includes(typeFilter)) {
                return null;
            }

            return (
                <CSSTransition
                    key={index}
                    classNames="item"
                    timeout={500}
                >
                    <div className="border-items border-[0.1vw] cursor-pointer rounded-[1vw] lg:py-[1vw] py-[4vw] all-start flex-col itemsCard lg:shadow-custom2 shadow">
                        <div className="w-full all-center">
                            <img src={images} alt="..." className='lg:w-[16vw] w-[80vw] lg:h-[10vw] h-[50vw] object-cover' />
                        </div>
                        <div className="flex flex-col lg:gap-[0.7vw] gap-[4vw] w-full lg:py-[1vw] py-[2vw] px-[2vw]">
                            <div className="flex items-center justify-between ">
                                <h1 className='font-title'>{title}</h1>
                                <p className='font-text'>{t(type)}</p>
                            </div>
                            <div className="flex items-center gap-[0.4vw]">
                                <img src={Location} alt="Location" className='lg:w-[1vw] w-[4vw]' />
                                <p className='font-content'>{t(location)}</p>
                            </div>
                            <Link to={'tel:0983477477'} className="w-full all-center">
                                <Button title={t('rentalDaNang.booking')} />
                            </Link>
                        </div>
                    </div>
                </CSSTransition>
            );
        }).filter(Boolean);
    }, [t, filter, locationIndex]);

    return (
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:w-[80vw] w-full lg:gap-[1vw] gap-[4vw]">
            {listCategory}
        </div>
    );
};

export default ContentCard;
