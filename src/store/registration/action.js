import { REGISTRATION } from "./action-types";
export const registration = (data) => {
  return {
    type: REGISTRATION,
    payload: data,
  };
};
