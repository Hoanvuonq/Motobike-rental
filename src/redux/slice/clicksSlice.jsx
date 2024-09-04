import { INCREMENT_ZALO_CLICK, INCREMENT_PHONE_CLICK, ADD_CLICK_HISTORY } from '../actions/clickActions';
import clickData from '../../data/data';

const initialState = {
  zaloClicks: clickData.filter(item => item.type === 'Zalo').length,
  phoneClicks: clickData.filter(item => item.type === 'Phone').length,
  clickHistory: clickData,
};

const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ZALO_CLICK:
      return {
        ...state,
        zaloClicks: state.zaloClicks + 1,
      };
    case INCREMENT_PHONE_CLICK:
      return {
        ...state,
        phoneClicks: state.phoneClicks + 1,
      };
    case ADD_CLICK_HISTORY:
      return {
        ...state,
        clickHistory: [...state.clickHistory, action.payload],
      };
    default:
      return state;
  }
};


export default clickReducer;
