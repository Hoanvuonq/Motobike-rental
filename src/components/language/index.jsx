import React, { useState } from 'react';


const Language = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="language-switch">
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
