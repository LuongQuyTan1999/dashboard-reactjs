import { toast } from "react-toastify";

export const handleMessage = err => {
  let message = null;
  if (typeof err === "object" && err.message) {
    ({ message } = err);
  }
  if (message !== null && typeof message !== "undefined" && message !== "") {
    toast.error(message);
  }
};

export const handleMessageSuccess = message  => {
  if (message !== null && typeof message !== "undefined" && message !== "") {
    toast.success(message);
  }
};
