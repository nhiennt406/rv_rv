import {
    GET_WORK,
    WORK_ERROR,
    UPDATE_LIKES,
    GET_SINGLEWORK,
    DELELTE_WORK
  } from "../actions/types";
  
  const initialState = {
    works: [],
    work: null,
    loading: true,
    error: {}
  };
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_WORK:
        return {
          ...state,
          works: payload,
          loading: false
        };
      case GET_SINGLEWORK:
        return {
          ...state,
          work: payload,
          loading: false
        };
      case DELELTE_WORK:
        return {
          ...state,
          works: state.works.filter(work =>work._id !== payload),
          loading: false
        };
      case WORK_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      case UPDATE_LIKES:
        return {
          ...state,
          works: state.works.map(work =>
            work._id === payload.id ? { ...work, likes: payload.likes } : work
          ),
          loading: false
        };
      default:
        return state;
    }
  }
  