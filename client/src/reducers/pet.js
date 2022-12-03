import {
    GET_PET,
    PET_ERROR,
    UPDATE_LIKES,
    GET_SINGLEPET,
    DELELTE_PET
  } from "../actions/types";
  
  const initialState = {
    pets: [],
    pet: null,
    loading: true,
    error: {}
  };
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_PET:
        return {
          ...state,
          pets: payload,
          loading: false
        };
      case GET_SINGLEPET:
        return {
          ...state,
          pet: payload,
          loading: false
        };
      case DELELTE_PET:
        return {
          ...state,
          pets: state.pets.filter(pet =>pet._id !== payload),
          loading: false
        };
      case PET_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      case UPDATE_LIKES:
        return {
          ...state,
          pets: state.pets.map(pet =>
            pet._id === payload.id ? { ...pet, likes: payload.likes } : pet
          ),
          loading: false
        };
      default:
        return state;
    }
  }
  