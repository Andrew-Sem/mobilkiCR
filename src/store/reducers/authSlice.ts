import { useAppDispatch } from "./../../hooks/redux";
import { auth } from "./../actions/authAction";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthResponse } from "../../models/IAuthResponse";

interface AuthState {
  token: string;
  userId: string;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
}

const initialState: AuthState = {
  token: "",
  userId: "",
  loading: "idle",
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        auth.fulfilled,
        (state, action: PayloadAction<IAuthResponse>) => {
          state.loading = "succeeded";
          state.token = action.payload.token;
          state.userId = action.payload.userId;
        }
      )
      .addCase(auth.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default authSlice.reducer;
