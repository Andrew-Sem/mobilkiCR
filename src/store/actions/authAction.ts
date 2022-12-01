import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../services/AuthService";

interface authProps {
  username: string;
  password: string;
}

export const auth = createAsyncThunk(
  "auth",
  async ({ username, password }: authProps) => {
    const res = await AuthService.auth(username, password);
    return res.data;
  }
);
