import { REGISTRATION_ASYNC } from "./action-types";

const initialState = {
  result: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTRATION_ASYNC:
      console.log({ ...state, ...payload });
      return { ...state, ...payload };

    default:
      return state;
  }
};
