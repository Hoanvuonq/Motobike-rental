export const INCREMENT_ZALO_CLICK = 'INCREMENT_ZALO_CLICK';
export const INCREMENT_PHONE_CLICK = 'INCREMENT_PHONE_CLICK';
export const ADD_CLICK_HISTORY = 'ADD_CLICK_HISTORY';

export const incrementZaloClick = () => ({
    type: INCREMENT_ZALO_CLICK,
});

export const incrementPhoneClick = () => ({
    type: INCREMENT_PHONE_CLICK,
});

export const addClickHistory = (history) => ({
    type: ADD_CLICK_HISTORY,
    payload: history,
});
