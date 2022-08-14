import { IAuthResponse } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registration, login } from "./thunks";

const initialState: IAuthResponse = {} as IAuthResponse;

const AuthSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    signOut(state) {
      if (state.token) {
        state.token = "";

        state.user.isAuthorized = false;
        state.user.password = "";
        state.user.email = "";
        state.user.id = "";
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      registration.fulfilled,
      (state, { payload }: PayloadAction<IAuthResponse>) => {
        return payload;
      }
    );
    builder.addCase(registration.rejected, () => {
      return initialState;
    });
    builder.addCase(
      login.fulfilled,
      (state, { payload }: PayloadAction<IAuthResponse>) => {
        if (payload) {
          return payload;
        }
      }
    );
  },
});

const reducer = AuthSlice.reducer;
const actions = { ...AuthSlice.actions };

export { reducer, actions };
