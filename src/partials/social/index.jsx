import React, { useMemo } from 'react';
import Zalo from '../../assets/icon/zalo-social.png';
import Phone from '../../assets/icon/phone-social.png';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { incrementZaloClick, incrementPhoneClick, addClickHistory } from '../../redux/actions/clickActions';
import getLocationInfo from '../../api/location';

const Social = () => {
    const location = useLocation();
    const city = location.pathname.includes('nhatrang') ? 'nhatrang' : 'danang';
    const locationIndex = city === 'nhatrang' ? '0848771771' : '0848770770';
    const dispatch = useDispatch();

    const handleClick = async (type) => {
        try {
            const locationData = await getLocationInfo();
            const actionPayload = {
                type,
                timestamp: new Date().toLocaleString(),
                location: locationData ? `${locationData.city}, ${locationData.region}, ${locationData.country}` : 'Unknown',
            };

            if (type === 'Zalo') {
                dispatch(incrementZaloClick());
            } else {
                dispatch(incrementPhoneClick());
            }

            dispatch(addClickHistory(actionPayload));

            // Lưu vào localStorage
            const clickHistory = JSON.parse(localStorage.getItem('clickHistory')) || [];
            clickHistory.push(actionPayload);
            localStorage.setItem('clickHistory', JSON.stringify(clickHistory));

            console.log("Current Click Data:", clickHistory);
        } catch (error) {
            console.error("Error handling click:", error);
        }
    };

    const listSocial = [
        {
            images: Zalo,
            color: 'bg-zalo',
            style: 'fillColorZalo',
            link: `https://zalo.me/${locationIndex}`,
            onClick: () => handleClick('Zalo'),
        },
        {
            images: Phone,
            color: 'bg-phone',
            style: 'fillColorPhone',
            link: `tel:${locationIndex}`,
            onClick: () => handleClick('Phone'),
        },
    ];

    const socialMemo = useMemo(() => {
        return listSocial.map(({ images, color, link, style, onClick }, index) => (
            <div key={index}>
                <a
                    href={link}
                    className={`${color} rounded-full hover-items lg:h-[2.5vw] lg:w-[2.5vw] w-[12vw] h-[12vw] all-center`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClick}
                >
                    <img src={images} alt="Social" className="lg:h-[1.5vw] h-[8vw] lg:w-[1.5vw] w-[8vw] rings relative z-20" />
                    <div className={`${style} zoom z-10 relative`}></div>
                </a>
            </div>
        ));
    }, [listSocial]);

    return <div className="all-center flex-col lg:gap-[2vw] gap-[8vw] text-white">{socialMemo}</div>;
};

export default Social;
