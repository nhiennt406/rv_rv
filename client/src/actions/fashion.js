import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_FASHION,
  UPDATE_LIKES,
  GET_SINGLEFASHION,
  DELELTE_FASHION
} from "../actions/types";

//Get posts
export const getFashion = () => async dispatch => {
  try {
    const res = await axios.get("/api/fashions");
    dispatch({
      type: GET_FASHION,
      payload: res.data
    });
    console.log(' Data Nè', res.data);
  } catch (err) {
    dispatch(setAlert("Không load được bài viết", "warning"));
    console.log("Lỗi không xác định");
  }
};

//Get id post
export const getSingleFashion = id => async dispatch => {
  try {
    const res = await axios.get(`/api/fashions/${id}`);
    dispatch({
      type: GET_SINGLEFASHION,
      payload: res.data
    });
    
  } catch (err) {
    dispatch(setAlert("Không load được bài viết", "warning"));
    console.log("Lỗi không xác định");
  }
};
// //ADD likes
// export const addLike = id => async dispatch => {
//   try {
//     const res = await axios.put(`/api/posts/${id}`);
//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data }
//     });
//   } catch (err) {
//     dispatch(setAlert("Lỗi", "warning"));
//     console.log("Lỗi không xác định");
//   }
// };
// //romove likes
// export const removeLike = id => async dispatch => {
//   try {
//     const res = await axios.put(`/api/posts/unlike/${id}`);
//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data }
//     });
//   } catch (err) {
//     dispatch(setAlert("Lỗi", "warning"));
//     console.log("Lỗi không xác định");
//   }
// };
// // Create post
export const createFashion = (formData, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/fashions/", formData, config);
    dispatch({
      type: GET_FASHION,
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
// // Delete post
export const deleteFashion = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/fashions/${id}`);
    dispatch({
      type: DELELTE_FASHION,
      payload: { id }
    });
    dispatch(setAlert("Xóa bài thành công", "success"));
  } catch (err) {
    dispatch(setAlert("Lỗi", "warning"));
    console.log("Lỗi không xác định");
  }
};
