import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authentication/authSlice";
import chartReducer from "./chart/chartSlice";
import homeReducer from "./home/homeSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  chart: chartReducer,
});

export default rootReducer;
