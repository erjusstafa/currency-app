import { call, put, takeLatest } from "redux-saga/effects";
import { getHomeFailure, getHomeFetch, getHomeSuccess } from "./homeSlice";

function* workFetchSaga({ payload }: ReturnType<typeof getHomeFetch>): any {
  try {
    const dataApi = yield call(() =>
      fetch(
        `https://api.coingecko.com/api/v3/coins/${payload}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
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
