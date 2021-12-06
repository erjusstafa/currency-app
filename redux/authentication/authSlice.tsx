import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuth {
  isAuth: boolean;
}
const initialState: IAuth = {
  isAuth: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LogInOut: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { LogInOut } = authSlice.actions;
export default authSlice.reducer;
