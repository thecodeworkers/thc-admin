import { combineReducers } from "redux";
import registration from "./registration/reducer";
import getRoles from "./roles/reducer";
import login from "./login/reducer";
import changeState from "./dashboard/sidebar/reducer";

const reducers = combineReducers({
  registration,
  getRoles,
  login,
  changeState,
});

export default reducers;
