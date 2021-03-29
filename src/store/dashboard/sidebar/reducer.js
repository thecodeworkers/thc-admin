const initialState = {
  sidebarShow: "responsive",
};

const changeState = (state = initialState, { type, payload }) => {
  switch (type) {
    case "set":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default changeState;
