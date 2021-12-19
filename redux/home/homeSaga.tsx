import { call, put, takeLatest } from "redux-saga/effects";
import { getHomeSuccess } from "./homeSlice";


function* workFetchSaga(): any {
  /*   const { name, email, password } = payload; */
  const dataApi = yield call(() =>
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
  );
  const formateddHome = yield dataApi.json();
  const formateddHomeEnded = formateddHome.slice(0, 15);
  yield put(getHomeSuccess(formateddHomeEnded));
}

function* getDataSaga(): any {
  yield takeLatest("home/getHomeFetch", workFetchSaga);
}

export default getDataSaga;
