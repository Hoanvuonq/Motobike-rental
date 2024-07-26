import React, { useId } from "react";


const CheckBox = (props) => {
    const { label, value, onChange, checked } = props;
    const id = useId();

    return (
        <label htmlFor={id} className="w-full all-start cursor-pointer">
            <div>
                <div className="checkbox-wrapper-4 box-border">
                    <input className="inp-cbx" id={id} type="checkbox" value={value} onChange={onChange} checked={checked} />
                    <div className="cbx !flex items-center lg:gap-[1vw] gap-[2.5vw]" >
                        <span >
                            <svg className="lg:w-[0.9vw] w-[5vw] lg:h-[0.9vw] h-[5vw]">
                                <use href="#check-4"></use>
                            </svg>
                        </span>
                        <span className="font-category">{label}</span>
                    </div>
                    <svg className="inline-svg">
                        <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </symbol>
                    </svg>
                </div>
            </div>
        </label>
    );
};

export default CheckBox;
