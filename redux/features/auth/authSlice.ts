import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  token: string;
  user: any;
}

const initialState: IAuthState = {
  token: "",
  user: null,
};

type IUserRegistration = {
  token: string;
};

type IUserLoggedIn = {
  accessToken: string;
  user: any;
};

type IUserLoggedOut = {};

const usthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration: (state, action: PayloadAction<IUserRegistration>) => {
      state.token = action.payload.token;
    },
    userLoggedIn: (state, action: PayloadAction<IUserLoggedIn>) => {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state, action: PayloadAction<IUserLoggedOut>) => {
      state.token = "";
      state.user = "";
    },
  },
});

export const { userRegistration, userLoggedIn, userLoggedOut } =
  usthSlice.actions;

export default usthSlice.reducer;
