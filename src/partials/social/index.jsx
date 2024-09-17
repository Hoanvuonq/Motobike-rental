import React, { useMemo } from 'react';
import Zalo from '../../assets/icon/zalo-social.png';
import Phone from '../../assets/icon/phone-social.png';
import Facebook from '../../assets/icon/facebook-app.png';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { incrementZaloClick, incrementPhoneClick, addClickHistory } from '../../redux/actions/clickActions';
import getLocationInfo from '../../api/location';

const Social = () => {
    const location = useLocation();
    const city = location.pathname.includes('nhatrang') ? 'nhatrang' : 'danang';
    const locationIndex = city === 'nhatrang' ? '0848771771' : '0848770770';
    const linkFaceook = city === 'nhatrang' ? 'https://www.facebook.com/profile.php?id=100094403166212' : 'https://www.facebook.com/profile.php?id=100063470564198';
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

            await sendToGoogleForm(actionPayload);

            console.log("User clicked:", actionPayload);

        } catch (error) {
            console.error("Error handling click:", error);
        }
    };


    const sendToGoogleForm = (data) => {
        const form = document.createElement('form');
        form.action = "https://docs.google.com/forms/d/e/1FAIpQLSfG7bg18htT799cqA8DxC75Gn3q-r49uiVTh0LBo5ypX9ydHA/formResponse";
        form.method = "POST";
        form.target = "hidden_iframe";

        form.style.display = "none";

        const typeField = document.createElement('input');
        typeField.type = "hidden";
        typeField.name = "entry.1329239312";
        typeField.value = data.type;
        form.appendChild(typeField);

        const timestampField = document.createElement('input');
        timestampField.type = "hidden";
        timestampField.name = "entry.184853561";
        timestampField.value = data.timestamp;
        form.appendChild(timestampField);

        const locationField = document.createElement('input');
        locationField.type = "hidden";
        locationField.name = "entry.901133057";
        locationField.value = data.location;
        form.appendChild(locationField);

        document.body.appendChild(form);

        const iframe = document.createElement('iframe');
        iframe.name = "hidden_iframe";
        iframe.style.display = "none";
        document.body.appendChild(iframe);

        // Submit form
        form.submit();

        console.log("Data sent to Google Form successfully.");
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
        {
            images: Facebook,
            color: 'bg-facebook',
            style: 'fillColorFacebook',
            link: `${linkFaceook}`,
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

    return <div className="all-center flex-col lg:gap-[1.5vw] gap-[6vw] text-white">{socialMemo}</div>;
};

export default Social;
