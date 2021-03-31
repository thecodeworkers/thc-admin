import { SET_LOADING } from "./action-types";

const initialState = {
  isLoading: false,
};

const loadingState = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};

export default loadingState;
