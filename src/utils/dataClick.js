const clickData = {
    zaloClicks: 0,
    phoneClicks: 0,
    clickHistory: []
};

export const incrementZaloClick = (actionPayload) => {
    clickData.zaloClicks += 1;
    clickData.clickHistory.push(actionPayload);
};

export const incrementPhoneClick = (actionPayload) => {
    clickData.phoneClicks += 1;
    clickData.clickHistory.push(actionPayload);
};

export const getClickData = () => {
    return { ...clickData };
};
