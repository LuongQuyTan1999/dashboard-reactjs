import * as Types from "../constants/ui";

export const showLoading = () => {
  return {
    type: Types.SHOW_LOADING,
  };
};
export const hideLoading = () => {
  return {
    type: Types.HIDE_LOADING,
  };
};

export const showSidebar = () => {
  return {
    type: Types.SHOW_SIDEBAR
  }
}
export const hideSidebar = () => {
  return {
    type: Types.HIDE_SIDEBAR
  }
}
