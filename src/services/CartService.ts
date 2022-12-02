import { IGame } from "./../models/IGame";
import { AxiosResponse } from "axios";
import { $api } from "../http/api";

export class CartService {
  static fetchCartGames(
    userId: string,
    token: string
  ): Promise<AxiosResponse<IGame[]>> {
    return $api.post("/cart/v1/content", userId, {
      headers: {
        Authorization: "Bearer" + token,
      },
    });
  }
}
