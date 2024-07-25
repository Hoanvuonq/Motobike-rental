import React from 'react';
import { useTranslation } from 'react-i18next';
import CheckBox from '../../components/checkBox';

const listCheck = [
    { label: "rentalDaNang.scooters", value: "scooters" },
    { label: "rentalDaNang.motorbikes", value: "motorbikes" },
    { label: "rentalDaNang.manualMotorcycle", value: "manualMotorcycle" },
    { label: "rentalDaNang.car", value: "car" },
];

const AsideCategory = ({ onFilterChange, selectedFilters }) => {
    const { t } = useTranslation();

    const handleChange = (value) => {
        onFilterChange(value);
    };

    return (
        <div className="border-[0.1vw] border-card rounded-[1vw] sticky lg:w-[16vw] w-full lg:h-[19vw] h-full asideCategory all-start flex-col lg:gap-[0.5vw] gap-[2vw] lg:py-[1vw] py-[4vw]">
            <h4 className="font-title lg:px-[1vw] px-[2vw]">{t('rentalDaNang.category')}</h4>
            <div className="grid lg:grid-cols-1 grid-cols-1 lg:gap-[0.2vw] gap-[2vw] w-full">
                {listCheck.map(({ label, value }, index) => (
                    <div key={index} className="font-content hover:bg-itemsCheckbox w-full lg:py-[0.8vw] py-[3vw] lg:px-[1vw] px-[3vw]">
                        <CheckBox
                            label={t(label)}
                            value={value}
                            onChange={() => handleChange(value)}
                            checked={selectedFilters.includes(value)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AsideCategory;
