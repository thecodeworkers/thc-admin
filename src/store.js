import { createStore } from "redux";

const initialState = {
  sidebarShow: "responsive",
};

const changeState = (state = initialState, { type, payload }) => {
  switch (type) {
    case "set":
      return { ...state, sidebarShow: payload };
    default:
      return state;
  }
};

const store = createStore(changeState);
export default store;
