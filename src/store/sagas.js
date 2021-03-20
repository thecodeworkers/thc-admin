import { watchRegistrationAsync } from "./registration/saga";
import { all, fork } from "redux-saga/effects";

export default function* () {
  yield all([fork(watchRegistrationAsync)]);
}
