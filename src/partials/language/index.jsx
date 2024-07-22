import React, { useState, useEffect } from 'react';
import i18next from 'i18next';

const Language = () => {
    const [isChecked, setIsChecked] = useState(i18next.language === 'en');

    const handleCheckboxChange = () => {
        const newLanguage = isChecked ? 'vi' : 'en';
        i18next.changeLanguage(newLanguage);
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        setIsChecked(i18next.language === 'en');
    }, []);

    return (
        <div className="relative all-center">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                id="language-toggle"
            />
            <label htmlFor="language-toggle"></label>
        </div>
    );
};

export default Language;
