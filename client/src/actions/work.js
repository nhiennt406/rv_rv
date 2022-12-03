import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_WORK,
  UPDATE_LIKES,
  GET_SINGLEWORK,
  DELELTE_WORK
} from "../actions/types";

//Get Work

export const getWork = () => async dispatch => {
  try {
    const res = await axios.get("/api/works/");
    dispatch({
      type: GET_WORK,
      payload: res.data
    });
  } catch (err) {
    dispatch(setAlert("Không load được bài viết", "warning"));
    console.log("Lỗi không xác định");
  }
};
//Get id WORK

export const getSingleWork = id => async dispatch => {
  try {
    const res = await axios.get(`/api/works/${id}`);
    dispatch({
      type: GET_SINGLEWORK,
      payload: res.data
    });
  } catch (err) {
    dispatch(setAlert("Không load được bài viết", "warning"));
    console.log("Lỗi không xác định");
  }
};
//ADD likes
export const addLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/works/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch(setAlert("Lỗi", "warning"));
    console.log("Lỗi không xác định");
  }
};
//romove likes
export const removeLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/works/unlike/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch(setAlert("Lỗi", "warning"));
    console.log("Lỗi không xác định");
  }
};
// Create Work
export const createWork = (formData, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/works", formData, config);
    dispatch({
      type: GET_WORK,
      payload: res.data
    });
    dispatch(setAlert(edit ? "Đăng thất bại " : "Đăng bài thành công"));
  } catch (err) {
    dispatch(setAlert("Lỗi không xác định ", "warning"));
    console.log(
      "Chỗ này bắt lỗi nè, không đúng định dạng hay những field yêu cầu không nhập thì từ phía server trả về message chỗ này mà chưa biết render"
    );
  }
};
// Delete WORK
export const deleteWork = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/works/${id}`);
    dispatch({
      type: DELELTE_WORK,
      payload: { id }
    });
    dispatch(setAlert("Xóa bài thành công", "success"));
  } catch (err) {
    dispatch(setAlert("Lỗi", "warning"));
    console.log("Lỗi không xác định");
  }
};
