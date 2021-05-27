import {
  SET_LOADER,
  LOAD,
  INITIALDATA
} from "./types";

// Set loader
export const setLoader = loader => dispatch => {
  dispatch({ type: SET_LOADER, payload: loader });
};

export const getInitialData = (jsonData, id) => async dispatch => {
  dispatch({ type: INITIALDATA, payload: jsonData.data });
}

export const load = data => ({ type: LOAD, data })
