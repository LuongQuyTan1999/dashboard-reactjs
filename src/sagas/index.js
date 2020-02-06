import {
  call,
  put,
  delay,
  select,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import * as taskTypes from "../constants/task";
import * as taskApis from "../apis/taskApi";
import * as taskActions from "../actions/taskAction";
import * as modalActions from "../actions/modalAction";
import * as uiActions from "../actions/uiAction";
import { STATUS_CODE } from "../constants";

function* watchFetchListTaskAction({ payload }) {
  const { params } = payload;
  yield put(uiActions.showLoading());
  const list = yield call(taskApis.getList, params);
  const { status, data } = list;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(taskActions.fetchListTaskSuccess(data));
  } else {
    yield put(taskActions.fetchListTaskError(data));
  }
  yield delay(1000);
  yield put(uiActions.hideLoading());
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(
    taskActions.fetchListTask({
      q: keyword,
    }),
  );
  // const list = yield select(state => state.taskReducer.listTask);

  // const filterTask = list.filter(task =>
  //   task.title.toLowerCase().includes(keyword.trim().toLowerCase()),
  // );
  // yield put(taskActions.filterTaskSuccess(filterTask));
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(uiActions.showLoading());
  const resp = yield call(taskApis.addTask, {
    title,
    description,
    status: 0,
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(taskActions.addTaskSuccess(data));
  } else {
    yield put(taskActions.addTaskFailed(data));
  }
  yield put(uiActions.hideLoading());
  yield put(modalActions.hideModal());
}

function* editTaskSaga({ payload }) {
  const { title, description, status } = payload;
  const taskEditing = yield select(state => state.taskReducer.taskEditing);
  yield put(uiActions.showLoading());
  let resp = yield call(
    taskApis.editTask,
    { title, description, status },
    taskEditing.id,
  );
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(taskActions.editTaskSuccess(data));
    yield put(modalActions.hideModal());
  } else {
    yield put(taskActions.editTaskFailed(data));
  }
  yield delay(1000);
  yield put(uiActions.hideLoading());
  // yield put(modalActions.hideModal());
}

function* deleteTaskSaga({ payload }) {
  let { id } = payload;
  yield put(uiActions.showLoading());
  const resp = yield call(taskApis.deleteTask, id);
  const { data, status: statusDelete } = resp;
  if (statusDelete === STATUS_CODE.SUCCESS) {
    yield put(taskActions.deleteTaskSuccess(id));
  }else{
    yield put(taskActions.deleteTaskFailed(data));
  }
  yield delay(500);
  yield put(uiActions.hideLoading());
  yield put(modalActions.hideModal())
}

function* rootSaga() {
  yield takeLatest(taskTypes.FETCH_TASK, watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeEvery(taskTypes.EDIT_TASK, editTaskSaga);
  yield takeEvery(taskTypes.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
