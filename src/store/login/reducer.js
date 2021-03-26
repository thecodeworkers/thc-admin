import { LOGIN_ASYNC } from "./action-types";

const initialState = {
  result: null,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_ASYNC:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default reducer;
