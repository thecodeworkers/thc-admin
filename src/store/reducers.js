import { combineReducers } from "redux";
import registration from "./registration/reducer";
import getRoles from "./roles/reducer";
import login from "./login/reducer";

const reducers = combineReducers({
  registration,
  getRoles,
  login,
});

export default reducers;
