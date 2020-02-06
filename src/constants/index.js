import React from "react";
import Taskboard from "../containers/Taskboard";
import Admin from "../containers/Admin";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
export const API_ENDPOINT = "http://localhost:3000";

export const STATUSES = [
  {
    value: 0,
    label: "READY",
  },
  {
    value: 1,
    label: "IN PROGRESS",
  },
  {
    value: 2,
    label: "COMPELETD",
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTES = [
  {
    path: "/admin",
    name: "Trang Chu",
    exact: true,
    component: () => <Admin />,
  },
  {
    path: "/admin/task-board",
    name: "Quan Ly Cong Viec",
    exact: true,
    component: () => <Taskboard />,
  },
];

export const USER_ROUTES = [
  {
    path: "/login",
    name: "Dang Nhap",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/signup",
    name: "Dang Nhap",
    exact: true,
    component: ({history}) => <Signup history={history}/>,
  },
];
