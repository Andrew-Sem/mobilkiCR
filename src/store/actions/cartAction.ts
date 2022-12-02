import { addToCartProps } from "./../../models/addToCartProps";
import { IGame } from "./../../models/IGame";
import { IAuthResponse } from "./../../models/IAuthResponse";
import { CartService } from "./../../services/CartService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartGames = createAsyncThunk(
  "cart/fetch",
  async ({ userId, token }: IAuthResponse) => {
    const res = await CartService.fetchCartGames({ userId, token });
    return res.data;
  }
);

export const addToCart = createAsyncThunk(
  "cart/add",
  async ({ userId, token, gameData }: addToCartProps) => {
    const res = await CartService.addToCart({ userId, token, gameData });
    return res.data;
  }
);
