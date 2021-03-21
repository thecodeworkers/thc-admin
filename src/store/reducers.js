import { combineReducers } from "redux";
import registration from "./registration/reducer";
import getRoles from "./roles/reducer";

const reducers = combineReducers({
  registration,
  getRoles,
});

export default reducers;
