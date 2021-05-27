import {
  SET_LOADER,
  LOAD
} from "./types";

// Set loader
export const setLoader = loader => dispatch => {
  dispatch({ type: SET_LOADER, payload: loader });
};

export const load = data => ({ type: LOAD, data })
