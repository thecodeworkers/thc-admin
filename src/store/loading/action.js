import { SET_LOADING } from "./action-types";
export const setLoadingState = (data) => {
  return {
    type: SET_LOADING,
    payload: data,
  };
};
