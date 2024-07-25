import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/carousel';
import Banner from '../../components/banner/bannerNhaTrang';
import AsideCategory from '../../partials/card/asideCategory';
import ContentCard from '../../partials/card/contentCard';

const RentalNhaTrang = () => {
    const { city } = useParams();
    const [filter, setFilter] = useState(['scooters']);

    const handleFilterChange = (value) => {
        setFilter(prev => {
            if (prev.includes(value)) {
                return prev.filter(item => item !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    return (
        <div className='all-center w-full flex-col'>
            <Banner location={city} />
            <div className="flex justify-between w-full px-[4vw] py-[4vw] gap-[6vw] lg:flex-row flex-col">
                <AsideCategory onFilterChange={handleFilterChange} selectedFilters={filter} />
                <ContentCard filter={filter} location={city} />
            </div>
            <Carousel />
        </div>
    );
};

export default RentalNhaTrang;
