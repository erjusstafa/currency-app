import { call, put, takeLatest } from "redux-saga/effects";
import { getHomeFailure, getHomeFetch, getHomeSuccess } from "./homeSlice";

function* workFetchSaga({ payload }: ReturnType<typeof getHomeFetch>): any {
  try {
    const dataApi = yield call(() =>
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${payload}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
    );
    const formateddHome = yield dataApi.json();
    yield put(getHomeSuccess(formateddHome));
  } catch (error: any) {
    yield put(getHomeFailure(error));
  }
}

function* getDataSaga(): any {
  yield takeLatest("home/getHomeFetch", workFetchSaga);
}

export default getDataSaga;
