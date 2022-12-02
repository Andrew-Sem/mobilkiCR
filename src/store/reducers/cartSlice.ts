import { PayloadAction } from "@reduxjs/toolkit";
import { fetchCartGames } from "./../actions/cartAction";
import { createSlice } from "@reduxjs/toolkit";
import { IGame } from "./../../models/IGame";

interface CartState {
  games: IGame[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: CartState = {
  games: [],
  loading: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartGames.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchCartGames.fulfilled,
        (state, action: PayloadAction<IGame[]>) => {
          state.loading = "succeeded";
          state.games = action.payload;
        }
      )
      .addCase(fetchCartGames.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default cartSlice.reducer;
