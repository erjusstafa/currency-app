import { all, call } from "redux-saga/effects";
import getDataChartSaga from "./chart/chartSaga";
import getDataSaga from "./home/homeSaga";

function* rootSaga() {
  yield all([call(getDataSaga), call(getDataChartSaga)]);
}

export default rootSaga;
