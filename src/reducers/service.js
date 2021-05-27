import {
  SET_LOADER,
  MONTHLY_PAYMENT,
  INITIALDATA
} from "../actions/types";

const INITIAL_STATE = {
  response: [],
  isLoading: false,
  initialData: [],
  monthlyPaymentResponse: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MONTHLY_PAYMENT:
      return { ...state, monthlyPaymentResponse: action.payload, isLoading: false };
    case SET_LOADER:
      return { ...state, isLoading: action.payload };
    case INITIALDATA:
      return { ...state, initialData: action.payload, isLoading: false };
    default:
      return state;
  }
};
