import React from 'react';

const Button = ({ onClick, images, title, className }) => {
    return (
        <button type='button' onClick={onClick} className={`btn-box all-center md:p-[0.9vw] p-[3vw] relative lg:rounded-[0.4vw] rounded-[1vw] search ${className}`}>
            <div className="flex items-center">
                {images && <img src={images} alt="Icon" className='md:w-[2vw] w-[8vw]' />}
                <p className='font-search uppercase'>{title}</p>
            </div>
            <span className='design-box lg:rounded-[0.2vw] rounded-[1vw]'></span>
        </button>
    );
};

export default Button;
