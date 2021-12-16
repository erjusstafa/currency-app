import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authentication/authSlice";
import homeReducer from "./home/homeSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

export default rootReducer;
