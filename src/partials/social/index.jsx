// src/components/Social/Social.jsx

import React, { useMemo } from 'react';
import Zalo from '../../assets/icon/zalo-social.png';
import Phone from '../../assets/icon/phone-social.png';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { incrementZaloClick, incrementPhoneClick, getClickData } from '../../utils/dataClick';
import axios from 'axios';

const Social = () => {
    const location = useLocation();
    const city = location.pathname.includes('nhatrang') ? 'nhatrang' : 'danang';
    const locationIndex = city === 'nhatrang' ? '0848771771' : '0848770770';
    const dispatch = useDispatch();

    const getLocationInfo = async () => {
        try {
            const response = await axios.get('https://ipinfo.io/json?token=6afad0bc31935b');
            return response.data;
        } catch (error) {
            console.error("Error fetching location info:", error);
            return null;
        }
    };

    const handleClick = async (type) => {
        // Sử dụng Geolocation API để lấy tọa độ hiện tại
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Lấy thông tin địa lý từ IP
                const locationData = await getLocationInfo();
                const location = locationData ? `${locationData.city}, ${locationData.region}, ${locationData.country}` : 'Unknown';

                const actionPayload = {
                    type,
                    timestamp: new Date().toLocaleString(),
                    location: location || `Latitude: ${latitude}, Longitude: ${longitude}`
                };

                if (type === 'Zalo') {
                    incrementZaloClick(actionPayload);
                } else {
                    incrementPhoneClick(actionPayload);
                }

                console.log("Current Click Data:", getClickData());
            }, (error) => {
                console.error('Error getting location:', error);
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
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
