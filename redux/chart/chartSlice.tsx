import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IChartData {
  isLoading: boolean;
  chartApi: any[];
  basket: number;
}

const initialState: IChartData = {
  chartApi: [],
  isLoading: false,
  basket: 0,
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    getChartFetch: (state, action: PayloadAction<IChartData>) => {
      state.isLoading = true;
    },
    getChartSuccess: (state, action: PayloadAction<IChartData & any[]>) => {
      state.chartApi = action.payload;
      state.isLoading = false;
    },
    getChartFailure: (state, action: PayloadAction<IChartData & any[]>) => {
      state.isLoading = false;
      state.chartApi = action.payload;
    },

    incrementBasket: (state) => {
      state.basket = state.basket + 1;
    },
  },
});

export const {
  getChartFetch,
  getChartSuccess,
  getChartFailure,
  incrementBasket,
} = chartSlice.actions;
export default chartSlice.reducer;
