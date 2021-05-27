import {
  SET_LOADER,
  LOAD
} from "../actions/types";

const INITIAL_STATE = {
  response: [],
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data
      }
    case SET_LOADER:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
