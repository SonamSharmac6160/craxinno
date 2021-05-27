import {
  SET_LOADER,
  MONTHLY_PAYMENT,
  INITIALDATA
} from "./types";

// Set loader
export const setLoader = loader => dispatch => {
  dispatch({ type: SET_LOADER, payload: loader });
};

export const getInitialData = (jsonData) => async dispatch => {
  dispatch({ type: INITIALDATA, payload: jsonData });
}

export const monthlyPaymentData = (amount) => async dispatch => {
  dispatch({ type: MONTHLY_PAYMENT, payload: amount });
}
