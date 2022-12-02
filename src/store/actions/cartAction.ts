import { IAuthResponse } from "./../../models/IAuthResponse";
import { CartService } from "./../../services/CartService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartGames = createAsyncThunk(
  "cart/fetch",
  async ({ userId, token }: IAuthResponse) => {
    const res = await CartService.fetchCartGames(userId, token);
    return res.data;
  }
);
