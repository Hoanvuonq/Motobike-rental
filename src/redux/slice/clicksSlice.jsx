import { INCREMENT_ZALO_CLICK, INCREMENT_PHONE_CLICK, ADD_CLICK_HISTORY } from '../actions/clickActions';

const initialState = {
  zaloClicks: JSON.parse(localStorage.getItem('zaloClicks')) || 0,
  phoneClicks: JSON.parse(localStorage.getItem('phoneClicks')) || 0,
  clickHistory: JSON.parse(localStorage.getItem('clickHistory')) || [],
};

const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ZALO_CLICK:
      const newZaloClicks = state.zaloClicks + 1;
      localStorage.setItem('zaloClicks', JSON.stringify(newZaloClicks));
      return {
        ...state,
        zaloClicks: newZaloClicks,
      };
    case INCREMENT_PHONE_CLICK:
      const newPhoneClicks = state.phoneClicks + 1;
      localStorage.setItem('phoneClicks', JSON.stringify(newPhoneClicks));
      return {
        ...state,
        phoneClicks: newPhoneClicks,
      };
    case ADD_CLICK_HISTORY:
      const newClickHistory = [...state.clickHistory, action.payload];
      localStorage.setItem('clickHistory', JSON.stringify(newClickHistory));
      return {
        ...state,
        clickHistory: newClickHistory,
      };
    default:
      return state;
  }
};

export default clickReducer;
