import { call } from "redux-saga/effects";
import { HOST_URL } from "./path";
import axios from "axios";

export default function* (url, method = "GET", data = null, headers = "") {
  const objectRequest = {
    method,
    url: `${HOST_URL}${url}`,
    data,
    headers: {
      Authorization: headers,
    },
  };

  const response = yield call(axios, objectRequest);

  const responseBody = response.data;

  return responseBody;
}
