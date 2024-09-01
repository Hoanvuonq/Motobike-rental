import React from 'react';
import { useSelector } from 'react-redux';

const DashBoard = () => {
    const zaloClicks = useSelector((state) => state.clicks.zaloClicks);
    const phoneClicks = useSelector((state) => state.clicks.phoneClicks);
    const clickHistory = useSelector((state) => state.clicks.clickHistory);

    return (
        <div>
            <h1>DashBoard</h1>
            <p>Số lần nhấp vào Zalo: {zaloClicks}</p>
            <p>Số lần nhấp vào Phone: {phoneClicks}</p>
            <h2>Lịch sử nhấp chuột</h2>
            <ul>
                {clickHistory.map((entry, index) => (
                    <li key={index}>
                        {entry.timestamp} - {entry.type} - {entry.location}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashBoard;
