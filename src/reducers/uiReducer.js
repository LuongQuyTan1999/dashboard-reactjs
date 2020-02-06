import * as Types from "../constants/ui";

const initialState = {
  showLoading: false,
  showSidebar: true,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_LOADING: {
      return {
        ...state,
        showLoading: true,
      };
    }
    case Types.HIDE_LOADING: {
      return {
        ...state,
        showLoading: false,
      };
    }
    case Types.SHOW_SIDEBAR: {
      return {
        ...state,
        showSidebar: true,
      };
    }
    case Types.HIDE_SIDEBAR: {
      return {
        ...state,
        showSidebar: false,
      };
    }
    default:
      return state;
      break;
  }
};

export default uiReducer;
