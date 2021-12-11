import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducerSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
