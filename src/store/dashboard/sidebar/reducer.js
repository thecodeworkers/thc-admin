import { SET_SIDEBAR } from "./action-types";

const initialState = {
  sidebarShow: "responsive",
};

const changeState = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SIDEBAR:
      return { ...state, sidebarShow: payload };
    default:
      return state;
  }
};

export default changeState;
