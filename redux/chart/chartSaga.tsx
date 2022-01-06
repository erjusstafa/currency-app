import { call, put, takeLatest } from "redux-saga/effects";
import { getChartFailure, getChartFetch, getChartSuccess } from "./chartSlice";

function* workFetchChartSaga({
  payload,
}: ReturnType<typeof getChartFetch>): any {
  try {
    const dataApi = yield call(() =>
      fetch(
        `https://api.coingecko.com/api/v3/coins/${payload}/market_chart?vs_currency=usd&days=365`
      )
    );
    const formateddHome = yield dataApi.json();
    yield put(getChartSuccess(formateddHome));
  } catch (error: any) {
    yield put(getChartFailure(error));
  }
}

function* getDataChartSaga(): any {
  yield takeLatest("chart/getChartFetch", workFetchChartSaga);
}

export default getDataChartSaga;
