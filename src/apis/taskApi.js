import qs from "query-string";
import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constants";

const url = "/tasks";

export const getList = (params = {}) => {
  let queryParams = "";
  if (params !== null && typeof params === "object") {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}${url}${queryParams}`);
};

export const addTask = data => {
  return axiosService.post(`${API_ENDPOINT}${url}`, data);
};

export const editTask = (data, taskEditing) => {
  return axiosService.put(`${API_ENDPOINT}${url}/${taskEditing}`, data);
}

export const deleteTask = (id) => {
  return axiosService.delete(`${API_ENDPOINT}${url}/${id}`);
}
