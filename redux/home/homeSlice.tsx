import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHomeData {
  isLoading: boolean;
  homeApi: any[];
  search: string;
  crypto: string;
}

const initialState: IHomeData = {
  isLoading: false,
  homeApi: [],
  search: "",
  crypto: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getHomeFetch: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.crypto = action.payload;
    },
    getHomeSuccess: (state, action: PayloadAction<IHomeData & any[]>) => {
      state.homeApi = action.payload;
      state.isLoading = false;
    },
    getHomeFailure: (state, action: PayloadAction<IHomeData & any[]>) => {
      state.isLoading = false;
      state.homeApi = action.payload;
    },
  },
});

export const { getHomeFetch, getHomeSuccess, getHomeFailure } =
  homeSlice.actions;
export default homeSlice.reducer;
