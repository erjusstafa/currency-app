import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHomeData {
  isLoading: boolean;
  homeApi: any[];
}

const initialState: IHomeData = {
  isLoading: false,
  homeApi: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getHomeFetch: (state) => {
      state.isLoading = true;
    },
    getHomeSuccess: (state, action: PayloadAction<IHomeData & any[]>) => {
      state.homeApi = action.payload;
      state.isLoading = false;
    },
    getHomeFailure: (state, action: PayloadAction<IHomeData>) => {
      state.isLoading = false;
    },
  },
});

export const { getHomeFetch, getHomeSuccess, getHomeFailure } =
  homeSlice.actions;
export default homeSlice.reducer;
