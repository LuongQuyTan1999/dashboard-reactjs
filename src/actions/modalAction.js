import * as Types from "../constants/modal";

export const showModal = () => {
  return {
    type: Types.SHOW_MODAL,
  };
};

export const hideModal = () => {
  return {
    type: Types.HIDE_MODAL,
  };
};

export const changeModalContent = component => {
  return {
    type: Types.CHANGE_MODAL_CONTENT,
    payload: {
      component,
    },
  };
};

export const changeModalTitle = title => {
  return {
    type: Types.CHANGE_MODAL_TITLE,
    payload: {
      title,
    },
  };
};
