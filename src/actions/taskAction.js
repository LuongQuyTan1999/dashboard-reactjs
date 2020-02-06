// import * as taskApis from "../apis/taskApi";
import * as Types from "../constants/task";
import { STATUSES } from "../constants/index";

export const fetchListTask = (params = {}) => {
  return {
    type: Types.FETCH_TASK,
    payload: {
      params,
    },
  };
};
export const fetchListTaskSuccess = data => {
  return {
    type: Types.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListTaskError = err => {
  return {
    type: Types.FETCH_TASK_ERROR,
    payload: {
      err,
    },
  };
};

export const filterTask = keyword => {
  return {
    type: Types.FILTER_TASK,
    payload: {
      keyword,
    },
  };
};

export const addTask = (title, description) => ({
  type: Types.ADD_TASK,
  payload: {
    title,
    description,
  },
});

export const addTaskSuccess = data => ({
  type: Types.ADD_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addTaskFailed = err => ({
  type: Types.ADD_TASK_FAILED,
  payload: {
    err,
  },
});

export const setTaskEdit = task => ({
  type: Types.SET_TASK_EDIT,
  payload: {
    task,
  },
});

export const editTask = (title, description, status = STATUSES[0].value) => ({
  type: Types.EDIT_TASK,
  payload: {
    title,
    description,
    status,
  },
});
export const editTaskSuccess = data => ({
  type: Types.EDIT_TASK_SUCCESS,
  payload: {
    data,
  },
});
export const editTaskFailed = err => ({
  type: Types.EDIT_TASK_FAILED,
  payload: {
    err,
  },
});

export const deleteTask = (id) => ({
  type: Types.DELETE_TASK,
  payload: {
    id
  }
})
export const deleteTaskSuccess = (data) => ({
  type: Types.DELETE_TASK_SUCCESS,
  payload: {
    data
  }
})
export const deleteTaskFailed = (err) => ({
  type: Types.DELETE_TASK_FAILED,
  payload: {
    err
  }
})

// export const fetchListTaskRequest = () => {
//   return dispatch => {
//     dispatch(fetchListTask());
//     taskApis
//       .getList()
//       .then(res => {
//         dispatch(fetchListTaskSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(fetchListTaskError(err));
//       });
//   };
// };
