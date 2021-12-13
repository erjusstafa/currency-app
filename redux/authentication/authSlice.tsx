import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuth {
  isAuth: boolean;
  userData: ICredenticial;
}

export interface ICredenticial {
  name: string;
  email: string;
  password: string;
  errorName: any;
  errorEmail: any;
  errorPassword: any;
}

const userData = {
  name: "",
  email: "",
  password: "",
  errorName: "",
  errorEmail: "",
  errorPassword: "",
};
const initialState: IAuth = {
  isAuth: false,
  userData: userData,
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
