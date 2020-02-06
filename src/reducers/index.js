import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import uiReducer from "./uiReducer";
import modalReducer from "./modalReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  taskReducer,
  uiReducer,
  modalReducer,
  form: formReducer,
});

export default rootReducer;
