import { combineReducers } from "redux";
import registrationState from "./registration/reducer";
import roleState from "./roles/reducer";
import login from "./login/reducer";
import changeState from "./dashboard/sidebar/reducer";

const reducers = combineReducers({
  registrationState,
  roleState,
  login,
  changeState,
});

export default reducers;
