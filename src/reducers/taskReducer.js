import * as Types from "../constants/task";
import * as hdms from "../commons/handleMessage";
const initialState = {
  listTask: [],
  taskEditing: null,
};

const findIndex = (listTask, id) => {
  let result = null;

  listTask.forEach((task, index) => {
    if (task.id === id) {
      return (result = index);
    }
  });

  return result;
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      };
    }
    case Types.FETCH_TASK_SUCCESS: {
      hdms.handleMessageSuccess('Load Dữ Liệu Thành Công')
      return {
        ...state,
        listTask: action.payload.data,
      };
    }
    case Types.FETCH_TASK_ERROR: {
      hdms.handleMessage(action.payload.err);
      return {
        ...state,
        listTask: [],
      };
    }
    case Types.ADD_TASK: {
      return {
        ...state,
      };
    }
    case Types.ADD_TASK_SUCCESS: {
      const { data } = action.payload;
      hdms.handleMessageSuccess('Thêm dự liệu thành công')
      return {
        ...state,
        listTask: state.listTask.concat(data),
      };
    }
    case Types.ADD_TASK_FAILED: {
      hdms.handleMessage(action.payload.err);
      return {
        ...state,
      };
    }

    case Types.SET_TASK_EDIT: {
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task,
      };
    }
    case Types.EDIT_TASK_SUCCESS: {
      const { data } = action.payload;
      const { listTask } = state;
      let index = findIndex(listTask, data.id);
      if (index !== -1) {
        const newlist = [
          ...listTask.slice(0, index),
          data,
          ...listTask.slice(index + 1),
        ];
        hdms.handleMessageSuccess("Ban Da Sua Du Lieu Thanh Cong");
        return {
          ...state,
          listTask: newlist,
        };
      }
      return {
        ...state,
      };
    }
    case Types.EDIT_TASK_SUCCESS: {
      hdms.handleMessage(action.payload.err);
      return {
        ...state,
      };
    }
    case Types.DELETE_TASK_SUCCESS: {
      let { data } = action.payload;
      let { listTask } = state;
      let newArr = listTask.filter(task => task.id !== data);
      hdms.handleMessageSuccess('Xoá dự liệu thành công')
      return { ...state, listTask: newArr };
    }
    case Types.DELETE_TASK_FAILED: {
      hdms.handleMessage(action.payload.err);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default taskReducer;
