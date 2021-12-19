import { all, call } from "redux-saga/effects";
import getDataSaga from "./home/homeSaga";

function* rootSaga() {
  yield all([call(getDataSaga)]);
}

export default rootSaga;
