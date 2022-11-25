import {
    GET_FASHION,
    FASHION_ERROR,
    UPDATE_LIKES,
    GET_SINGLEFASHION,
    DELELTE_FASHION
  } from "../actions/types";
  
  const initialState = {
    fashions: [],
    fashion: null,
    loading: true,
    error: {}
  };
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_FASHION:
        return {
          ...state,
          fashions: payload,
          loading: false
        };
      case GET_SINGLEFASHION:
        return {
          ...state,
          fashion: payload,
          loading: false
        };
      case DELELTE_FASHION:
        return {
          ...state,
          fashions: state.fashions.filter(fashion => fashion._id !== payload),
          loading: false
        };
      case FASHION_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      case UPDATE_LIKES:
        return {
          ...state,
          fashions: state.fashions.map(fashion =>
            fashion._id === payload.id ? { ...fashion, likes: payload.likes } : fashion
          ),
          loading: false
        };
      default:
        return state;
    }
  }
  